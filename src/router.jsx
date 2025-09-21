import { createBrowserRouter } from "react-router";
import App from './App.jsx'
import Remittance from "./page/Remittance.jsx";
import Dashboard from "./page/Dashboard.jsx";
import NotFoundPage from "./page/NotFoundPage.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/remittance',
                element: <Remittance />
            },
            {
                path: '*',
                element: <NotFoundPage />
            },
        ]
    }
])