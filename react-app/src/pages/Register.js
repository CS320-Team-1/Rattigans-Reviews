import React, { useState } from 'react';
import Navbar from '../components/Navbar.js'
import LoginPage, { Username, Password, Submit, Title, Logo, Reset } from '@react-login-page/base';
import style from '../styles/Login.module.css';
import { useNavigate } from "react-router-dom";
import { cuteToast } from 'cute-alert'
function Register() {
    document.body.style = 'background: #2c3338;';
    const [userName, setUserName] = useState(' ');
    const [password, setPassword] = useState(' ');
    const navigate = useNavigate();

    function saveStateUsername(event) {
        setUserName(event.target.value)
        console.log(userName)
    }
    function saveStatePassword(event) {
        setPassword(event.target.value)
        console.log(password)
    }
    async function submitLogin() {
        const response = await fetch(`http://localhost:3001/auth/signup`, {
            method: 'POST',
            body: JSON.stringify({email: userName, password: password}),
            headers: { 'Content-Type': 'application/json' },
        }).then(res => res.json())
        if(response.type == "success") {
            cuteToast({
                type: 'success',
                title: `Registered!`,
                description: `Please login with your new account.`,
                timer: 2000
            }) 
            navigate("/login")
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <LoginPage>
                <Username onChange={saveStateUsername} name="userUserName" />
                <Password onChange={saveStatePassword} placeholder="Password" name="userPassword" />
                <Submit onClick = {submitLogin}>Register</Submit>
                <Title />
                <Logo>
                </Logo>
            </LoginPage>
            <p className = {style.register}><a className = {style.register} href="/login">Already registered? Login here</a></p>
        </div>
      );
    };
export default Register;
