// Import Express
const express = require('express');

// Create an Express application
const app = express();

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTMxZDhlZDNlN2VlNDIzYTIxMmExM2JjMDk3ZGE1ZiIsInN1YiI6IjY2MGRhZDA0MzNhMzc2MDE2NDgxYmY5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BVSEvm-DQuLopub5JIYvTl9l5pcy_a-Ys_vX7BbhEpw'
    }
  };
  

tvID = 0; 
async function TMDBconnection() {
    const link = "https://api.themoviedb.org/3/search/tv?query=";
    tvShow = "breaking bad";

    function splitTV (string){
        tvShow = string.replace(" ", "%20");
        //later we will account for other ascii characters and translate to hexadecimal 
        return tvShow
    }

    translatedTVShow = splitTV(tvShow);
    const tmdbTVQuery = link + translatedTVShow + "&include_adult=false&language=en-US&page=1" 
    //hard code as of now for false parameter - update later
    response = await fetch(tmdbTVQuery, options);
    if(response.ok){
        const json = await response.json();
        tvID = json.results[0].id;
        console.log(tvID);
    }
    else{
        console.error("ERROR: " + response.status);
    }

}

TMDBconnection();

// Define a route
app.get('/', (req, res) => {
    stringID = tvID.toString();
    res.send(stringID);
});

// Start the server
const start = async () => {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
start();
