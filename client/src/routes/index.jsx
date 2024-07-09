import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login, Signin, Landing, CreateTask, EditProfile } from '@/pages'



const Routes = () => {
    const { token } = useAuth();

    // Define public routes accessible to all users
    // const routesForPublic = [
    //     {
    //         path: "/service",
    //         element: <div>Service Page</div>,
    //     },
    //     {
    //         path: "/about-us",
    //         element: <div>About Us</div>,
    //     },
    // ];

    // Define routes accessible only to authenticated users
    const routesForAuthenticatedOnly = [
        {
            path: "/",
            element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
            children: [
                {
                    path: "/",
                    element: <Landing />,
                },

            ],
        },
    ];

    // Define routes accessible only to non-authenticated users
    const routesForNotAuthenticatedOnly = [
        {
            path: "/signin",
            element: <Signin />,
        },
        {
            path: "/login",
            element: <Login />,
        },
    ];

    // Combine and conditionally include routes based on authentication status
    const router = createBrowserRouter([
        // ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    // Provide the router configuration using RouterProvider
    return <RouterProvider router={router} />;
};

export default Routes;