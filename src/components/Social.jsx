import React, { useState, useEffect } from 'react';

const transactions = [
  { id: 1, name: "John Doe", location: "New York", amount: "$500" },
  { id: 2, name: "Jane Smith", location: "Los Angeles", amount: "$250" },
  { id: 3, name: "Alice Johnson", location: "London", amount: "$1,200" },
  { id: 4, name: "Bob Brown", location: "Chicago", amount: "$320" },
  { id: 5, name: "Lisa White", location: "San Francisco", amount: "$750" },
];

const InfiniteSlider = () => {
  const [duplicatedTransactions, setDuplicatedTransactions] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Duplicate the transactions array to create a seamless loop
    setDuplicatedTransactions([...transactions, ...transactions]);
  }, []);

  return (
    <div 
      className="w-full bg-gray-50 py-8 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Main slider container */}
        <div 
          className={`flex animate-scroll transition-transform duration-500 ${
            isHovered ? 'animate-pause' : ''
          }`}
          style={{
            animation: isHovered ? 'none' : 'scroll 20s linear infinite',
            '@keyframes scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' }
            }
          }}
        >
          {/* First set of cards */}
          <div className="flex gap-4 px-4">
            {duplicatedTransactions.map((tx) => (
              <div
                key={tx.id}
                className="flex-shrink-0 w-64 md:w-72 lg:w-80"
              >
                <div className="bg-white rounded-lg shadow p-6 transform transition-transform duration-300 hover:scale-105">
                  <div className="text-center">
                    <p className="text-gray-800 text-sm font-semibold">
                      {tx.name}
                    </p>
                    <p className="text-green-500 text-sm font-bold mt-2">
                      Just withdrew {tx.amount}
                    </p>
                    <p className="text-gray-600 text-xs mt-1">
                      {tx.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays for smooth transition */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default InfiniteSlider;