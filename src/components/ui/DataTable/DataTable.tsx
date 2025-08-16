import React, { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown, Loader2, Search } from 'lucide-react';
import { clsx } from 'clsx';

export interface Column<T> {
  /** Unique identifier for the column */
  key: string;
  /** Display title for the column header */
  title: string;
  /** Function to render cell content */
  render?: (value: any, record: T, index: number) => React.ReactNode;
  /** Whether this column is sortable */
  sortable?: boolean;
  /** Column width (CSS value) */
  width?: string;
  /** Text alignment for the column */
  align?: 'left' | 'center' | 'right';
}

export interface DataTableProps<T> {
  /** Array of data objects to display */
  data: T[];
  /** Column configuration */
  columns: Column<T>[];
  /** Whether the table is in loading state */
  loading?: boolean;
  /** Whether rows are selectable */
  selectable?: boolean;
  /** Callback when row selection changes */
  onRowSelect?: (selectedRows: T[], selectedRowKeys: string[]) => void;
  /** Function to get unique key for each row */
  rowKey?: (record: T) => string;
  /** Custom empty state message */
  emptyText?: string;
  /** Custom loading text */
  loadingText?: string;
  /** Custom CSS class */
  className?: string;
  /** Whether to show search functionality */
  searchable?: boolean;
  /** Placeholder for search input */
  searchPlaceholder?: string;
}

type SortOrder = 'asc' | 'desc' | null;

const DataTable = <T extends Record<string, any>>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
  rowKey = (record: T) => record.id || record.key,
  emptyText = 'No data available',
  loadingText = 'Loading...',
  className,
  searchable = false,
  searchPlaceholder = 'Search...',
}: DataTableProps<T>) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Set<string>>(new Set());
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter data based on search query
  const filteredData = useMemo(() => {
    if (!searchable || !searchQuery) return data;
    
    return data.filter((record) =>
      columns.some((column) => {
        const value = record[column.key];
        return value && value.toString().toLowerCase().includes(searchQuery.toLowerCase());
      })
    );
  }, [data, searchQuery, searchable, columns]);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortColumn || !sortOrder) return filteredData;
    
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortColumn, sortOrder]);

  const handleSort = (columnKey: string) => {
    const column = columns.find(col => col.key === columnKey);
    if (!column?.sortable) return;
    
    if (sortColumn === columnKey) {
      if (sortOrder === 'asc') {
        setSortOrder('desc');
      } else if (sortOrder === 'desc') {
        setSortColumn(null);
        setSortOrder(null);
      } else {
        setSortOrder('asc');
      }
    } else {
      setSortColumn(columnKey);
      setSortOrder('asc');
    }
  };

  const handleRowSelect = (record: T, checked: boolean) => {
    const key = rowKey(record);
    const newSelectedKeys = new Set(selectedRowKeys);
    
    if (checked) {
      newSelectedKeys.add(key);
    } else {
      newSelectedKeys.delete(key);
    }
    
    setSelectedRowKeys(newSelectedKeys);
    
    if (onRowSelect) {
      const selectedRows = sortedData.filter(row => newSelectedKeys.has(rowKey(row)));
      onRowSelect(selectedRows, Array.from(newSelectedKeys));
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allKeys = new Set(sortedData.map(rowKey));
      setSelectedRowKeys(allKeys);
      if (onRowSelect) {
        onRowSelect(sortedData, Array.from(allKeys));
      }
    } else {
      setSelectedRowKeys(new Set());
      if (onRowSelect) {
        onRowSelect([], []);
      }
    }
  };

  const isAllSelected = sortedData.length > 0 && selectedRowKeys.size === sortedData.length;
  const isIndeterminate = selectedRowKeys.size > 0 && selectedRowKeys.size < sortedData.length;

  const renderSortIcon = (column: Column<T>) => {
    if (!column.sortable) return null;
    
    if (sortColumn !== column.key) {
      return (
        <div className="flex flex-col ml-1 opacity-40">
          <ChevronUp className="w-3 h-3 -mb-1" />
          <ChevronDown className="w-3 h-3" />
        </div>
      );
    }
    
    return (
      <div className="ml-1">
        {sortOrder === 'asc' ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </div>
    );
  };

  const renderCell = (column: Column<T>, record: T, index: number) => {
    const value = record[column.key];
    
    if (column.render) {
      return column.render(value, record, index);
    }
    
    return value?.toString() || '';
  };

  return (
    <div className={clsx('bg-white rounded-lg shadow-sm border border-gray-200', className)}>
      {searchable && (
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {selectable && (
                <th className="w-12 px-4 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    ref={(input) => {
                      if (input) input.indeterminate = isIndeterminate;
                    }}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  style={{ width: column.width }}
                  className={clsx(
                    'px-4 py-3 text-sm font-medium text-gray-700',
                    {
                      'text-left': column.align !== 'center' && column.align !== 'right',
                      'text-center': column.align === 'center',
                      'text-right': column.align === 'right',
                      'cursor-pointer hover:bg-gray-100 select-none': column.sortable,
                    }
                  )}
                  onClick={() => handleSort(column.key)}
                >
                  <div className="flex items-center justify-between">
                    <span>{column.title}</span>
                    {renderSortIcon(column)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className="px-4 py-8 text-center text-gray-500"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{loadingText}</span>
                  </div>
                </td>
              </tr>
            ) : sortedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className="px-4 py-8 text-center text-gray-500"
                >
                  {emptyText}
                </td>
              </tr>
            ) : (
              sortedData.map((record, index) => {
                const key = rowKey(record);
                const isSelected = selectedRowKeys.has(key);
                
                return (
                  <tr
                    key={key}
                    className={clsx(
                      'hover:bg-gray-50 transition-colors',
                      isSelected && 'bg-blue-50'
                    )}
                  >
                    {selectable && (
                      <td className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={(e) => handleRowSelect(record, e.target.checked)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td
                        key={column.key}
                        className={clsx(
                          'px-4 py-3 text-sm text-gray-900',
                          {
                            'text-left': column.align !== 'center' && column.align !== 'right',
                            'text-center': column.align === 'center',
                            'text-right': column.align === 'right',
                          }
                        )}
                      >
                        {renderCell(column, record, index)}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      
      {selectable && selectedRowKeys.size > 0 && (
        <div className="px-4 py-3 bg-blue-50 border-t border-gray-200 text-sm text-blue-700">
          {selectedRowKeys.size} row{selectedRowKeys.size !== 1 ? 's' : ''} selected
        </div>
      )}
    </div>
  );
};

export default DataTable;