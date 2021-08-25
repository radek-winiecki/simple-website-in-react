import React from "react";

const LoginPage = () => {
    return (
        <div>
            <label htmlFor="">Enter login: <input type="text"/></label>
            <br/>
            <label htmlFor="">Enter password: <input type="password"/></label>
            <br/>
            <button>Log In!</button>
        </div>
    )
}

export default LoginPage;