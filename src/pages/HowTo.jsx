import { useState, useEffect } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
// BuyMemeCoinGuide.jsx
import QRCode from "react-qr-code";

const BuyFlow = () => {
  const [btcAmount, setBtcAmount] = useState("");
  const [memeCoinEquivalent, setMemeCoinEquivalent] = useState(0);
  const [btcAddress, setBtcAddress] = useState("");
  const [status, setStatus] = useState("Awaiting Payment");

  const exchangeRate = 50000; // 1 BTC = 50,000 Meme Coins (Dummy Rate)
  const dummyAddress = "bc1qdummyaddress123456789abcdef";
  const transactionStatuses = ["Awaiting Payment", "Pending", "Confirmed", "Failed"];

  // Calculate equivalent meme coins
  useEffect(() => {
    if (btcAmount) {
      setMemeCoinEquivalent(btcAmount * exchangeRate);
    }
  }, [btcAmount]);

  // Mock function to generate a BTC address
  const handleGenerateAddress = () => {
    setBtcAddress(dummyAddress);
    setStatus("Awaiting Payment...");
  };

  // Mock function to check transaction status
  const checkTransactionStatus = () => {
    // Simulate random transaction status
    const randomStatus = transactionStatuses[Math.floor(Math.random() * transactionStatuses.length)];
    setStatus(randomStatus);
  };

  return (
    <div className=" rounded-lg">

      <div className="items-start">

        <div className="flex-1 shadow-lg p-4 border rounded-[16px]">
          <label className="block mb-2 font-medium">Enter BTC Amount:</label>
          <input
            type="number"
            value={btcAmount}
            onChange={(e) => setBtcAmount(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="0.01 BTC"
          />

          <p className="mt-2 text-lg">
            You will get: <strong>{memeCoinEquivalent} Meme Coins</strong>
          </p>
          <button
            onClick={handleGenerateAddress}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full"
          >
            Generate BTC Address
          </button>
        </div>
        <div className="flex-1">

          {/* Display BTC Address & QR Code */}
          {btcAddress && (
            <div className="mt-4 p-4 bg-white rounded-md shadow-md text-center">
              <p className="mb-2 text-gray-700">Send BTC to this address:</p>
              <p className="text-sm font-mono bg-gray-200 p-2 rounded break-all">
                {btcAddress}
              </p>
              <QRCode value={btcAddress} className="mt-4 mx-auto" />
            </div>
          )}

          {/* Check Transaction Status */}
          {btcAddress && (
            <>
              <button
                onClick={checkTransactionStatus}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md w-full"
              >
                Check Transaction Status
              </button>

              <p className="mt-2 text-lg font-bold text-center">
                Status:{" "}
                <span
                  className={`${status === "Confirmed" ? "text-green-600" : status === "Failed" ? "text-red-600" : "text-yellow-600"
                    }`}
                >
                  {status}
                </span>
              </p>

              {/* Success / Failure Messages */}
              {status === "Confirmed" && (
                <p className="mt-2 text-green-600 text-center">
                  ✅ Payment Confirmed! Meme Coins Sent.
                </p>
              )}
              {status === "Failed" && (
                <p className="mt-2 text-red-600 text-center">
                  ❌ Payment Failed. Please try again.
                </p>
              )}
            </>
          )}
        </div>
      </div>
      {/* BTC Input */}


      {/* Generate Address */}

    </div>
  );
};




const BuyMemeCoinFlow = () => {
  // The unique Bitcoin address used to purchase the meme coin
  const bitcoinAddress = '6p6xgHyF7AeE6TZkSmFsko444wqoP15icUSqi2jfGiPN';

  // Function to copy the Bitcoin address to the clipboard
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(bitcoinAddress).then(
      () => {
        // Optionally show a success message or toast notification here.
        console.log('Address copied to clipboard!');
      },
      (err) => {
        console.error('Failed to copy!', err);
      }
    );
  };

  return (
    <section className="mb-10 space-y-12">
      {/* New Users Flow */}
      <div className="bg-white  rounded-2xl  max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          New to Our Platform?
        </h2>
        <div className="flex flex-col gap-4  ">
          <div>
            <h3 className="font-bold text-lg">Provide a Unique Username</h3>
            <div className="">
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-3 rounded-md border bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 max-w-[400px]"
              />
              <div className="text-center text-white font-semibold">
                Checking availability...
              </div>
            </div>
            <BuyFlow />

          </div>
        </div>
      </div>

      
    </section>
  );
};




const BuyMemeCoinGuide = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold text-gray-800 mb-4">
          How to Buy Elon Coin Using Bitcoin
        </h1>
        <p className="text-gray-600">
          Follow the steps below based on whether you already have Bitcoin.
        </p>
      </div>

      {/* Section 1: Already have Bitcoin */}
      <BuyMemeCoinFlow />

      {/* Divider */}
      <hr className="my-10 border-gray-300" />

      {/* Section 2: Need to Acquire Bitcoin */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Don't Have Bitcoin Yet?
        </h2>
        <p className="text-gray-600 mb-4">
          If you need to acquire Bitcoin before swapping for [Meme Coin Name], check out these tutorials:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Buying Bitcoin with Venmo
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Buying Bitcoin with PayPal
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Other Methods (e.g., Cash App)
            </a>
          </li>
        </ul>
        <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-400 rounded">
          <p className="text-yellow-800 text-sm">
            Tip: Ensure the platform you choose supports withdrawals to an external crypto wallet.
          </p>
        </div>
      </section>

      {/* Final Security Tip */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Secure Your Assets
        </h2>
        <p className="text-gray-600">
          After purchasing or swapping for [Meme Coin Name], store your coins securely in a wallet you control. Always verify contract addresses and keep your private keys or seed phrases safe.
        </p>
      </section>
    </div>
  );
};





function HowTo() {
  return (
    <div>
      <Header />
      <BuyMemeCoinGuide />
      <Footer />
    </div>
  )
}

export default HowTo