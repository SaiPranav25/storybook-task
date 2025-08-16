# React Component Library

A production-ready React component library featuring InputField and DataTable components, built with React, TypeScript, and TailwindCSS. Includes comprehensive Storybook documentation with interactive examples.

## 🚀 Features

### InputField Component
- **Multiple Variants**: filled, outlined, ghost
- **Three Sizes**: small, medium, large
- **Validation States**: error messages, helper text
- **Interactive Features**: clear button, password toggle
- **Icon Support**: left and right icons
- **Accessibility**: ARIA labels, keyboard navigation
- **Loading States**: with spinner animation

### DataTable Component
- **Column Sorting**: click headers to sort ascending/descending
- **Row Selection**: single or multiple selection with callbacks
- **Search Functionality**: filter data across all columns
- **Custom Rendering**: full control over cell content
- **Loading & Empty States**: elegant state handling
- **Responsive Design**: horizontal scrolling on smaller screens

## 🎨 Design System

- **Color System**: Primary (#3B82F6), Secondary (#10B981), Accent (#F59E0B)
- **Typography**: Clean, readable fonts with proper contrast ratios
- **Spacing**: Consistent 8px grid system
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: WCAG compliant with keyboard navigation support

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Launch Storybook documentation
npm run storybook

# Build for production
npm run build

# Build Storybook
npm run build-storybook
```

## 🔧 Usage

### InputField

```tsx
import { InputField } from './components';

function MyForm() {
  const [email, setEmail] = useState('');
  
  return (
    <InputField
      label="Email Address"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
      leftIcon={<Mail className="w-4 h-4" />}
      clearable
    />
  );
}
```

### DataTable

```tsx
import { DataTable, Column } from './components';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const columns: Column<User>[] = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'email', title: 'Email', sortable: true },
  { 
    key: 'role', 
    title: 'Role', 
    render: (value) => <Badge>{value}</Badge> 
  },
];

function UserTable() {
  return (
    <DataTable
      data={users}
      columns={columns}
      selectable
      searchable
      onRowSelect={(selectedRows) => console.log(selectedRows)}
    />
  );
}
```

## 📚 Documentation

Comprehensive documentation is available in Storybook, featuring:

- **Component API**: TypeScript interfaces and prop definitions
- **Interactive Examples**: Live component playground
- **Use Cases**: Real-world implementation examples
- **Accessibility Notes**: ARIA roles and keyboard navigation
- **Best Practices**: Do's and don'ts with visual examples

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── InputField/
│   │   │   ├── InputField.tsx
│   │   │   └── InputField.stories.tsx
│   │   └── DataTable/
│   │       ├── DataTable.tsx
│   │       └── DataTable.stories.tsx
│   └── index.ts
├── utils/
│   └── storybook-components.tsx
└── App.tsx
```

## 🎯 Component Features

### InputField Props
```typescript
interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  clearable?: boolean;
  showPasswordToggle?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
```

### DataTable Props
```typescript
interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[], selectedRowKeys: string[]) => void;
  rowKey?: (record: T) => string;
  searchable?: boolean;
  emptyText?: string;
  loadingText?: string;
}
```

## 🎨 Storybook Stories

Both components include comprehensive Storybook documentation:

- **Default Examples**: Basic usage patterns
- **Variants & Sizes**: Visual style options
- **States**: Loading, error, disabled states
- **Interactive Features**: Live functionality demos
- **Best Practices**: Guidelines and examples
- **Accessibility**: Screen reader and keyboard support

## 🚀 Deployment

The Storybook documentation can be deployed to:
- **Chromatic**: For visual testing and review
- **Vercel**: For static hosting
- **Netlify**: For continuous deployment

```bash
# Build Storybook for deployment
npm run build-storybook

# Deploy the storybook-static folder to your hosting provider
```

## 🧪 Technical Approach

- **TypeScript**: Full type safety and IntelliSense support
- **React Patterns**: Modern hooks and functional components
- **TailwindCSS**: Utility-first styling with custom design system
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Optimized rendering and memory usage
- **Maintainability**: Clean, modular architecture

## 📝 License

This project is created for educational purposes as part of a React component development assignment.

## 🤝 Contributing

This is an assignment project, but feedback and suggestions are welcome for learning purposes.