import { Link } from "react-router-dom";
import { logo } from "../../../utils/images/logo";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <Link to={"/about"} className="link link-hover">About us</Link>
                    <Link to={"/contact"} className="link link-hover">Contact</Link>
                    {/* <Link to={"/facility"} className="link link-hover">Facility</Link> */}
                </nav>

                <aside>
                    <div>
                        <img src={logo} alt="logo" className="size-20" />
                    </div>
                    <p className="font-bold">SporteX</p>
                    <p>
                        Copyright © {new Date().getFullYear()} - All right
                        reserved
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;
