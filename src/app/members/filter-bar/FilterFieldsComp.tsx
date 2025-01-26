import { Button } from "@/lib/ui/button";
import { FC } from "react";

interface IFieldOption {
  label: string;
  value: string;
}

interface IFilterField {
  name: string;
  label: string;
  type: "text" | "select" | "dateRange";
  placeholder?: string;
  options?: string[];
}

type TInputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement
>;

type TProps = {
  fields: IFilterField[];
  filters: Record<string, any>;
  handleInputChange: (ev: TInputChangeEvent) => void;
  handleSearch: () => void;
};

const FilterFieldsComp: FC<TProps> = ({
  fields,
  filters,
  handleInputChange,
  handleSearch,
}) => {
  return (
    <div className="pt-8 px-4 pb-4 space-y-4.5 border border-secondary-100 border-t-transparent rounded-bl-10 rounded-br-10">
      {fields.map((field) => (
        <div key={field.name} className="flex items-center w-full">
          <div className="w-60 text-base font-medium text-primary">
            {field.label}
          </div>
          {field.type === "text" && (
            <input
              label={field.label}
              name={field.name}
              placeholder={field.placeholder}
              formData={filters}
              onChange={handleInputChange}
              className="w-full"
            />
          )}
          {field.type === "select" && (
            <select
              className="w-full border border-gray-300 rounded-lg p-2"
              onChange={(ev: any) => handleInputChange(ev)}
            >
              <option value="">Any</option>
              {field.options?.map((option: string) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          {field.type === "dateRange" && (
            <div className="flex space-x-2">
              <input
                type="date"
                className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(ev: TInputChangeEvent) => handleInputChange(ev)}
              />
              <input
                type="date"
                className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(ev: TInputChangeEvent) => handleInputChange(ev)}
              />
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-end">
        <Button
          variant="secondary"
          className="w-36 py-2"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default FilterFieldsComp;
