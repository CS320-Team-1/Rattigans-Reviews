import React, { useState } from 'react';
import Navbar from '../components/Navbar.js'
import LoginPage, { Username, Password, Submit, Title, Logo, Reset } from '@react-login-page/base';
import style from '../styles/Login.module.css';
function Register() {
    document.body.style = 'background: #2c3338;';
    const [userName, setUserName] = useState(' ');
    const [password, setPassword] = useState(' ');
    function saveStateUsername(event) {
        setUserName(event.target.value)
        console.log(userName)
    }
    function saveStatePassword(event) {
        setPassword(event.target.value)
        console.log(password)
    }
    function submitLogin() {
        
    }
    return (
        <div>
            <Navbar></Navbar>
            <LoginPage>
                <Username onChange={saveStateUsername} name="userUserName" />
                <Password onChange={saveStatePassword} placeholder="Password" name="userPassword" />
                <Submit>Register</Submit>
                <Title />
                <Logo>
                </Logo>
            </LoginPage>
            <p className = {style.register}><a className = {style.register} href="/login">Already registered? Login here</a></p>
        </div>
      );
    };
export default Register;
