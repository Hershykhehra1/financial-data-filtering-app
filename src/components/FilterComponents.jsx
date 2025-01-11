import React, { useState } from "react";

const FilterComponents = ({onFilter}) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [minRevenue, setMinRevenue] = useState("");
    const [maxRevenue, setMaxRevenue] = useState("");
    const [minNetIncome, setMinNetIncome] = useState("");
    const [maxNetIncome, setMaxNetIncome] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const filters = {
            startDate: startDate || null,
            endDate: endDate || null,
            revenueRange: [minRevenue || 0, maxRevenue || Infinity],
            netIncomeRange: [minNetIncome || 0, maxNetIncome || Infinity],
        };
        onFilter(filters);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-black font-bold">
              Date Range:
            </label>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Start Year"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-1/2 border-gray-300 rounded-md shadow-sm"/>
              <input
                type="number"
                placeholder="End Year"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-1/2 border-gray-300 rounded-md shadow-sm"/>
            </div>
          </div>
    
          <div>
            <label className="text-black font-bold">
              Revenue Range:
            </label>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min Revenue"
                value={minRevenue}
                onChange={(e) => setMinRevenue(e.target.value)}
                className="w-1/2 border-gray-300 rounded-md shadow-sm"/>
              <input
                type="number"
                placeholder="Max Revenue"
                value={maxRevenue}
                onChange={(e) => setMaxRevenue(e.target.value)}
                className="w-1/2 border-gray-300 rounded-md shadow-sm"/>
            </div>
          </div>
    
          <div>
            <label className="text-black font-bold">
              Net Income Range:
            </label>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min Net Income"
                value={minNetIncome}
                onChange={(e) => setMinNetIncome(e.target.value)}
                className="w-1/2 border-gray-300 rounded-md shadow-sm"/>
              <input
                type="number"
                placeholder="Max Net Income"
                value={maxNetIncome}
                onChange={(e) => setMaxNetIncome(e.target.value)}
                className="w-1/2 border-gray-300 rounded-md shadow-sm"/>
            </div>
          </div>
    
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
            Apply Filters
          </button>
        </form>
      );
    };

export default FilterComponents
