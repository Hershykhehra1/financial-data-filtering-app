import React, {useState} from 'react';

const Table = ({ data }) => {

    const [sortCategory, setSortCategory] = useState('date');
    const [isAscending, setIsAscending] = useState(true);

    //function to change sort category
    const handleCategoryChange = (e) => {
        setSortCategory(e.target.value);
    };

    //function to change the order between ascending and decending
    const changeSortDirection = () => {
        setIsAscending(!isAscending);
    };

    //function to sort the data based on selection category and direction
    const sortedData = [...data].sort((a, b) => {
        if(a[sortCategory] < b[sortCategory]) {
            return isAscending ? -1 : 1;
        } 
        if(a[sortCategory] > b[sortCategory]) {
            return isAscending ? 1 : -1;
        }
        return 0;
    });

    //function to format numbers using commas and $
    const formatNumber = (number) => {
        return '$' + Number(number).toLocaleString();
    };

  return (
    <div className="overflow-x-auto">
        <div className="flex justify-between items-center mb-4">
            <div>
                <label htmlFor="category" className="px-2"> Sort By:</label>
                <select id="category" value={sortCategory} onChange={handleCategoryChange} className="border px-4 py-2 rounded-md">
                    <option value="date">Date</option>
                    <option value="revenue">Revenue</option>
                    <option value="netIncome"> Net Income</option>
                </select>
            </div>
            <button onClick={changeSortDirection} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bd-blue-700 transition">Asc/Dec</button>
        </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-black uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">Date</th>
            <th scope="col" className="px-6 py-3">Revenue</th>
            <th scope="col" className="px-6 py-3">Net Income</th>
            <th scope="col" className="px-6 py-3">Gross Profit</th>
            <th scope="col" className="px-6 py-3">EPS</th>
            <th scope="col" className="px-6 py-3">Operating Income</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {sortedData.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-gray-700" : "bg-gray-500"} hover:bg-gray-800`}>
              <td className="border px-4 py-2">{item.date}</td>
              <td className="border px-4 py-2">{formatNumber(item.revenue)}</td>
              <td className="border px-4 py-2">{formatNumber(item.netIncome)}</td>
              <td className="border px-4 py-2">{formatNumber(item.grossProfit)}</td>
              <td className="border px-4 py-2">{formatNumber(item.eps)}</td>
              <td className="border px-4 py-2">{formatNumber(item.operatingIncome)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
