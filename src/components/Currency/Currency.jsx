import React from "react";



const CurrencyStats = () => {
  // const { data } = axios.get()
  /* 
    {
      data.map((item) => (
        <tr>
          <td class="px-6 py-4 whitespace-nowrap border-b">
            {item.buy}
          </td>
          <td class="px-6 py-4 whitespace-nowrap border-b">
            {item.curr}
          </td>
          <td class="px-6 py-4 whitespace-nowrap border-b">
            {item.sell}}
          </td>
        </tr>
      ))
    }
  */
  return (
    <table class="hover:border-collapse">
      <thead class="bg-transparent">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
            
          </th>
          <th class="px-6 py-3  text-left text-xs font-medium text-black uppercase tracking-wider">
            Курс валют
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
            
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-400">
        <tr>
          <td class="px-6 py-4 whitespace-nowrap border-b">123213</td>
          <td class="px-6 py-4 whitespace-nowrap border-b">USD</td>
          <td class="px-6 py-4 whitespace-nowrap border-b">1312312</td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap border-b">1312312</td>
          <td class="px-6 py-4 whitespace-nowrap border-b">EUR</td>
          <td class="px-6 py-4 whitespace-nowrap border-b">1312312</td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap border-b">1312312</td>
          <td class="px-6 py-4 whitespace-nowrap border-b">RUB</td>
          <td class="px-6 py-4 whitespace-nowrap border-b">1312312</td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap border-b">1312312</td>
          <td class="px-6 py-4 whitespace-nowrap border-b">RUB</td>
          <td class="px-6 py-4 whitespace-nowrap border-b">1312312</td>
        </tr>
        
      </tbody>
    </table>
  );
};

export default CurrencyStats;
