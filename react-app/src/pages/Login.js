import React from 'react';
import Navbar from '../components/Navbar.js'
import LoginPage, { Username, Password, Submit, Title, Logo, Reset } from '@react-login-page/base';
import style from '../styles/Login.module.css';
function UserLoginPage() {
    document.body.style = 'background: #2c3338;';
    return (
        <div>
            <Navbar></Navbar>
            <LoginPage>
                <Username name="userUserName" />
                <Password placeholder="Password" name="userPassword" />
                <Submit>Register</Submit>
                <Submit>Submit</Submit>
                <Title />
                <Logo>
                </Logo>
            </LoginPage>
            <p className = {style.register}><a className = {style.register} href="https://example.com">Not registered? Register here</a></p>
        </div>
      );
    };
export default UserLoginPage;
