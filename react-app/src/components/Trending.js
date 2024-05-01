import React from 'react';
import style from '../styles/Trending.module.css';
import Button from '@mui/material/Button';

function Trending() {
    return (
        <div>
            <h1 className={style.text}> Trending </h1>
            <div className={style.background}>
                <Button className={style.imgbutton}/>
                <Button className={style.imgbutton}/>
                <Button className={style.imgbutton}/>
                <Button className={style.imgbutton}/>
                <Button className={style.imgbutton}/>
                <Button className={style.imgbutton}/>
            </div>
        </div>
    );
}

//TODO: Add sidescrolling, make images changeable

//going to be following this guide https://medium.com/@ltomblock/crafting-a-professional-looking-carousel-with-react-and-mui-746a86af0ab0

export default Trending