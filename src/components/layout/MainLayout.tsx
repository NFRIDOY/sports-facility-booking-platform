import Navbar from "../ui/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
