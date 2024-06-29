
import UserPage from "@/pages/UserPage/UserPage";
import Dashboard from "../pages/Dashboard/Dashboard";


const privateRoutes = [
    { path: '/', Component: <Dashboard/> },
    { path: '/:id', Component: <UserPage/>}
]

export {privateRoutes};