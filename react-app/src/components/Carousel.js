import React, {useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import {
    Paper,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Button,
} from '@mui/material';
import style from '../styles/Carousel.module.css';
import Settings, { DefaultSettingsT} from './Settings';

function Example(props) {
    var items = [
        {
            name: "Random Name #1",
            contentPosition: "left",
            Items: [
                {name: "1", 
                picture: "https://source.unsplash.com/featured/?macbook"
                }, 
                {name: "2", 
                picture: "https://source.unsplash.com/featured/?macbook"
                }
            ]
        },
        {
            name: "Random Name #2",
            picture: "https://m.media-amazon.com/images/M/MV5BMzc3NDg0OGQtOTg0MC00NGYyLTlhZTYtOTAwNGQ1ZTdmNDQ0XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"

        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} contentPosition = {item.contentPosition} />)
            }
        </Carousel>
    )
}

// const Example = () => {

//     const [settings, setSettings] = useState(DefaultSettingsT);

//     return (
//         <div style={{ marginTop: "50px", color: "#494949" }}>
//             <br />
//             <Carousel
//                 className="Example"
//             >
//                 {
//                     items.map((item, index) => {
//                         return <Banner item={item} key={index} contentPosition={item.contentPosition} />
//                     })
//                 }
//             </Carousel>
//             <br />
//             <Settings settings={settings} setSettings={setSettings} />
//         </div>
//     );
// }


// const Banner = (props) => {

//     const contentPosition = props.contentPosition ? props.contentPosition : "left"
//     const totalItems = props.length ? props.length : 3;
//     const mediaLength = totalItems - 1;

//     let items = [];
//     const content = (
//         <Grid item xs={4} key="content">
//             <CardContent className="Content">
//                 <Typography className="Title">
//                     {props.item.Name}
//                 </Typography>

//                 <Typography className="Caption">
//                     {props.item.Caption}
//                 </Typography>

//                 <Button variant="outlined" className="ViewButton">
//                     View Now
//                 </Button>
//             </CardContent>
//         </Grid>
//     )


//     for (let i = 0; i < mediaLength; i++) {
//         const item = props.item.Items[i];

//         const media = (
//             <Grid item xs={4} key={item.Name}>
//                 <CardMedia
//                     className="Media"
//                     image={item.Image}
//                     title={item.Name}
//                 >
//                     <Typography className="MediaCaption">
//                         {item.Name}
//                     </Typography>
//                 </CardMedia>

//             </Grid>
//         )

//         items.push(media);
//     }

//     if (contentPosition === "left") {
//         items.unshift(content);
//     } else if (contentPosition === "right") {
//         items.push(content);
//     } else if (contentPosition === "middle") {
//         items.splice(items.length / 2, 0, content);
//     }

//     return (
//         <Card raised className="Banner">
//             <Grid container spacing={0} className="BannerGrid">
//                 {items}
//             </Grid>
//         </Card>
//     )
// }



function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img className = {style.cover}  src = {props.item.picture} alt = "pic"></img>
            
        </Paper>

        
    )
}




// const items = [
//     {
//         Name: "Electronics",
//         Caption: "Electrify your friends!",
//         contentPosition: "left",
//         Items: [
//             {
//                 Name: "Macbook Pro",
//                 Image: "https://source.unsplash.com/featured/?macbook"
//             },
//             {
//                 Name: "iPhone",
//                 Image: "https://source.unsplash.com/featured/?iphone"
//             }
//         ]
//     },
//     {
//         Name: "Home Appliances",
//         Caption: "Say no to manual home labour!",
//         contentPosition: "middle",
//         Items: [
//             {
//                 Name: "Washing Machine WX9102",
//                 Image: "https://source.unsplash.com/featured/?washingmachine"
//             },
//             {
//                 Name: "Learus Vacuum Cleaner",
//                 Image: "https://source.unsplash.com/featured/?vacuum,cleaner"
//             }
//         ]
//     },
//     {
//         Name: "Decoratives",
//         Caption: "Give style and color to your living room!",
//         contentPosition: "right",
//         Items: [
//             {
//                 Name: "Living Room Lamp",
//                 Image: "https://source.unsplash.com/featured/?lamp"
//             },
//             {
//                 Name: "Floral Vase",
//                 Image: "https://source.unsplash.com/featured/?vase"
//             }
//         ]
//     }
// ]

export default Example


