//! React
import React from "react";
import ReactDOM from "react-dom/client";
//! React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import MyDrawer from "./components/MyDrawer.jsx";
import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx";
import "./index.css";

//? Inicializando o React Router
const router = createBrowserRouter([
    {
        path: "/",
        element: <MyDrawer />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <Home /> */}
        <RouterProvider router={router} />
    </React.StrictMode>
);
