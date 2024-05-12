import React, { useEffect, useRef } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import breakingBad from '../img/breaking-bad.webp'
import pineapple from '../img/pineapple2.webp'
import style from '../styles/Carousel.module.css'

async function getList(type) {
    const response = await fetch(`http://localhost:3001/getMovies/Breaking-Bad`); //Need to update this to the correct endpoint
    const json = await response.json().then(results => results.map(movie =>({'name': movie.name, 'year': movie.year, 'description': movie.description, 'rating': movie.rating, 'genres': movie.genre_ids, 'img': movie.posterImage})));
    return json;
}

function Example(props) {
    
    let items = [];

    //Delete the following after you get the list of items properly integrated with backend
    items = [
        {name: "Breaking Bad", img: breakingBad},
        {name: "Breaking Bad", img: breakingBad},
        {name: "Breaking Bad", img: pineapple},
        {name: "Breaking Bad", img: breakingBad},
        {name: "Breaking Bad", img: breakingBad},
        {name: "Breaking Bad", img: breakingBad},
        {name: "Breaking Bad", img: breakingBad},
        {name: "Breaking Bad", img: breakingBad},
        {name: "Breaking Bad", img: breakingBad},
        {name: "Breaking Bad", img: pineapple},
        {name: "Breaking Bad", img: breakingBad},
        {name: "Breaking Bad", img: breakingBad},
        {name: "Breaking Bad", img: breakingBad},
        {name: "Breaking Bad", img: breakingBad},
        {name: "Breaking Bad", img: breakingBad},
        {name: "Breaking Bad", img: breakingBad},
        {name: "Breaking Bad", img: breakingBad},
        {name: "Breaking Bad", img: breakingBad},
    ];

    //Isn't working, but if the return is stored in the list of items (at least the first 18 items, can be more) Pages should handle the rest.
    // useEffect(() => {
    //     async function fetchData() {
    //         const fetchedItems = await getList(props.type);
    //         items.append(fetchedItems);
    //     }
    //     fetchData();
    // });

    
    var pages = [];

    for (let i = 0; i < 18; i++) {
        let pg = items.slice(i, i+6);
        if (pg.length < 6) {
            pg = pg.concat(items.slice(0, 6 - pg.length));
        }
        pages.push(pg);
    };

    return (
        <div className={style.carouselContainer}>
        <Carousel>
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
                <img src={props.item.img} alt="Imagio" className={style.button}/>
            </Button>
    )
}

export default Example


