// InputField component with TS types

import { cn } from "@/utils/cn";
import { FC } from "react";

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
}
type TPassword = "account"

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
                <div className="w-full h-[45px] relative">
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
                            className,
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
