import React, { useState, forwardRef } from 'react';
import { Eye, EyeOff, X, Loader2 } from 'lucide-react';
import { clsx } from 'clsx';

export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The current value of the input */
  value?: string;
  /** Callback fired when the input value changes */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Label text displayed above the input */
  label?: string;
  /** Placeholder text shown when input is empty */
  placeholder?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message displayed when invalid */
  errorMessage?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input has validation errors */
  invalid?: boolean;
  /** Whether the input is in loading state */
  loading?: boolean;
  /** Visual variant of the input */
  variant?: 'filled' | 'outlined' | 'ghost';
  /** Size of the input */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to show clear button when input has value */
  clearable?: boolean;
  /** Whether this is a password input with toggle visibility */
  showPasswordToggle?: boolean;
  /** Icon to display on the left side */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right side */
  rightIcon?: React.ReactNode;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({
    value = '',
    onChange,
    label,
    placeholder,
    helperText,
    errorMessage,
    disabled = false,
    invalid = false,
    loading = false,
    variant = 'outlined',
    size = 'md',
    clearable = false,
    showPasswordToggle = false,
    leftIcon,
    rightIcon,
    type = 'text',
    className,
    ...props
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    
    const hasError = invalid || !!errorMessage;
    const hasValue = value.length > 0;
    const inputType = showPasswordToggle && showPassword ? 'text' : type;

    const sizeClasses = {
      sm: 'h-8 text-sm px-3',
      md: 'h-10 text-sm px-3',
      lg: 'h-12 text-base px-4',
    };

    const variantClasses = {
      filled: clsx(
        'bg-gray-50 border-transparent',
        'focus:bg-white focus:border-blue-500',
        hasError && 'bg-red-50 focus:bg-red-50 border-red-300 focus:border-red-500',
        disabled && 'bg-gray-100'
      ),
      outlined: clsx(
        'bg-white border-gray-300',
        'focus:border-blue-500',
        hasError && 'border-red-300 focus:border-red-500',
        disabled && 'bg-gray-50'
      ),
      ghost: clsx(
        'bg-transparent border-transparent border-b-2 rounded-none border-b-gray-300',
        'focus:border-b-blue-500',
        hasError && 'border-b-red-300 focus:border-b-red-500'
      ),
    };

    const handleClear = () => {
      if (onChange) {
        const syntheticEvent = {
          target: { value: '' },
          currentTarget: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className={clsx('w-full', className)}>
        {label && (
          <label className={clsx(
            'block text-sm font-medium mb-1',
            hasError ? 'text-red-700' : 'text-gray-700',
            disabled && 'text-gray-400'
          )}>
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            type={inputType}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={clsx(
              // Base styles
              'w-full border rounded-lg transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-blue-500/20',
              'placeholder-gray-400',
              
              // Size styles
              sizeClasses[size],
              
              // Variant styles
              variantClasses[variant],
              
              // Icon padding
              leftIcon && 'pl-10',
              (rightIcon || clearable || showPasswordToggle || loading) && 'pr-10',
              
              // Disabled styles
              disabled && 'cursor-not-allowed opacity-60'
            )}
            {...props}
          />
          
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
            {loading && (
              <Loader2 className="w-4 h-4 text-gray-400 animate-spin" />
            )}
            
            {!loading && clearable && hasValue && !disabled && (
              <button
                type="button"
                onClick={handleClear}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                tabIndex={-1}
              >
                <X className="w-4 h-4" />
              </button>
            )}
            
            {!loading && showPasswordToggle && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            )}
            
            {!loading && !clearable && !showPasswordToggle && rightIcon && (
              <div className="text-gray-400">
                {rightIcon}
              </div>
            )}
          </div>
        </div>
        
        {(helperText || errorMessage) && (
          <div className={clsx(
            'mt-1 text-xs',
            hasError ? 'text-red-600' : 'text-gray-500'
          )}>
            {errorMessage || helperText}
          </div>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;