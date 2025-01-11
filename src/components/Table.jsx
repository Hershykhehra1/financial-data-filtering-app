import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
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
          {data.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-gray-700" : "bg-gray-500"} hover:bg-gray-800`}>
              <td className="border px-4 py-2">{item.date}</td>
              <td className="border px-4 py-2">{item.revenue}</td>
              <td className="border px-4 py-2">{item.netIncome}</td>
              <td className="border px-4 py-2">{item.grossProfit}</td>
              <td className="border px-4 py-2">{item.eps}</td>
              <td className="border px-4 py-2">{item.operatingIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
