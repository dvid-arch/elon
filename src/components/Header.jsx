import { useState } from "react"
import { Link } from "react-router-dom"


function Header() {
    const [isOpen, setIsOpen] = useState(false)
   
    return (
        <header className="px-[28px] md:px-[50px] py-10 relative">

            <div className="flex flex-col sm:flex-row gap-4  md:gap-8 justify-between items-center md:max-w-[90%]  py-4 px-8 bg-[#070735]  rounded-[24px] mx-auto text-white w-full lg:w-fit">
                <div className="logo text-4xl uppercase font-bold">Elon Coin</div>
                <div className="text-[18px] flex gap-8  items-center flex-1 w-full justify-between sm:justify-end">
                    <nav className="hidden lg:flex justify-between  capitalize flex-1 gap-4">
                        <a href="#">home</a>
                        <a href="#">contact address</a>
                        <Link to={'/howtobuy'}>how to buy</Link>
                        <a href="#">more</a>
                    </nav>
                    <div className="mobilenav cursor-pointer bg-black/10 flex flex-col gap-[6px] lg:hidden hover:sca" onClick={()=>setIsOpen(!isOpen)}>
                        <span className={`block w-10 h-1 bg-white`}></span>
                        <span className="block w-10 h-1 bg-white"></span>
                        <span className="block w-10 h-1 bg-white"></span>
                    </div>

                    <nav className={`lg:hidden transition-transform transfo ${isOpen ? "max-h-screen opacity-100 scale-100":"max-h-0 opacity-0 scale-95"} overflow-hidden absolute text-black p-6 bg-white  left-0 right-0 mx-auto w-fit top-[85%] shadow-lg`} >
                        <a href="#" className="block text-center mb-4">home</a>
                        <a href="#" className="block text-center mb-4 text-nowrap">contact address</a>
                        <Link to="/howtobuy" className="block text-center mb-4">how to buy</Link>
                        <a href="#" className="block text-center ">more</a>
                    </nav>

                    <Link to="/howtobuy" className=" text-nowrap capitalize font-semibold py-2 px-8 bg-red-600 text-white inline-block rounded-[24px]">buy now</Link>
                </div>
            </div>
        </header>
    )
}

export default Header