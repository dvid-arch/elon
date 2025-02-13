import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import ContactForm from "./Form";

const  BuyFlow = () => {
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
                    
                    {
                        btcAddress && (
                            <ContactForm  />
                        )
                    }
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
            
        </div>
    );
};

export default BuyFlow