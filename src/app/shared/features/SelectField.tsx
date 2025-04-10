// Select Field component with TS types
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";
import { cn } from "@/utils/cn";
import { FC } from "react";
type TInputFieldProps = {
  label: string;
  placeholder?: string;
  name: string;
  formData: any;
  onChange: any;
  className?: string;
  disabled?: boolean;
};
type TSelectOption = {
  id: number;
  icon?: string;
  title: string;
  value: string;
};

export const SelectField: FC<
  TInputFieldProps & {
    options: TSelectOption[];
  }
> = ({
  options,
  label,
  placeholder = "",
  name,
  formData,
  onChange,
  className = "",
  disabled = false,
}) => {
  const handleOnChange = (v: string) => {
    // Avoid triggering `onChange` unnecessarily
    if (v.length > 0) {
      onChange({
        target: {
          name: name,
          value: v,
        },
      });
    }
  };

  return (
    <div>
      <label className="text-base font-medium text-primary">{label}</label>
      <div className="w-full h-auto mt-1">
        <Select
          defaultValue={formData[name] || ""}
          value={formData[name] || ""}
          onValueChange={(v) => handleOnChange(v)}
        >
          <SelectTrigger
            className={cn(
              `w-full focus:!ring-0 focus:!ring-offset-0 focus-visible:outline-none h-[45px]`,
              className,
              { "bg-primary-100 pointer-events-none": disabled }
            )}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option: TSelectOption) => (
              <SelectItem key={option.id} value={option.value}>
                <div className="flex items-center gap-2">
                  {option.icon ? (
                    <div className="size-4.5">
                      <img
                        src={option.icon}
                        alt="alt"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto"
                      />
                    </div>
                  ) : null}
                  {option.title}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
