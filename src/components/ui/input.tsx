import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  rightElement?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type = "text", label, error, rightElement, id, ...props }, ref) => {
    const defaultId = React.useId();
    const inputId = id || defaultId;
    return (
      <div className="w-full flex flex-col items-start gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold text-dark font-sans tracking-wide"
          >
            {label}
          </label>
        )}
        <div className="relative w-full">
          <input
            id={inputId}
            ref={ref}
            type={type}
            className={`w-full bg-gray-light text-dark font-sans placeholder:text-gray-medium text-sm rounded-xl py-3 px-4 transition-all duration-200 border border-transparent focus:outline-none focus:bg-white focus:border-brand focus:ring-2 focus:ring-brand/20 ${
              error ? "border-brand focus:border-brand focus:ring-brand/20" : ""
            } ${rightElement ? "pr-12" : ""} ${className}`}
            {...props}
          />
          {rightElement && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3.5">
              {rightElement}
            </div>
          )}
        </div>
        {error && (
          <span className="text-[11px] text-brand font-sans font-semibold leading-none" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
