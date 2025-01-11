import React, { useState, useEffect } from "react";
import { getFinancialData } from "./api/financialData";
import FilterComponents from "./components/FilterComponents";
import Table from "./components/Table";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  //get the data from the api
  useEffect(() => {
    const loadData = async () => {
      const result = await getFinancialData();
      setData(result);
      setFilteredData(result);
    };
    loadData();
  }, []);

  //appplying filters
  const handleFilter = (filters) => {
    const {startDate, endDate, revenueRange, netIncomeRange} = filters;

    let filtered = data;

    //filtering the date range
    if(startDate && endDate) {
      //filter through the items
      filtered = filtered.filter((item) => {
        const year = new Date(item.date).getFullYear();
        return year >= startDate && year <= endDate

      });
    }

    //filtering from the min revenue range
    if(revenueRange[0]) {
      //filter through the items
      filtered = filtered.filter((item) => item.revenue >= revenueRange[0]);
    }

      //filtering from the max revenue range
    if(revenueRange[1]) {
      //filter through the items
      filtered = filtered.filter((item) => item.revenue <= revenueRange[1]);
    }

    //filtering from the min revenue range
    if(netIncomeRange[0]) {
      //filter through the items
      filtered = filtered.filter((item) => item.netIncome >= netIncomeRange[0]);
      }

      //filtering from the max revenue range
    if(netIncomeRange[1]) {
      //filter through the items
      filtered = filtered.filter((item) => item.netIncome <= netIncomeRange[1]);
      }

      setFilteredData(filtered);
    };

    return (
      <div className="w-full bg-gradient-to-b from-black via-black to-gray-800 min-h-screen mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold text-white mb-6 text-center">
          Financial Data Filtering App
        </h1>
        <h2 className="text-3xl font-extrabold text-gray-400 mb-6 text-center">
          Apple (AAPL)
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/3 bg-gray-500 p-6 rounded-lg shadow-md">
            <FilterComponents onFilter={handleFilter} />
          </div>
          <div className="lg:w-2/3 bg-gray-500 p-6 rounded-lg shadow-md overflow-x-auto">
            <Table data={filteredData} />
          </div>
        </div>
      </div>
    );
  };

export default App;

