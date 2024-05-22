/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchInput = ({ placeholder, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center max-sm:max-w-[300px]">
      <div className="relative">
        <input
          type="text"
          className="px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder || 'Search...'}
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-500" />
        </div>
      </div>
      <button
        className="ml-2 px-4 py-2 bg-primary text-white rounded-md hover:shadow-lg hover:shadow-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;