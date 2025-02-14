import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function UseAuth() {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate()

    const login = async (url: string, userData: { email: string; password: string }) => {
        setLoading(true);
        setError(null);


        try {
            let response = await axios.post(url, userData, {
                headers: { "Content-Type": "application/json" }
            });

            console.log("Server Response:", response.data);
            setData(response.data);


            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                navigate("/aside")

            }
        } catch (error) {
            console.error("Login Error:", error);
            setError("Failed to authenticate user");
            if (error) {
                setError(null);

            }

        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setData(null); // 
        navigate("/login")
    };

    return { data, error, isLoading, login, logout };
}

export default UseAuth;
