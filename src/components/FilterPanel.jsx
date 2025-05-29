import React from 'react';

const FilterPanel = ({ filters, setFilters, stats }) => {
  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleYearRangeChange = (index, value) => {
    const newRange = [...filters.yearRange];
    newRange[index] = parseInt(value);
    updateFilter('yearRange', newRange);
  };

  return (
    <div className="filter-panel space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Filters
      </h3>

      {/* Search Box */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Search Members
        </label>
        <input
          type="text"
          placeholder="Name or city..."
          value={filters.searchTerm}
          onChange={(e) => updateFilter('searchTerm', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Country Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Country
        </label>
        <select
          value={filters.country}
          onChange={(e) => updateFilter('country', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Countries</option>
          {stats.countries.map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>

      {/* Role Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Role
        </label>
        <select
          value={filters.role}
          onChange={(e) => updateFilter('role', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Roles</option>
          <option value="Current Resident">Current Resident</option>
          <option value="Alum">Alumni</option>
        </select>
      </div>

      {/* Year Range Slider */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          House Years: {filters.yearRange[0]} - {filters.yearRange[1]}
        </label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">From:</span>
            <input
              type="range"
              min="2010"
              max="2030"
              value={filters.yearRange[0]}
              onChange={(e) => handleYearRangeChange(0, e.target.value)}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer 
                       dark:bg-gray-700 slider"
            />
            <span className="text-xs text-gray-500 w-12">{filters.yearRange[0]}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">To:</span>
            <input
              type="range"
              min="2010"
              max="2030"
              value={filters.yearRange[1]}
              onChange={(e) => handleYearRangeChange(1, e.target.value)}
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer 
                       dark:bg-gray-700 slider"
            />
            <span className="text-xs text-gray-500 w-12">{filters.yearRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={() => setFilters({
          searchTerm: '',
          country: '',
          yearRange: [2015, 2025],
          role: ''
        })}
        className="w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 
                 bg-gray-100 dark:bg-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-500
                 transition-colors duration-200"
      >
        Clear All Filters
      </button>

      {/* TODO: Add manual dark mode toggle */}
    </div>
  );
};

export default FilterPanel;
