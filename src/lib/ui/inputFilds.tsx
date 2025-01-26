import { cn } from "@/utils/cn";
import { FC, useEffect, useRef, useState } from "react";
export type TInputChangeEvent = React.ChangeEvent<HTMLInputElement>;
// Define the prop types for InputField component
type TInputFieldProps = {
  label: any;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  name: string;
  formData: Record<string, any>;
  onChange: (e: TInputChangeEvent | any) => void;
  onBlur?: (e: TInputChangeEvent) => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean | undefined;
  valid?: boolean | undefined;
  show?: boolean;
  unit?: string;
};
export const AnimateTextArea: FC<TInputFieldProps> = ({
  label,
  type = "text",
  name,
  formData,
  onChange,
  className = "",
  disabled = false,
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const ref = useRef<HTMLTextAreaElement>(null);

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
    <div className="animate-input">
      <div
        className={cn("w-full h-[45px] relative overflow-visible", className)}
        onClick={() => setFocused(true)}
      >
        <label
          className={cn(
            "text-sm font-medium text-primary-700 bg-white absolute top-[15px] left-2.5 -translate-y-1/2 transition-all duration-300",
            {
              "-top-2 left-4 translate-x-0 translate-y-0":
                (focused || isValue) && !disabled,
              "text-secondary-700": focused,
            }
          )}
        >
          {label || "Type something"}
        </label>
        <textarea
          ref={ref}
          name={name}
          value={formData[name] || ""}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          className={cn(
            "block w-full h-full p-2.5 caret-white border rounded-[8px] text-base outline-none disabled:grayscale transition-colors",
            {
              "border-secondary-700 caret-current": focused,
              "pr-10": type === "password",
            }
          )}
        />
      </div>
    </div>
  );
};
