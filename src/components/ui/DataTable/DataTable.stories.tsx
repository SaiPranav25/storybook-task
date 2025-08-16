import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DataTable, { Column } from './DataTable';
import { Badge, Button } from '../../../utils/storybook-components';
import { useState } from 'react';

// Sample data types
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  lastActive: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  rating: number;
}

// Sample data
const sampleUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'active',
    joinDate: '2023-01-15',
    lastActive: '2024-01-15',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Editor',
    status: 'active',
    joinDate: '2023-03-20',
    lastActive: '2024-01-14',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'User',
    status: 'inactive',
    joinDate: '2023-06-10',
    lastActive: '2023-12-01',
  },
  {
    id: '4',
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    role: 'Editor',
    status: 'pending',
    joinDate: '2024-01-01',
    lastActive: '2024-01-10',
  },
  {
    id: '5',
    name: 'Charlie Wilson',
    email: 'charlie.wilson@example.com',
    role: 'User',
    status: 'active',
    joinDate: '2023-08-15',
    lastActive: '2024-01-13',
  },
];

const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    category: 'Electronics',
    stock: 45,
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 299.99,
    category: 'Electronics',
    stock: 23,
    rating: 4.2,
  },
  {
    id: '3',
    name: 'Coffee Mug',
    price: 12.99,
    category: 'Home',
    stock: 100,
    rating: 4.8,
  },
  {
    id: '4',
    name: 'Laptop Stand',
    price: 49.99,
    category: 'Office',
    stock: 15,
    rating: 4.3,
  },
  {
    id: '5',
    name: 'Desk Lamp',
    price: 79.99,
    category: 'Office',
    stock: 8,
    rating: 4.1,
  },
];

const meta: Meta<typeof DataTable> = {
  title: 'UI Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# DataTable Component

A powerful and flexible data table component with sorting, selection, search, and customization options.

## Features
- **Column Sorting** - Click headers to sort data ascending/descending
- **Row Selection** - Single or multiple row selection with callbacks
- **Search Functionality** - Built-in search across all columns
- **Loading States** - Elegant loading and empty state handling
- **Custom Rendering** - Full control over cell content rendering
- **Responsive Design** - Horizontal scrolling on smaller screens

## Anatomy
The DataTable consists of:
1. **Search Bar** (optional) - Filter data across columns
2. **Table Header** - Column titles with sorting indicators  
3. **Selection Column** (optional) - Checkboxes for row selection
4. **Table Body** - Data rows with custom cell rendering
5. **Selection Summary** - Shows count of selected rows

## Accessibility
- Full keyboard navigation support
- Screen reader compatible headers and content
- ARIA labels for interactive elements
- High contrast support for focus states
- Semantic table markup

## Best Practices
- Use meaningful column titles
- Provide appropriate empty and loading states
- Keep cell content concise and scannable
- Use sorting for large datasets
- Consider pagination for very large datasets
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    selectable: {
      control: 'boolean',
      description: 'Enable row selection',
    },
    searchable: {
      control: 'boolean', 
      description: 'Enable search functionality',
    },
    onRowSelect: { action: 'rows selected' },
  },
  args: {
    onRowSelect: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Define user columns
const userColumns: Column<User>[] = [
  {
    key: 'name',
    title: 'Name',
    sortable: true,
  },
  {
    key: 'email',
    title: 'Email',
    sortable: true,
  },
  {
    key: 'role',
    title: 'Role',
    sortable: true,
    render: (value) => (
      <Badge variant={value === 'Admin' ? 'primary' : value === 'Editor' ? 'secondary' : 'default'}>
        {value}
      </Badge>
    ),
  },
  {
    key: 'status',
    title: 'Status',
    sortable: true,
    render: (value) => (
      <Badge 
        variant={value === 'active' ? 'success' : value === 'pending' ? 'warning' : 'error'}
      >
        {value}
      </Badge>
    ),
  },
  {
    key: 'joinDate',
    title: 'Join Date',
    sortable: true,
  },
];

// Basic Examples
export const Default: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
  },
};

export const WithSearch: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    searchable: true,
    searchPlaceholder: 'Search users...',
  },
};

export const WithSelection: Story = {
  args: {
    data: sampleUsers,
    columns: userColumns,
    selectable: true,
    searchable: true,
  },
};

// States
export const LoadingState: Story = {
  args: {
    data: [],
    columns: userColumns,
    loading: true,
    loadingText: 'Loading users...',
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    columns: userColumns,
    emptyText: 'No users found',
    searchable: true,
  },
};

// Product Table Example
export const ProductTable: Story = {
  render: () => {
    const productColumns: Column<Product>[] = [
      {
        key: 'name',
        title: 'Product Name',
        sortable: true,
        width: '200px',
      },
      {
        key: 'price',
        title: 'Price',
        sortable: true,
        align: 'right',
        render: (value) => `$${value.toFixed(2)}`,
      },
      {
        key: 'category',
        title: 'Category',
        sortable: true,
        render: (value) => (
          <Badge variant="outline">{value}</Badge>
        ),
      },
      {
        key: 'stock',
        title: 'Stock',
        sortable: true,
        align: 'center',
        render: (value) => (
          <Badge variant={value > 20 ? 'success' : value > 10 ? 'warning' : 'error'}>
            {value}
          </Badge>
        ),
      },
      {
        key: 'rating',
        title: 'Rating',
        sortable: true,
        align: 'center',
        render: (value) => (
          <div className="flex items-center">
            {'★'.repeat(Math.floor(value))}
            <span className="ml-1 text-gray-600">{value}</span>
          </div>
        ),
      },
    ];

    return (
      <DataTable
        data={sampleProducts}
        columns={productColumns}
        searchable
        selectable
        searchPlaceholder="Search products..."
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing a product catalog with custom cell rendering, different alignments, and various data types.',
      },
    },
  },
};

