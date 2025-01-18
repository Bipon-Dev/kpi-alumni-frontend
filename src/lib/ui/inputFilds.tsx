import { cn } from "@/utils/cn";
import { FC, useEffect, useRef, useState } from "react";

// Define the prop types for InputField component
type TInputFieldProps = {
  label: any;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  name: string;
  formData: Record<string, any>;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean | undefined;
  valid?: boolean | undefined;
  show?: boolean;
  unit?: string;
};
type TPassword = "account";
// InputField component with TS types
export const AnimateInputField: FC<
  TInputFieldProps & {
    passwordType?: TPassword;
    calculate?: boolean;
    currency?: string;
    readOnly?: boolean;
    required?: boolean;
  }
> = ({
  label,
  type = "text",
  placeholder = "",
  autoComplete = "off",
  calculate = false,
  name,
  formData,
  onChange,
  onBlur,
  className = "",
  disabled = false,
  passwordType,
  loading,
  valid,
  show,
  required,
  unit,
  currency,
  readOnly,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (!disabled && ref.current) {
      ref.current.focus();
      setFocused(true);
    }
  };

  const handleBlur = () => {
    if (ref.current) {
      setFocused(false);
    }
  };

  const handleChange = (ev: any) => {
    if (!calculate) {
      return onChange(ev);
    }
  };

  // Focus the input when `focused` is set to true
  useEffect(() => {
    if (focused && ref.current) {
      ref.current.focus();
    }
  }, [focused]);

  const isValue =
    typeof formData?.[name] === "number"
      ? formData?.[name] > 0
      : formData?.[name]?.length > 0;

  return (
    <div className="animate-input w-full">
      <div
        className={cn("w-full h-[45px] relative overflow-visible", className)}
        onClick={handleFocus}
      >
        <label
          className={cn(
            "text-sm font-medium text-primary-700 leading-5 bg-white absolute top-1/2 left-2.5 -translate-y-1/2 transition-all duration-300 focus:bg-white",
            {
              "-top-2 left-4 translate-x-0 translate-y-0":
                (focused || isValue) && !disabled,
              "text-secondary-700": focused,
            }
          )}
        >
          {label || "Type something"}
        </label>
        <input
          ref={ref}
          type={showPassword ? "text" : type}
          required={required}
          name={name}
          value={formData[name] || ""}
          onChange={handleChange}
          onBlur={onBlur || handleBlur}
          autoComplete={autoComplete}
          disabled={disabled}
          readOnly={readOnly}
          className={cn(
            "block w-full h-full px-2.5 caret-white border rounded-[8px] text-base outline-none disabled:grayscale transition-colors",
            {
              "border-secondary-700 caret-current": focused,
              "pr-10": type === "password",
              "pr-12": unit,
              "pl-11": passwordType && passwordType.length > 0,
            }
          )}
        />

        {type === "password" && (focused || isValue) && !disabled && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute h-4 w-4 top-1/2 right-2 transform -translate-y-1/2 text-primary-700 opacity-70"
          >
            <img
              src={
                showPassword
                  ? "https://files.bikiran.com/assets/images/icon/icon-pass-show.svg"
                  : "https://files.bikiran.com/assets/images/icon/icon-pass-hide.svg"
              }
              alt="eye"
              width={16}
              height={16}
            />
          </button>
        )}

        {show && (
          <div className="absolute top-1/2 right-2 flex items-center space-x-2 transform -translate-y-1/2">
            loading !== undefined &&
          </div>
        )}

        {currency && (focused || isValue) && !disabled && (
          <div className="absolute top-1/2 right-2 flex items-center space-x-2 transform -translate-y-1/2">
            <div className="text-[10px] text-primary-700">
              {unit && currency ? `${currency}/${unit}` : unit || currency}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
