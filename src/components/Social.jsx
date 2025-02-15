import { useState, useEffect } from 'react';

const transactions = [
  // A-D surnames
  { id: 1, name: "Liam Abbott", location: "New York", amount: "$500" },
  { id: 2, name: "Sophia Blackwood", location: "Los Angeles", amount: "$507" },
  { id: 3, name: "Oliver Chang", location: "London", amount: "$514" },
  { id: 4, name: "Emma Davidson", location: "Chicago", amount: "$521" },
  { id: 5, name: "Noah Bennett", location: "San Francisco", amount: "$528" },
  { id: 6, name: "Ava Caldwell", location: "New York", amount: "$535" },
  { id: 7, name: "Ethan Drake", location: "Los Angeles", amount: "$542" },
  { id: 8, name: "Isabella Chen", location: "London", amount: "$549" },
  { id: 9, name: "Mason Atwood", location: "Chicago", amount: "$556" },
  { id: 10, name: "Mia Donovan", location: "San Francisco", amount: "$563" },

  // E-H surnames
  { id: 11, name: "Lucas Edwards", location: "New York", amount: "$570" },
  { id: 12, name: "Harper Flynn", location: "Los Angeles", amount: "$577" },
  { id: 13, name: "Alexander Garcia", location: "London", amount: "$584" },
  { id: 14, name: "Amelia Hayes", location: "Chicago", amount: "$591" },
  { id: 15, name: "William Everett", location: "San Francisco", amount: "$598" },
  { id: 16, name: "Charlotte Foster", location: "New York", amount: "$605" },
  { id: 17, name: "James Harrison", location: "Los Angeles", amount: "$612" },
  { id: 18, name: "Scarlett Ellis", location: "London", amount: "$619" },
  { id: 19, name: "Benjamin Frost", location: "Chicago", amount: "$626" },
  { id: 20, name: "Victoria Hawkins", location: "San Francisco", amount: "$633" },

  // I-L surnames
  { id: 21, name: "Henry Irving", location: "New York", amount: "$640" },
  { id: 22, name: "Zoe Jensen", location: "Los Angeles", amount: "$647" },
  { id: 23, name: "Sebastian Knox", location: "London", amount: "$654" },
  { id: 24, name: "Luna Lawrence", location: "Chicago", amount: "$661" },
  { id: 25, name: "Jack Ingram", location: "San Francisco", amount: "$668" },
  { id: 26, name: "Chloe Jacobs", location: "New York", amount: "$675" },
  { id: 27, name: "Owen Kendrick", location: "Los Angeles", amount: "$682" },
  { id: 28, name: "Lily Lambert", location: "London", amount: "$689" },
  { id: 29, name: "Daniel Iverson", location: "Chicago", amount: "$696" },
  { id: 30, name: "Grace Kennedy", location: "San Francisco", amount: "$703" },

  // M-P surnames
  { id: 31, name: "Michael Morrison", location: "New York", amount: "$710" },
  { id: 32, name: "Aria Nash", location: "Los Angeles", amount: "$717" },
  { id: 33, name: "Carter Oakley", location: "London", amount: "$724" },
  { id: 34, name: "Penelope Palmer", location: "Chicago", amount: "$731" },
  { id: 35, name: "Gabriel Matthews", location: "San Francisco", amount: "$738" },
  { id: 36, name: "Ruby Newman", location: "New York", amount: "$745" },
  { id: 37, name: "Leo Porter", location: "Los Angeles", amount: "$752" },
  { id: 38, name: "Madeline Mills", location: "London", amount: "$759" },
  { id: 39, name: "Christopher Nichols", location: "Chicago", amount: "$766" },
  { id: 40, name: "Paisley Osborne", location: "San Francisco", amount: "$773" },

  // Q-T surnames
  { id: 41, name: "David Quinn", location: "New York", amount: "$780" },
  { id: 42, name: "Evelyn Rhodes", location: "Los Angeles", amount: "$787" },
  { id: 43, name: "Joseph Sinclair", location: "London", amount: "$794" },
  { id: 44, name: "Hannah Thompson", location: "Chicago", amount: "$801" },
  { id: 45, name: "Andrew Quinton", location: "San Francisco", amount: "$808" },
  { id: 46, name: "Sofia Ramirez", location: "New York", amount: "$815" },
  { id: 47, name: "Matthew Sutton", location: "Los Angeles", amount: "$822" },
  { id: 48, name: "Elizabeth Tate", location: "London", amount: "$829" },
  { id: 49, name: "Samuel Russell", location: "Chicago", amount: "$836" },
  { id: 50, name: "Avery Stevens", location: "San Francisco", amount: "$843" },

  // U-Z surnames
  { id: 51, name: "Ryan Underwood", location: "New York", amount: "$850" },
  { id: 52, name: "Claire Valentine", location: "Los Angeles", amount: "$857" },
  { id: 53, name: "Nathan Wells", location: "London", amount: "$864" },
  { id: 54, name: "Audrey Xavier", location: "Chicago", amount: "$871" },
  { id: 55, name: "Charles Yates", location: "San Francisco", amount: "$878" },
  { id: 56, name: "Alice Vaughn", location: "New York", amount: "$885" },
  { id: 57, name: "Thomas Watson", location: "Los Angeles", amount: "$892" },
  { id: 58, name: "Lucy Young", location: "London", amount: "$899" },
  { id: 59, name: "Dylan Zimmerman", location: "Chicago", amount: "$906" },
  { id: 60, name: "Julia Winters", location: "San Francisco", amount: "$913" }
];

const InfiniteSlider = () => {
  const [duplicatedTransactions, setDuplicatedTransactions] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Duplicate the transactions array multiple times for a smoother loop
    setDuplicatedTransactions([...transactions, ...transactions, ...transactions]);
  }, []);

  return (
    <div
      className="w-full bg-gray-50 py-8 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div
          className={`flex ${isHovered ? 'pause' : 'sliding'}`}
        >
          <div className="flex gap-4 px-4 sliding-content">
            {duplicatedTransactions.map((tx, i) => (
              <div
                key={`${tx.id}-${i}`}
                className="flex-shrink-0 w-64 md:w-72 lg:w-80"
              >
                <div className="bg-white rounded-lg shadow p-6 transform transition-all duration-300 hover:scale-105">
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

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
      </div>

      <style>
        {`
          .sliding {
            animation: slide 25s linear infinite;
          }
          
          .sliding-content {
            min-width: max-content;
          }

          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .pause {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default InfiniteSlider;