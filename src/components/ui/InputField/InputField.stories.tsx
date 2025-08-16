import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import InputField from './InputField';
import { Mail, Search, User } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof InputField> = {
  title: 'UI Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# InputField Component

A flexible and accessible input component with validation states, multiple variants, and extensive customization options.

## Features
- Multiple variants: filled, outlined, ghost
- Three sizes: small, medium, large  
- Validation states with error handling
- Loading state with spinner
- Optional clear button and password toggle
- Icon support (left and right)
- Full accessibility support
- Keyboard navigation

## Anatomy
The InputField component consists of:
1. **Label** (optional) - Descriptive text above the input
2. **Input Field** - The main text input element
3. **Icons** - Optional left/right icons for context
4. **Action Buttons** - Clear button, password toggle
5. **Helper/Error Text** - Guidance or validation feedback

## Accessibility
- Proper ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- Screen reader compatible
- High contrast support
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'ghost'],
      description: 'Visual style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    onChange: { action: 'changed' },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be at least 3 characters long',
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputField
        variant="outlined"
        label="Outlined (default)"
        placeholder="Outlined input"
      />
      <InputField
        variant="filled"
        label="Filled"
        placeholder="Filled input"
      />
      <InputField
        variant="ghost"
        label="Ghost"
        placeholder="Ghost input"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three visual variants available: outlined, filled, and ghost.',
      },
    },
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputField
        size="sm"
        label="Small"
        placeholder="Small input"
      />
      <InputField
        size="md"
        label="Medium (default)"
        placeholder="Medium input"
      />
      <InputField
        size="lg"
        label="Large"
        placeholder="Large input"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three sizes available: small, medium, and large.',
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputField
        label="Normal"
        placeholder="Normal state"
        value=""
      />
      <InputField
        label="With Value"
        value="Sample text"
      />
      <InputField
        label="Disabled"
        placeholder="Disabled input"
        disabled
      />
      <InputField
        label="Loading"
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
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different states: normal, filled, disabled, loading, and error.',
      },
    },
  },
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <InputField
        label="Search"
        placeholder="Search..."
        leftIcon={<Search className="w-4 h-4" />}
      />
      <InputField
        label="Email"
        placeholder="Enter email"
        type="email"
        leftIcon={<Mail className="w-4 h-4" />}
      />
      <InputField
        label="User Profile"
        placeholder="Username"
        leftIcon={<User className="w-4 h-4" />}
        rightIcon={<Mail className="w-4 h-4" />}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'InputField supports both left and right icons for enhanced UX.',
      },
    },
  },
};

// Interactive Features
export const InteractiveFeatures: Story = {
  render: () => {
    const [clearableValue, setClearableValue] = useState('Text to clear');
    const [passwordValue, setPasswordValue] = useState('secretpassword');
    
    return (
      <div className="space-y-4 w-80">
        <InputField
          label="Clearable Input"
          value={clearableValue}
          onChange={(e) => setClearableValue(e.target.value)}
          clearable
          placeholder="Type something..."
        />
        <InputField
          label="Password with Toggle"
          type="password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          showPasswordToggle
          placeholder="Enter password"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive features: clearable input and password visibility toggle.',
      },
    },
  },
};

// Form Example
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    
    const [errors, setErrors] = useState<Record<string, string>>({});
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};
      
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.password) newErrors.password = 'Password is required';
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        alert('Form submitted successfully!');
      }
    };
    
    return (
      <form onSubmit={handleSubmit} className="space-y-4 w-80">
        <InputField
          label="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter your full name"
          errorMessage={errors.name}
          invalid={!!errors.name}
          leftIcon={<User className="w-4 h-4" />}
        />
        <InputField
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter your email"
          errorMessage={errors.email}
          invalid={!!errors.email}
          leftIcon={<Mail className="w-4 h-4" />}
        />
        <InputField
          label="Password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          placeholder="Create a password"
          errorMessage={errors.password}
          invalid={!!errors.password}
          showPasswordToggle
        />
        <InputField
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          placeholder="Confirm your password"
          errorMessage={errors.confirmPassword}
          invalid={!!errors.confirmPassword}
          showPasswordToggle
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete form example showing validation, different input types, and error handling.',
      },
    },
  },
};

// Best Practices
export const BestPractices: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="font-semibold text-green-700">✅ Do's</h3>
        <div className="space-y-4 w-80">
          <InputField
            label="Clear, descriptive labels"
            placeholder="Specific, helpful placeholder"
            helperText="Provide helpful guidance"
          />
          <InputField
            label="Appropriate Input Type"
            type="email"
            placeholder="user@example.com"
            leftIcon={<Mail className="w-4 h-4" />}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-semibold text-red-700">❌ Don'ts</h3>
        <div className="space-y-4 w-80">
          <InputField
            placeholder="Don't rely only on placeholders"
          />
          <InputField
            label="vague"
            placeholder="placeholder as label replacement"
            helperText="Avoid overly technical language in helper text"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Do's:
- Always provide clear, descriptive labels
- Use appropriate input types (email, tel, password, etc.)
- Provide helpful placeholder text and guidance
- Show validation feedback immediately
- Use icons to provide context

### Don'ts:
- Don't rely solely on placeholders for labeling
- Don't use vague or unclear labels
- Don't show errors before user interaction
- Don't use overly technical language in helper text
        `,
      },
    },
  },
};