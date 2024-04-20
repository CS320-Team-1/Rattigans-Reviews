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
results = [];
currentPage = 1;
async function TMDBconnection() {
    const link = "https://api.themoviedb.org/3/search/tv?query=";
    tvShow = "\"breaking bad\"";

    function splitTV (string){
        string = string.replaceAll("%", "%25");
        string = string.replaceAll(" ", "%20");
        special_characters = ["!", "@", "#", "$", "^", "&", "*", "(", ")", "=", "+", "{", "}", "|", "[", "]", ",", "?", "'", "\"", "/", "<", ">", "`"];
        replacement = ["%21", "%40", "%23", "%24", "%5E", "%26", "%2A", "%28", "%29", "%3D", "%2B", "%7B", "%7D", "%7C", "%5B", "%5C", "%2C", "%3F", "%27", "%22", "%2F", "%3C", "%3E", "%60"];
        for (let i = 0; i < special_characters.length; i++) {
            string = string.replaceAll(special_characters[i], replacement[i]);
          }
        tvShow = string;
        //later we will account for other ascii characters and translate to hexadecimal 
        return tvShow
    }

    translatedTVShow = splitTV(tvShow);
    const tmdbTVQuery = link + translatedTVShow + "&include_adult=false&language=en-US&page=1" 
    //hard code as of now for false parameter - update later
    response = await fetch(tmdbTVQuery, options);
    if(response.ok){
        const json = await response.json();
        const resultsLength = json.results.length; 
        if(resultsLength > 0){
          results = json.results.map(movie =>({'name': movie.name, 'year': movie.first_air_date, 'genre_ids': movie.genre_ids, 'description': movie.overview, 'rating': movie.vote_average, 'id': movie.id }));
        }
        //tvID = json.results[0].id;
        //console.log(tvID);
    }
    else{
        console.error("ERROR: " + response.status);
    }

}
TMDBconnection();

// Define a route
app.get('/getMovies', (req, res) => { 
    stringID = tvID.toString();
    res.send(JSON.stringify(results));
});

// Start the server
const start = async () => {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
start();
