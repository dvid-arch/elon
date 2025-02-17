import Header from "../components/Header";

const TermsPage = () => {
    return (
        <main>

            <div className="min-h-screen max-w-[1200px] bg-gray-50 mx-auto flex flex-col items-center justify-center p-4">
                <div className="w-full">
                    <Header />
                </div>
                <div className="w-full max-w-[800px] bg-white shadow rounded-lg p-8">
                    <div className="mb-6">
                        <h1 className="text-3xl font-bold text-center mb-2">Terms &amp; Conditions</h1>
                        <p className="text-center text-gray-500">Last Updated: February 20th 2025</p>
                    </div>
                    <main className="space-y-6 text-gray-700">
                        <section>
                            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                            <p>
                                Welcome to Elon Meme Coin website. These Terms and Conditions  govern your use of the Site and your participation in the pre-purchase of the Elon Coin. By accessing or using the Site, you agree to be bound by these Terms.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
                            <p>
                                You must be at least 18 years old (or the legal age of majority in your jurisdiction) to participate. Your participation also confirms that you comply with all applicable laws.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-xl font-semibold mb-2">3. Prepurchase Process</h2>
                            <p>
                                The Coin pre-purchase is offered subject to availability and may be limited in quantity. All purchases are final and processed immediately.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-xl font-semibold mb-2">4. Risk Disclosure</h2>
                            <p>
                                Cryptocurrencies, including meme coins, are highly volatile. You acknowledge that the value of the Coin may fluctuate dramatically and that you should only invest what you can afford to lose.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-xl font-semibold mb-2">5. Contact Information</h2>
                            <p>
                                For any questions regarding these Terms, please contact us at: <a href="mailto:elonmeme@gmail.com" className="text-blue-500 underline">elonmeme@gmail.com</a>.
                            </p>
                        </section>
                    </main>
                    <footer className="mt-8 text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Elon Meme Coin. All rights reserved.
                    </footer>
                </div>
            </div>
        </main>
    );
};

export default TermsPage;
