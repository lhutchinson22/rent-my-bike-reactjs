import React, { useContext, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import UserContext from "../../Context/UserContext"
const Logout = () => {
    const history = useHistory();
    const { setUserData } = useContext(UserContext)

    useEffect(async () => {
        localStorage.setItem("auth-token", "");
        setUserData({ userId: "" });
        history.push("/");
    }, [])
    return (
        <div>
            <h2>Logout</h2>
        </div>
    )
}

export default Logout
