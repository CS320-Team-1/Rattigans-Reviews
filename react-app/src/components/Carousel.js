import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import breakingBad from '../img/breaking-bad.webp'
import style from '../styles/Carousel.module.css'

function Example(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #3",
            description: "Hello World!"
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #3",
            description: "Hello World!"
        }
    ]

    var pages = [
        items.slice(0, 6),
        items.slice(0, 6),
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


