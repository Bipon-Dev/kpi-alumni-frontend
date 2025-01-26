// InputField component with TS types
import { cn } from "@/utils/cn";
import React, { useState, FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

type TInputFieldProps = {
  label: string;
  type?: string;
  placeholder?: string;
  name: string;
  formData: any;
  onChange: any;
  onBlur?: any;
  className?: string;
  autoComplete?: string;
  disabled?: boolean;
  loading?: boolean;
  valid?: boolean;
  show?: boolean;
};
type TPassword = "account";

export const InputField: FC<
  TInputFieldProps & {
    passwordType?: TPassword;
  }
> = ({
  label,
  type,
  placeholder = "",
  name,
  autoComplete = "off",
  formData,
  onChange,
  onBlur,
  className = "",
  disabled = false,
}) => {
  return (
    <div>
      <label className="text-base font-medium text-primary">{label}</label>
      <div className="w-full h-[45px] relative flex items-center justify-center">
        <input
          type={type ? type : "text"}
          name={name}
          value={formData[name] || ""}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autoComplete}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "block w-full h-full px-2.5 mt-1 border rounded-[8px] text-base outline-none disabled:grayscale",
            className
          )}
        />
      </div>
    </div>
  );
};

// InputField component with TS types
export const InputTextareaField: FC<TInputFieldProps> = ({
  label,
  placeholder = "",
  name,
  formData,
  onChange,
  className = "",
  disabled = false,
}) => {
  return (
    <div>
      <label className="text-base font-medium text-primary">{label}</label>
      <div className="w-full h-auto">
        <textarea
          name={name}
          value={formData[name]}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "block w-full h-full px-2.5 py-2.5 mt-1 border rounded-[8px] text-base outline-none disabled:grayscale",
            className
          )}
        />
      </div>
    </div>
  );
};

interface TInputDateProps {
  name: string;
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  disabled?: boolean;
  className?: string;
}

export const InputDate: React.FC<TInputDateProps> = ({
  name,
  formData,
  setFormData,
  disabled,
  className,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    formData[name] ? new Date(formData[name]) : new Date()
  );

  const handleOnChange = (date: Date | null) => {
    setSelectedDate(date);

    if (date) {
      setFormData((prev: any) => ({
        ...prev,
        [name]: dayjs(date).unix(),
      }));
    }
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleOnChange}
      disabled={disabled}
      placeholderText="Select Date"
      className={cn(
        "w-full p-2 rounded border border-gray-300 text-sm font-medium text-primary",
        className,
        {
          "pointer-events-none opacity-50": disabled,
        }
      )}
    />
  );
};
