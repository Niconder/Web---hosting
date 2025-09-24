import * as React from "react";
import { cn } from "../../lib/utils";
import { Input } from "./input";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerClassName?: string;
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ className, label, containerClassName, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);
    
    React.useEffect(() => {
      // Check if the input has a value
      setHasValue(!!props.value || !!props.defaultValue);
    }, [props.value, props.defaultValue]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!e.target.value);
      props.onChange?.(e);
    };

    return (
      <div className={cn("relative", containerClassName)}>
        <span
          className={cn(
            "absolute left-4 transition-all duration-200 pointer-events-none text-gray-500",
            isFocused || hasValue
              ? "top-1 text-xs text-[#00398e]"
              : "top-1/2 -translate-y-1/2 text-base"
          )}
        >
          {label}
        </span>
        <Input
          className={cn(
            "h-14 rounded-xl border-[1.6px] border-[#cccccc] px-4",
            isFocused || hasValue ? "pt-5 pb-[11px]" : "py-[11px]",
            isFocused && "border-[#00398e]",
            className
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
      </div>
    );
  }
);

FormField.displayName = "FormField";

export { FormField };