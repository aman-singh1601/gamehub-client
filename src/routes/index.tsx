
import UserPage from "@/pages/UserPage/UserPage";
import Dashboard from "../pages/Dashboard/Dashboard";




import Stream from "@/pages/Stream/StreamPage";
import Keys from "@/pages/Keys/KeysPage"
import ChatSetting from "@/pages/ChatSettings/ChatSetting"



const privateRoutes = [
    { path: '/', Component: <Dashboard/> },
    { path: '/:id', Component: <UserPage/>}
]
const createrRoutes = [
    {path: "/u/:id", component: <Stream/>},
    {path: "/u/:id/keys", component: <Keys/>},
    {path: "/u/:id/chat", component: <ChatSetting/>}
]

export {privateRoutes, createrRoutes};