// Interactive Example
export const InteractiveExample: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<User[]>([]);
    const [data, setData] = useState(sampleUsers);
    const [loading, setLoading] = useState(false);

    const handleRowSelect = (rows: User[]) => {
      setSelectedRows(rows);
    };

    const handleDeleteSelected = () => {
      setLoading(true);
      setTimeout(() => {
        const selectedIds = selectedRows.map(row => row.id);
        setData(prev => prev.filter(item => !selectedIds.includes(item.id)));
        setSelectedRows([]);
        setLoading(false);
      }, 1000);
    };

    const handleRefresh = () => {
      setLoading(true);
      setTimeout(() => {
        setData(sampleUsers);
        setSelectedRows([]);
        setLoading(false);
      }, 1000);
    };

    const columnsWithActions: Column<User>[] = [
      ...userColumns,
      {
        key: 'actions',
        title: 'Actions',
        render: (_, record) => (
          <div className="space-x-2">
            <Button size="sm" variant="outline">
              Edit
            </Button>
            <Button size="sm" variant="outline" color="red">
              Delete
            </Button>
          </div>
        ),
      },
    ];

    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">User Management</h3>
          <div className="space-x-2">
            <Button onClick={handleRefresh} disabled={loading}>
              Refresh
            </Button>
            {selectedRows.length > 0 && (
              <Button
                onClick={handleDeleteSelected}
                variant="solid"
                color="red"
                disabled={loading}
              >
                Delete Selected ({selectedRows.length})
              </Button>
            )}
          </div>
        </div>
        
        <DataTable
          data={data}
          columns={columnsWithActions}
          loading={loading}
          selectable
          searchable
          onRowSelect={handleRowSelect}
          searchPlaceholder="Search users..."
        />
        
        {selectedRows.length > 0 && (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-900">Selected Users:</h4>
            <ul className="mt-2 text-sm text-blue-700">
              {selectedRows.map(user => (
                <li key={user.id}>{user.name} - {user.email}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example with row selection, bulk actions, and dynamic data updates.',
      },
    },
  },
};

// Custom Rendering Examples
export const CustomRendering: Story = {
  render: () => {
    const customColumns: Column<User>[] = [
      {
        key: 'name',
        title: 'User',
        render: (_, record) => (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-blue-600">
                {record.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </span>
            </div>
            <div>
              <div className="font-medium text-gray-900">{record.name}</div>
              <div className="text-sm text-gray-500">{record.email}</div>
            </div>
          </div>
        ),
      },
      {
        key: 'role',
        title: 'Role & Status',
        render: (_, record) => (
          <div className="space-y-1">
            <Badge variant={record.role === 'Admin' ? 'primary' : 'secondary'}>
              {record.role}
            </Badge>
            <div>
              <Badge
                size="sm"
                variant={record.status === 'active' ? 'success' : record.status === 'pending' ? 'warning' : 'error'}
              >
                {record.status}
              </Badge>
            </div>
          </div>
        ),
      },
      {
        key: 'activity',
        title: 'Activity',
        render: (_, record) => (
          <div className="text-sm">
            <div className="text-gray-900">Joined: {record.joinDate}</div>
            <div className="text-gray-500">Last active: {record.lastActive}</div>
          </div>
        ),
      },
    ];

    return (
      <DataTable
        data={sampleUsers}
        columns={customColumns}
        searchable
        searchPlaceholder="Search users..."
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showcasing complex custom cell rendering with avatars, multiple data points, and rich content.',
      },
    },
  },
};

// Best Practices
export const BestPractices: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold text-green-700 mb-4">✅ Good Practices</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Clear, Descriptive Headers</h4>
            <DataTable
              data={sampleUsers.slice(0, 2)}
              columns={[
                { key: 'name', title: 'Full Name', sortable: true },
                { key: 'email', title: 'Email Address', sortable: true },
                { key: 'role', title: 'User Role', sortable: true },
              ]}
            />
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Meaningful Empty States</h4>
            <DataTable
              data={[]}
              columns={userColumns}
              emptyText="No users found. Try adjusting your search criteria or add new users."
              searchable
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-red-700 mb-4">❌ Avoid These</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Vague Headers</h4>
            <DataTable
              data={sampleUsers.slice(0, 2)}
              columns={[
                { key: 'name', title: 'Name' },
                { key: 'email', title: 'Contact' },
                { key: 'role', title: 'Type' },
              ]}
            />
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Generic Empty State</h4>
            <DataTable
              data={[]}
              columns={userColumns}
              emptyText="No data"
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Best Practices:

**Do:**
- Use clear, descriptive column headers
- Provide meaningful empty states with actionable guidance
- Use appropriate data formatting (currency, dates, etc.)
- Implement sorting for large datasets
- Show loading states during data fetching
- Use consistent alignment for similar data types

**Don't:**
- Use vague or abbreviated column headers
- Show generic "No data" messages
- Mix data types in the same column without formatting
- Make all columns sortable if not needed
- Hide important actions in dropdowns unnecessarily
        `,
      },
    },
  },
};