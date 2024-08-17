import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import Features from "./pages/Features";
 

export const router = createBrowserRouter ([
    {
        path:"/",
        element:<App/>,
        children:[
           {
            path:"*",
            element:<NotFoundPage/>
           },
           {
            path:"/",
            element:<Home/>,
           },
           {
            path:"/Features of My TODO list",
            element:<Features/>,
           },
    ]
    }
])