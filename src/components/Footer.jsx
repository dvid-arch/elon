

function Footer() {
    return (
        <footer className="px-[28px] py-10 md:px[50px] bg-[#030327] text-white">

            <div className="flex flex-col items-center gap-8">
                <h2 className="text-[52px] font-extrabold">Elon Coin</h2>
                <div className="flex flex-col items-center md:flex-row justify-between  capitalize flex-1 gap-4 w-fit">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">How to buy</a>
                    <a href="#">Contact us</a>
                </div>
                <p className="text-white/70 text-center">Trump Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$TRUMP" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. GetTrumpMemes.com is not political and has nothing to do with any political campaign or any political office or governmental agency.  See Terms & Conditions Here, See Card Allocation Here</p>
                <p className="text-white/70 font-bold self-start">Fight Fight Fight LLC will never call, text, email or otherwise contact you to request your personal information. Please be careful.</p>
                <div className=" mt-10 flex flex-col gap-4 md:items-center  justify-between self-start w-full font-semibold ">
                    <p>© 2025 Fight Fight Fight  LLC. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer