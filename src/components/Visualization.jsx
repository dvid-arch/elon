import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const MemeCoinChart = () => {
  const data = [
    { date: "Jun", price: 0.5 },
    { date: "Jul", price: 0.75 },
    { date: "Aug", price: 1.2 },
    { date: "Sep", price: 1.5 },
    { date: "Oct", price: 2.0 },
    { date: "Nov", price: 2.8 },
    { date: "Dec", price: 3.5 },
  ];

  return (
    <div className="pr-4 pt-4 bg-white rounded-lg border-2 border-gray-200">
      <div className='px-6 pb-4'>
        <h2 className=" font-bold text-gray-800 ">total portfolio</h2>
        <p className='text-2xl font-bold text-gray-700'>$35,000.64</p>
        <div></div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#10B981" stopOpacity={0.05} />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity={1} />
              <stop offset="100%" stopColor="#10B981" stopOpacity={1} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(0, 0, 0, 0.1)"
          />
          <XAxis
            dataKey="date"
            stroke="#64748b"
            tick={{ fill: '#64748b' }}
          />
          <YAxis
            domain={[0, "dataMax + 1"]}
            stroke="#64748b"
            tick={{ fill: '#64748b' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderRadius: "8px",
              color: "#1f2937",
              border: '1px solid #e5e7eb'
            }}
          />

          <Area
            type="monotone"
            dataKey="price"
            stroke="url(#lineGradient)"
            fill="url(#areaGradient)"
            strokeWidth={3}
            dot={{ fill: "#10B981", r: 4 }}
            activeDot={{ r: 6, fill: "#10B981" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MemeCoinChart;