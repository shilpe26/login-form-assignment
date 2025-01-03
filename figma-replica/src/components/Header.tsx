import { NavLink } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const Header = () => {
    return (

        <header className='w-full max-w-[1440px] h-full max-h-16 mt-2 grid grid-cols-2 gap-6 px-2'>
            <div className="flex justify-start items-center w-full max-w-[706px] h-full max-h-11 py-1 gap-4">
                <a href="/" className="w-6 h-6"><FaArrowLeft size={24}/></a>
                <div className="text-xl font-semibold leading-7">Create New Invoice</div>
            </div>
            <nav>
                <ul className="flex justify-start items-center gap-8 w-full max-w-[670px] h-full max-h-11">
                    <li className="">
                        <NavLink to="/dashboard/vendor" className={({ isActive }) =>
                            isActive ? "text-[#1787e0] relative after:content-[''] after:block after:border-b-2 after:border-[#1787e0] after:w-full after:mt-2" : "text-[#0dof11] after:block after:border-b-2 after:border-white after:w-full after:mt-2"
                        }>Vendor Details</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/invoice" className={({ isActive }) =>
                            isActive ? "text-[#1787e0] relative after:content-[''] after:block after:border-b-2 after:border-[#1787e0] after:w-full after:mt-2" : "text-[#0dof11] after:block after:border-b-2 after:border-white after:w-full after:mt-2"
                        }>Invoice Details</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/comment" className={({ isActive }) =>
                            isActive ? "text-[#1787e0] relative after:content-[''] after:block after:border-b-2 after:border-[#1787e0] after:w-full after:mt-2" : "text-[#0dof11] after:block after:border-b-2 after:border-white after:w-full after:mt-2"
                        }>Comments</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )

}
export default Header;