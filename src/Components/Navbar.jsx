import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
                <h1 className="w-full text-3xl font-bold text-textColor font-kode"> <Link to="/">Railess.</Link></h1>
                <ul className="hidden md:flex">
                    <li className="p-4 text-textColor font-bold text-center text-xl">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="p-4 text-textColor font-bold text-center text-xl">
                        <Link to="/service">Service</Link>
                    </li>
                    <li className="p-4 text-textColor font-bold text-center text-xl">
                        <Link to="/documentation">Documentation</Link>
                    </li>
                    <li className="p-4 text-textColor font-bold text-center text-xl">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
                <ul className={`md:hidden ${nav ? "block" : "hidden"} fixed left-0 top-0 w-[60%] h-full border-r border-r-textColor bg-bgColor ease-in-out duration-500`}>
                    <h1 className="w-full text-3xl font-bold m-4 text-textColor font-kode"><Link to="/">Railess.</Link></h1>
                    <li className="p-4 text-textColor font-bold border-b border-r-lineColor text-center text-xl">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="p-4 text-textColor font-bold border-b border-r-lineColor text-center text-xl">
                        <Link to="/service">Service</Link>
                    </li>
                    <li className="p-4 text-textColor font-bold border-b border-r-lineColor text-center text-xl">
                        <Link to="/documentation">Documentation</Link>
                    </li>
                    <li className="p-4 text-textColor font-bold text-center text-xl">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
