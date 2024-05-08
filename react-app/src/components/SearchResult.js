import React from 'react';
import style from '../styles/Result.module.css';

function SearchResult(props){
    let baseImgUrl = "https://image.tmdb.org/t/p/w154/" + props.img;
    if(props.img == null || props.img.length === 1) {
        baseImgUrl = "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";
    }
    return(

        <div className = {style.container}>
            <div className = {style.coverArt}>
                <a href = {props.url}>
                    <img className = {style.pic} src= {baseImgUrl} alt = "pretty pic :)"></img>
                </a>
            </div>

            <div className = {style.info}> 
                <div className = {style.name}><h1>{props.name}</h1></div>
                <div className = {style.date}><h2>{props.year}</h2></div>
                <div className = {style.genre}><h2>{props.genre}</h2></div>
                <div className = {style.rating}><h2>{props.rating}</h2></div>
                
            </div>

            <div className = {style.misc}>
                <div className={style.description}><p>{props.description}</p></div>

            </div>
            
        </div>
    )
}

export default SearchResult
