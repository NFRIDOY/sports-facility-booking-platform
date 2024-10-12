import { Link, NavLink } from "react-router-dom";
import { logo } from "../../utils/images/logo";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
    const menuItems = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active font-semibold" : "font-semibold"
                    }>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active font-semibold" : "font-semibold"
                    }>
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active font-semibold" : "font-semibold"
                    }>
                    Contact Us
                </NavLink>
            </li>
        </>
    );
    return (
        <div>
            <div className="navbar primary-bg text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to={"/"} className="flex items-center space-x-2">
                        {/* <a className="btn text-xl">SporteX</a> */}
                        <a className="text-xl">
                            <img src={logo} alt="logo" className="size-12" />
                        </a>
                        <span className="text-3xl font-black">SporteX</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active font-semibold"
                                        : "font-semibold"
                                }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active font-semibold"
                                        : "font-semibold"
                                }>
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active font-semibold"
                                        : "font-semibold"
                                }>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar">
                            <div className="font-semibold">
                                <FaRegUser size={30} />
                                {/* <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                /> */}
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link
                                    to={"/dashboard"}
                                    className="btn primary-btn">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to={"/login"} className="btn primary-btn">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link to={"/logout"} className="btn btn-error text-white">
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
