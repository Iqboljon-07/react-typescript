
import UseAuth from "../../hooks/UseAuth"
import "./style.css"
function Aside() {


    const { logout } = UseAuth()


    return (
        <div className="aside">
            <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                <h1>Tizimdan muffaqitatli o'tdingiz</h1>
                <button onClick={logout} >Logout</button>
            </div>
        </div>
    )
}

export default Aside
