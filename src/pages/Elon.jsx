import { useState } from "react";

export default function ElonMemeCoin() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btcAmount, setBtcAmount] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [transactions, setTransactions] = useState([
    { username: "user1", amount: 50000 },
    { username: "user2", amount: 75000 },
    { username: "user3", amount: 100000 },
  ]);

  const checkUsername = () => {
    if (username.length < 3) {
      alert("Username must be at least 3 characters long.");
      return;
    }
    setCurrentUser({ username, memeBalance: 0 });
  };

  const register = () => {
    if (!email || !username || !password) {
      alert("Please fill all fields.");
      return;
    }
    setCurrentUser({ username, memeBalance: 0 });
  };

  const initiatePayment = () => {
    const amount = parseFloat(btcAmount) * 1000000;
    if (!amount || amount <= 0) {
      alert("Please enter a valid BTC amount.");
      return;
    }
    setCurrentUser((prev) => ({ ...prev, memeBalance: prev.memeBalance + amount }));
    setTransactions([...transactions, { username: currentUser.username, amount }]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {!currentUser ? (
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold">Elon Meme Coin</h1>
          <p className="mt-2 text-gray-600">Join the future of meme coins</p>
          <div className="flex justify-center gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg w-72">
              <h2 className="text-xl font-semibold">Quick Start</h2>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full mt-3 p-2 border rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button
                className="w-full bg-blue-500 text-white mt-4 py-2 rounded"
                onClick={checkUsername}
              >
                Continue
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-72">
              <h2 className="text-xl font-semibold">Full Registration</h2>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full mt-3 p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Choose username"
                className="w-full mt-3 p-2 border rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Create password"
                className="w-full mt-3 p-2 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="w-full bg-blue-500 text-white mt-4 py-2 rounded"
                onClick={register}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Your Balance</h2>
            <p className="text-2xl mt-2">{currentUser.memeBalance.toFixed(2)} ELON</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <h2 className="text-xl font-semibold">Buy More</h2>
            <input
              type="number"
              placeholder="Enter BTC amount"
              className="w-full mt-3 p-2 border rounded"
              value={btcAmount}
              onChange={(e) => setBtcAmount(e.target.value)}
            />
            <p className="mt-2">You will receive: {btcAmount * 1000000 || 0} ELON</p>
            <button
              className="w-full bg-blue-500 text-white mt-4 py-2 rounded"
              onClick={initiatePayment}
            >
              Buy Now
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
            <h2 className="text-xl font-semibold">Recent Buyers</h2>
            <div className="mt-3 flex overflow-x-auto space-x-4 p-2">
              {transactions.map((tx, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-3 rounded shadow w-48 text-center"
                >
                  {tx.username} bought {tx.amount.toFixed(2)} ELON
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
