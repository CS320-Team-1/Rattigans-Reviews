import React, { useEffect, useRef } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import breakingBad from '../img/breaking-bad.webp'
import style from '../styles/Carousel.module.css'

//Not working right now
async function getJustWatch(type) {
    const response = await fetch(`http://localhost:3001/getJustWatchPage${type}`);
    const json = await response.json().then(results => results.map(movie =>({'name': movie.name, 'year': movie.year, 'description': movie.description, 'rating': movie.rating, 'genres': movie.genre_ids, 'img': movie.posterImage})));
    return json;
}

function Example(props) {
    
    const itemsRef = useRef([]);

    useEffect(() => {
        async function fetchData() {
            const fetchedItems = await getJustWatch(props.type);
            itemsRef.current = fetchedItems;
        }
        fetchData();
    }, [props.type]);

    
    var pages = [
        itemsRef.current.slice(0, 6),
        itemsRef.current.slice(0, 6),
    ]

    return (
        <Carousel>
            {
                pages.map((page, i) => <Page item={page} />)
            }
        </Carousel>
    )
}

function Page(props) {
    return (
        <Paper className={style.carouselContainer}>
            {
                props.item.map((item, i) => <Item key={i} item={item} />)
            }
        </Paper>
    )

}

function Item(props) {
    return (
            <Button className={style.carouselContainer}>
                <img src={breakingBad} alt="Imagio" className={style.button}/>
            </Button>
    )
}

export default Example


