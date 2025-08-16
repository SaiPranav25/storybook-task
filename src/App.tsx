import React, { useState } from 'react';
import { InputField, DataTable } from './components';
import type { Column } from './components/ui/DataTable/DataTable';
import { Mail, Search, User } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
}

const sampleUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'active',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Editor',
    status: 'active',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'User',
    status: 'inactive',
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  const columns: Column<User>[] = [
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
        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
          value === 'Admin' 
            ? 'bg-purple-100 text-purple-800'
            : value === 'Editor'
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-gray-100 text-gray-800'
        }`}>
          {value}
        </span>
      ),
    },
    {
      key: 'status',
      title: 'Status',
      sortable: true,
      render: (value) => (
        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
          value === 'active' 
            ? 'bg-green-100 text-green-800'
            : value === 'pending'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            React Component Library
          </h1>
          <p className="text-gray-600">
            Showcasing InputField and DataTable components built with React, TypeScript, and TailwindCSS
          </p>
        </div>

        {/* InputField Examples */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">InputField Component</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Basic Examples</h3>
              <div className="space-y-4">
                <InputField
                  label="Search"
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  leftIcon={<Search className="w-4 h-4" />}
                  clearable
                />
                
                <InputField
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  leftIcon={<Mail className="w-4 h-4" />}
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">Variants & Sizes</h3>
              <div className="space-y-4">
                <InputField
                  variant="filled"
                  size="sm"
                  placeholder="Small filled input"
                />
                
                <InputField
                  variant="outlined"
                  size="md"
                  placeholder="Medium outlined (default)"
                />
                
                <InputField
                  variant="ghost"
                  size="lg"
                  placeholder="Large ghost input"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">States & Features</h3>
              <div className="space-y-4">
                <InputField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  showPasswordToggle
                  placeholder="Enter password"
                />
                
                <InputField
                  label="Loading State"
                  placeholder="Loading..."
                  loading
                />
                
                <InputField
                  label="Error State"
                  placeholder="Invalid input"
                  invalid
                  errorMessage="This field is required"
                />
              </div>
            </div>
          </div>
        </div>

        {/* DataTable Example */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">DataTable Component</h2>
          
          {selectedUsers.length > 0 && (
            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Selected Users:</h3>
              <div className="text-sm text-blue-700">
                {selectedUsers.map(user => user.name).join(', ')}
              </div>
            </div>
          )}
          
          <DataTable
            data={sampleUsers}
            columns={columns}
            selectable
            searchable
            searchPlaceholder="Search users by name, email, or role..."
            onRowSelect={(users) => setSelectedUsers(users)}
          />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Built with React, TypeScript, TailwindCSS, and Storybook
          </p>
          <p className="mt-1">
            Run <code className="bg-gray-100 px-2 py-1 rounded">npm run storybook</code> to view comprehensive documentation
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;