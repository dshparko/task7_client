import React, { useState } from "react";
import Axios from "axios";
import Button from 'react-bootstrap/Button';


export default function Login(setIsLogin){

    const [username, setUsername] = useState("");
    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username,
        }).then((res) => {
            const {  token } = res.data;
            setIsLogin(true);
        });
    };
    return(<div className="login">
            <label> Login</label>

            <input
                placeholder="Username"
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
            <Button variant="outline-success">Success</Button>{' '}
            <button onClick={login}> Login</button>
        </div>
    )

}