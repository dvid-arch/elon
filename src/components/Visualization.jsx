import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const TransactionHistory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [memeCoinOwned, setMemeCoinOwned] = useState(0)

  // Temporary mock data to show where chart will be
  const mockData = [
    { date: "Jan", price: 0.5 },
    { date: "Feb", price: 0.8 },
    { date: "Mar", price: 1.2 },
    { date: "Apr", price: 1.5 },
    { date: "May", price: 1.8 },
    { date: "Jun", price: 2.1 }
  ];

  useEffect(() => {
    const fetchTransactionHistory = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const address = localStorage.getItem('publicKey');
        if (!address) {
          throw new Error('No public key found. Please connect your wallet first.');
        }

        // Using a proxy service might help with CORS
        // const proxyUrl = 'https://your-proxy-service.com/';
        // const { data } = await axios.get(proxyUrl + `https://blockchain.info/rawaddr/${address}`);
        
        // For now, showing the CORS error
        const { data } = await axios.get(`https://blockchain.info/rawaddr/${address}`);
        // console.log('Transaction data:', data);
        // console.log({...data}["total_received"])
        if(data.total_recieved){
          console.log(data.total_recieved)
          setMemeCoinOwned(data.total_recieved)
        }

      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message || 'Failed to fetch transaction data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactionHistory();
  }, []);

  return (
    <div className="pr-4 pt-4 bg-white rounded-lg border-2 border-gray-200">
      <div className="px-6 pb-4">
        <h2 className="font-bold text-gray-800">Total Balance</h2>
        {error ? (
          <div className="text-red-600 text-sm mt-2">{error}</div>
        ) : (
          <p className="text-2xl font-bold text-gray-700">${(memeCoinOwned * 0.00096).toFixed(2)}</p>
        )}
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={mockData}>
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
              border: '1px solid #e5e7eb',
              padding: '8px'
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

export default TransactionHistory;