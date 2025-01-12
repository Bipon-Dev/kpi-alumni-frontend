import { TFilterField } from "./filterBarTypes";
import { FC, useEffect, useRef, useState } from "react";

import iconFilter from "./icons/icon-filter.svg";
import FilterFieldsComp from "./FilterFieldsComp";
import { cn } from "@/utils/cn";

type TFilterBarProps = {
  fields: TFilterField[];
  onSearch: (filters: Record<string, any>) => void;
};

const FilterBar: FC<TFilterBarProps> = ({ fields, onSearch }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    if (name) {
      setFilters((prev: Record<string, any>) => ({ ...prev, [name]: value }));
    }
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  // outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsFilterOpen(false);
        setIsFocus(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const isOpen = isFilterOpen || isFocus;

  return (
    <div
      className="bg-white shadow-[0_7px_20px_rgb(174_0_185/5%)] rounded-10 relative"
      ref={ref}
    >
      {/* Search Bar */}
      <div
        className={cn(
          "flex items-center h-10 overflow-hidden border border-secondary-100 rounded-10 relative z-50",
          {
            "rounded-bl-none rounded-br-none": isOpen,
          }
        )}
      >
        <input
          type="text"
          placeholder="Search Anything...."
          className="flex-1 rounded-10 py-2 px-4 focus:outline-none "
          onChange={(ev) => handleInputChange(ev)}
          onFocus={() => setIsFocus(true)}
          // onBlur={() => setIsFocus(false)}
        />
        <button
          className={cn(
            "w-10 h-[80%] mx-1 px-3 rounded-[5px] hover:bg-primary-100 transition-colors",
            {
              "bg-primary-100": isOpen,
            }
          )}
          onClick={() => setIsFilterOpen((prev) => !prev)}
        >
          <img
            src={iconFilter}
            alt="filter"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </button>
      </div>

      {/* Filter Section */}
      <div
        className={cn(
          "w-full bg-white shadow-[0_7px_20px_rgb(174_0_185/5%)] absolute top-8 left-0 z-30 max-h-0 overflow-hidden transition-[max-height]",
          {
            "max-h-[500px]": isOpen,
          }
        )}
      >
        <FilterFieldsComp
          fields={fields}
          filters={filters}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  );
};

export default FilterBar;
