import React from 'react';
import style from '../styles/Trending.module.css';
import Button from '@mui/material/Button';

function Trending() {
    return (
        <div>
            <h1 className={style.text}> Trending </h1>
            <div className={style.background}>
                <Button className={style.imgbutton} onClick={console.log("Click")}/>
                <Button className={style.imgbutton} onClick={console.log("Click")}/>
                <Button className={style.imgbutton} onClick={console.log("Click")}/>
                <Button className={style.imgbutton} onClick={console.log("Click")}/>
                <Button className={style.imgbutton} onClick={console.log("Click")}/>
                <Button className={style.imgbutton} onClick={console.log("Click")}/>
            </div>
        </div>
    );
}

//TODO: Add sidescrolling, make images changeable, make images buttons

export default Trending