import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { cn } from "@/utils/cn";


interface TInputDateRangeProps {
    name: string;
    formData: any;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    disabled?: boolean;
    className?: string;
}

export const InputDateRange: React.FC<TInputDateRangeProps> = ({
    formData,
    setFormData,
    disabled,
    className,
}) => {
    const [selectedRange, setSelectedRange] = useState<[Date | null, Date | null]>(
        [
            formData?.dateStart ? new Date(formData.dateStart) : null,
            formData?.dateEnd ? new Date(formData.dateEnd) : null,
        ]
    );

    const handleOnChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        setSelectedRange(dates);

        if (start && end) {
            setFormData((prev: any) => ({
                ...prev,
                dateStart: dayjs(start).format("YYYY-MM-DD"),
                dateEnd: dayjs(end).format("YYYY-MM-DD"),
            }));
        }
    };

    return (
        <DatePicker
            selected={selectedRange[0]} // Start date
            onChange={handleOnChange} // Handle changes
            startDate={selectedRange[0]} // Range start
            endDate={selectedRange[1]} // Range end
            selectsRange // Enables range selection
            disabled={disabled} // Disables picker if true
            placeholderText="Select Date Range"
            className={cn(
                "w-full p-2 rounded border border-gray-300 text-sm",
                className,
                {
                    "pointer-events-none opacity-50": disabled,
                }
            )}
        />
    );
};
