import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
                element: <Contact />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

export default router;
