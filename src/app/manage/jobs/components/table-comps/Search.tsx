import React, { useState } from "react";

export interface SearchCriteria {
  keyword?: string;
  companyName?: string;
  location?: string;
  category?: string;
}

interface SearchProps {
  onSearch: (criteria: SearchCriteria) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState<SearchCriteria>({
    keyword: "",
    companyName: "",
    location: "",
    category: "",
  });

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <div className="flex gap-3 items-center">
      <input
        type="text"
        placeholder="Keyword"
        className="p-2 border rounded-md w-[150px]"
        value={searchInput.keyword}
        onChange={(e) => setSearchInput((prev) => ({ ...prev, keyword: e.target.value }))}
      />
      <input
        type="text"
        placeholder="Company"
        className="p-2 border rounded-md w-[150px]"
        value={searchInput.companyName}
        onChange={(e) => setSearchInput((prev) => ({ ...prev, companyName: e.target.value }))}
      />
      <input
        type="text"
        placeholder="Location"
        className="p-2 border rounded-md w-[150px]"
        value={searchInput.location}
        onChange={(e) => setSearchInput((prev) => ({ ...prev, location: e.target.value }))}
      />
      <input
        type="text"
        placeholder="Category"
        className="p-2 border rounded-md w-[150px]"
        value={searchInput.category}
        onChange={(e) => setSearchInput((prev) => ({ ...prev, category: e.target.value }))}
      />
      <button
        className="px-3 py-2 text-white rounded-md bg-secondary hover:bg-secondary-700"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
