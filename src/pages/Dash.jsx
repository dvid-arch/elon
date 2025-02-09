import { useState, useEffect } from "react";

import MemeCoinChart from "../components/Visualization";
import {CreditCard} from 'lucide-react'


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
        <div className=" rounded-lg bg-white p-6">

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

const Dashboard = () => {
    const [memeCoinBalance, setMemeCoinBalance] = useState(10000); // Dummy balance
    const [sellAmount, setSellAmount] = useState("");
    const [sellStatus, setSellStatus] = useState("");

    const dummyTransactions = [
        // { id: 1, type: "Buy", amount: 5000, date: "2025-02-01", status: "Confirmed" },
        // { id: 2, type: "Sell", amount: 2000, date: "2025-02-02", status: "Pending" },
        // { id: 3, type: "Buy", amount: 3000, date: "2025-02-03", status: "Confirmed" },
    ];

    const handleSell = () => {
        if (!sellAmount || sellAmount > memeCoinBalance) {
            setSellStatus("❌ Not enough balance!");
            return;
        }

        // Simulate API response
        const isSuccess = Math.random() > 0.3; // 70% success rate
        if (isSuccess) {
            setMemeCoinBalance(memeCoinBalance - sellAmount);
            setSellStatus(`✅ Sold ${sellAmount} Meme Coins for BTC!`);
        } else {
            setSellStatus("❌ Sell failed. Try again.");
        }
        setSellAmount("");
    };

    return (
        <div className=" p-6 rounded-lg">

            <div className="flex justify-between items-center">
                <h2 className="leading-none font-bold mb-4 text-[48px]">Dashboard</h2>
                <div className="flex items-end">
                    <span className="block h-10 w-10 border-2 rounded-[100%]"></span>
                    <p>User123</p>
                </div>
            </div>
            <div className="p-4 rounded-md">
                {/* Meme Coin Balance */}
                
                <p className=" font-bold text-sm text-black/70 uppercase">Your Wallet / Balance</p>
                <p className="text-[48px] mt-2 font-bold text-black/70">{memeCoinBalance} ElON <span className="text-blue-500">/ $200</span></p>
            </div>
            <div className="flex flex-col md:flex-row  max-w-2xl md:max-w-full mx-auto gap-20">
                <div className="flex-1">

                    <MemeCoinChart />
                </div>

                {/* Transaction History */}
                <div className="mt-6 flex-1 flex flex-col gap-4">
                    <h3 className="text-lg font-semibold uppercase mb-2">Transaction History</h3>
                    <div className="bg-white min-h-40 rounded-md shadow-md p-4">
                        {dummyTransactions.length > 0 ? (
                            dummyTransactions.map((tx) => (
                                <div key={tx.id} className="flex justify-between border-b py-2">
                                    <span>{tx.type} {tx.amount} MEME</span>
                                    <span className={tx.status === "Confirmed" ? "text-green-600" : "text-yellow-600"}>
                                        {tx.status}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600">No transactions yet.</p>
                        )}
                    </div>
                    <div className="flex gap-4 w-fit text-white">
                        {/* Buy More Button */}
                        <button className="py-[16px] px-[20px] flex-1 uppercase justify-center rounded-[24px] font-bold  leading-none gap-1 text-center flex lg:flex-col items-center bg-blue-700 p-4">
                            Buy More Meme Coins
                        </button>
                        <button
                            onClick={handleSell}
                            className="py-[24px] px-[40px] flex-1 uppercase justify-center rounded-[24px] font-bold  leading-none gap-1 text-center flex lg:flex-col items-center bg-red-700 p-4"
                        >
                            Sell Meme Coins
                        </button>

                    </div>
                </div>
            </div>



            {/* Sell Interface */}

            {/* <div className="absolute translate-y-[-50%]  right-[50%] translate-x-[50%] max-w-xl z-10 w-full  p-6 min-h-[300px] top-[50%] px-8">
                <BuyFlow />
            </div>
            <div className="absolute h-[100%] w-screen top-0 bg-black/20 left-0"></div> */}

        </div>
    );
};

export default Dashboard;
