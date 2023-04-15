import { Outlet, createBrowserRouter } from "react-router-dom";
import { PostDetails } from "./PostDetails";
import Layout from "./Layout";
export const router = createBrowserRouter([
    {
        path:"/",
        element: <div>
            <Layout/>
            <Outlet/>
        </div>,
        children: [{
            path: '/post/:postId',
            element: <PostDetails/>
        }]
    },
    {
        path:"/about",
        element: <div>About Oppa</div>,
    },
    {
        path: '/post/:postId',
        element: <PostDetails/>
    },
]);