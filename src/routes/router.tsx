import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FacilityDetailsPage from "../pages/FacilityDetailsPage";
import DashboardUser from "../pages/DashboardUser/DashboardUser";
import ConfrimationPage from "../pages/ConfrimationPage";
import BookingConfirmation from "../pages/BookingConfirmation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "facility/:id",
                element: <FacilityDetailsPage />,
            },
        ],
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
    {
        path: "/dashboard/user/:userId",
        element: <DashboardUser />,
    },
    {
        path: "/confrimation/:id",
        element: <BookingConfirmation />,
    },
    {
        path: "/confrimationPage/:id",
        element: <BookingConfirmation />,
    },
]);

export default router;
