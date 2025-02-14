import { useEffect, useState } from "react";
import generateAddressAndCheckTransactions from "../util/bit";
import ContactForm from "./Form";
import QRCode from "react-qr-code";
// import { address } from "bitcoinjs-lib";


const BitcoinAddressGenerator = ({ storedAddress }) => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState(localStorage.getItem('publicKey'))


    const handleGenerate = async () => {
        setLoading(true);
        const res = await generateAddressAndCheckTransactions();
        setResult(res);
        setLoading(false);
    };

    useEffect(() => {
        if (result) {
            const address = result.address
            console.log(address)
            localStorage.setItem('publicKey', address)
            setAddress(result.address)
        }
    }, [result])


    return (
        <div>

            {(!result && !storedAddress) && <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full" onClick={handleGenerate} disabled={loading}>
                {loading ? "Generating..." : "Generate Bitcoin Address"}
            </button>}
            {((result && !result.error) || storedAddress) && (
                <div className="mt-4 p-4 bg-white rounded-md  text-center">
                    {/* <p><strong>Private Key:</strong> {result.privateKey}</p> */}
                    <p className="mb-2 text-gray-700">Send BTC to this address:</p>
                    <p className="text-sm font-mono bg-gray-200 p-2 rounded break-all">
                        {storedAddress ? address : result.address}
                    </p>
                    <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-400 rounded">
                        <p className="text-red-800 text-sm">
                            Tip: Ensure keep publicKey safe as you would need it to Log in.
                        </p>
                    </div>
                    <QRCode value={storedAddress ? address : result.address} className="mt-4 mx-auto" />
                    <ContactForm string={storedAddress ? "user already exist, search for private key" : result.address} string1={storedAddress ? address : result.address} />
                    {/* <p><strong>Transaction Status:</strong> {result.txStatus}</p> */}
                </div>
            )}
        </div>
    );
};

export default BitcoinAddressGenerator;
