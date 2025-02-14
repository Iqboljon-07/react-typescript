import { Route, Routes } from "react-router"
import Users from "../pages/users"
import Albums from "../pages/albums"
import Posts from "../pages/posts"
import Layout from "../pages/layout"
import Login from "../components/login/Login"
import Aside from './../components/aside/Aside';



function Routers() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route path="/" element={<Users />} />
                    <Route path="/album" element={<Albums />} />
                    <Route path="/post" element={<Posts />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/aside" element={<Aside />} />

            </Routes >
        </>
    )
}

export default Routers
