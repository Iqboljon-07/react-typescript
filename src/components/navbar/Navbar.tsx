import { NavLink } from "react-router"
import "./style.css"
import { CiLogin } from "react-icons/ci";

function Navbar() {
    return (
        <div className="navbar">

            <NavLink to={"/"}>Users</NavLink>
            <NavLink to={"/album"}>Albums</NavLink>
            <NavLink to={"/post"}>Posts</NavLink>
            <NavLink style={{ display: "flex", alignItems: "center", justifyItems: "center", gap: "5px" }} to={"/login"}>
                <CiLogin />Login</NavLink>

        </div>
    )
}

export default Navbar
