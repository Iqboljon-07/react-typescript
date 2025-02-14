import { Outlet } from "react-router"
import Navbar from "../../components/navbar/Navbar"


function Layout() {
    return (
        <div>
            <Navbar />
            <main><Outlet /> </main>
        </div>
    )
}

export default Layout
