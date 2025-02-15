import { Link } from "react-router-dom"
import InfiniteSlider from "./Social"


function Footer() {
    return (
        <>
        <InfiniteSlider />
            <footer className="px-[28px] py-10 md:px[50px] bg-[#030327] text-white">

                <div className="flex flex-col items-center gap-8 max-w-[1200px] mx-auto">
                    <h2 className="text-[52px] font-extrabold"><span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Elon</span> Coin</h2>
                    <div className="flex flex-col items-center md:flex-row justify-between  capitalize flex-1 gap-4 w-fit">
                        <Link to={'/'} className="block text-center " onClick={() => setOpen(false)}>Home</Link>
                        <Link to={'/dashboard'} className="block text-center ">your earnings</Link>
                        <Link to={'/howtobuy'} className="block text-center " onClick={() => setOpen(false)}>how to buy</Link>

                    </div>
                    <p className="text-white/70 ">Elon Memes are intended to function as an expression of support for, and engagement with, the ideals and beliefs embodied by the symbol "$Elon" and the associated artwork, and are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type. GetElonMemes.com is not political and has nothing to do with any political campaign or any political office or governmental agency.  See Terms & Conditions Here, See Card Allocation Here</p>
                    <p className="text-white/70 font-bold self-start">Fight Fight Fight LLC will never call, text, email or otherwise contact you to request your personal information. Please be careful.</p>
                    <div className=" mt-10 flex flex-col items-center md:flex-row gap-4 md:items-center  justify-between self-start w-full font-semibold ">
                        <p className="text-center sm:text-left">© 2025 Fight Fight Fight  LLC. All rights reserved.</p>
                        <div className="flex flex-wrap gap-6 justify-between">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer