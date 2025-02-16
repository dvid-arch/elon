import axios from 'axios';
import * as bitcoin from 'bitcoinjs-lib';
import { ECPairFactory } from 'ecpair';
import * as tinysecp from 'tiny-secp256k1';
import { Buffer } from 'buffer/';


window.Buffer = Buffer;

// For browser usage, ensure that Buffer is available. In many bundlers (like webpack),
// Buffer is automatically polyfilled. If not, you can install the "buffer" package
// and add: import { Buffer } from 'buffer';

const ECPair = ECPairFactory(tinysecp);



async function generateAddressAndCheckTransactions() {
    try {
        // Generate a key pair using the custom RNG.
        const keyPair = ECPair.makeRandom();
        const pubkeyBuffer = Buffer.from(keyPair.publicKey); // Ensure we have a Buffer

        const { address } = bitcoin.payments.p2wpkh({ pubkey: pubkeyBuffer });
        if (!address.startsWith("bc1")) {
            throw new Error("Invalid Bitcoin address generated");
        }


        // Fetch transaction data from blockchain.info.
        const { data } = await axios.get(`https://blockchain.info/rawaddr/${address}`);
        console.log(data)

        console.log("LOGGING KEYS")

        console.log(keyPair.privateKey.toString())
        console.log(address)
        // Check that there are no transactions for this address.
        if (data.n_tx !== 0 || data.total_received !== 0 || data.total_sent !== 0) {
            return {
                privateKey: Buffer.from(keyPair.privateKey).toString('hex'),
                address,
                txStatus: "Transactions found for the address.",
            };
        }

        return {
            privateKey: Buffer.from(keyPair.privateKey).toString('hex'),
            address,
            txStatus: "No transactions found for the address.",
        };
    } catch (error) {
        console.error("Error fetching address transactions:", error.message);
        return { error: error.message };
    }
}


export default generateAddressAndCheckTransactions