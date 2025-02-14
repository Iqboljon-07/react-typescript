import { Navigate, useNavigate } from "react-router"
import "./style.css"
import { useState } from "react"
import UseAuth from "../../hooks/UseAuth"
import "./style.css"
function Login() {
    if (localStorage.getItem("token")) {
        return <Navigate to={"/aside"} />
    }
    const navigate = useNavigate()
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const { error, login: loginUser } = UseAuth();



    const OnSubmit = async (e: any) => {


        e.preventDefault()

        await loginUser("https://nt-devconnector.onrender.com/api/auth", { email: login, password })




    }
    return (
        <>
            {error && <div className="error">

                {error}
            </div>}

            <div className="login">
                <div style={{ display: "flex", gap: "10px", width: "100%" }}> <button onClick={() => navigate("/")}>Home</button>
                    <button onClick={() => navigate(-1)}>back</button></div>

                <div className="login_item">
                    <form onSubmit={OnSubmit} action="">
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}><label htmlFor="">Login</label>
                            <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" /></div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

                            <label htmlFor="">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>

                </div>


            </div>
        </>
    )
}

export default Login
