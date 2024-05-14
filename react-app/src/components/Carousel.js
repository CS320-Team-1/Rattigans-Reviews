import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import breakingBad from '../img/breaking-bad.webp'
import pineapple from '../img/pineapple2.webp'
import style from '../styles/Carousel.module.css'

async function getList(url) {
    const response = await fetch(url); //Need to update this to the correct endpoint
    const json = await response.json()
    return json;
}

function Example(props) {
    const [items, setItems] = useState([])
    let url = props.medium == "tv"? "http://localhost:3001/getLandingPageTv": "http://localhost:3001/getLandingPageMovie";
    useEffect( ()=> {
        async function getItems() {
            let response = await getList(url);
            setItems(response)
        }
        getItems();
    }, [])
    let pages = [];
    for (let i = 0; i < 18; i++) {
        let pg = items.slice(i, Math.min(18, i+10));
        if (pg.length < 10) {
            pg = pg.concat(items.slice(0, 10 - pg.length));
        }
        pages.push(pg);
    };

    return (
        <div className={style.carouselContainer}>
        <Carousel sx={{ overflowY: 'visible', overflowX: 'visible', height: '450px'}} swipe = {false} >
            {
                pages.map((page, i) => <Page item={page} carouselType={props.carouselType} />)
            }
        </Carousel>
        </div>
    )
}

function Page(props) {
    return (
        <div className={style.page}>
            <h1>{props.carouselType}</h1>
            {
                props.item.map((item, i) => <Item key={i} item={item} />)
            }
        </div>
    )

}

function Item(props) {
    return (
            <Button className={style.page}>
                <a href = {props.item.link}> 
                    <img style = {{style: "285px"}} src={"https://image.tmdb.org/t/p/w154/" + props.item.posterImage} alt="Image" className={style.button}/>
                </a>
            </Button>
    )
}

export default Example


