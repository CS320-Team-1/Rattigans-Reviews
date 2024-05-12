// Import Express
const express = require('express');
const cors = require('cors');
// Create an Express application
const app = express();
app.use(cors());
const genres = 
{
  "Action": 28,
  "Adventure": 12,
  "Animation": 16,//also applies to TV
  "Comedy":35,//also applies to TV
  "Crime":80,//also applies to TV
  "Documentary":99,//also applies to TV
  "Drama":18,//also applies to TV
  "Family":10751,//also applies to TV
  "Fantasy":14,
  "History":36,
  "Horror":27,
  "Music": 10402,
  "Mystery":9648,
  "Romance":10749,
  "Science Fiction":878, //End of Movies
  "Action & Adventure": 10759,
  "Kids": 10762,
  "Mystery": 9648,
  "News": 10763,
  "Reality":10764,
  "Sci-Fi & Fantasy": 10765,
  "Soap":10766,
  "Talk":10767,
  "War & Politics":10768,
  "Western":37
};
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTMxZDhlZDNlN2VlNDIzYTIxMmExM2JjMDk3ZGE1ZiIsInN1YiI6IjY2MGRhZDA0MzNhMzc2MDE2NDgxYmY5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BVSEvm-DQuLopub5JIYvTl9l5pcy_a-Ys_vX7BbhEpw'
    }
  };
app.get('/getLandingPageTv',async(req,res) => {
  const link = "https://api.themoviedb.org/3/discover/tv?"
  includeGenre = !getGenres() == "";
  includeAdult = false;
  function generateFilters(){
    addOn = "";
    if(includeAdult)
    {
      addOn += "&include_adult=false"
    }
    else
    {
      addOn += "&include_adult=true"
    }
    addOn += "&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"; //all of these can later be added as own separate variables
    if(includeGenre)
    {
      addOn += "&with_genres=" + getGenres();
    }
  };
  addOns = generateFilters();
  const tmdbTVQuery = link + addOns;
  response = await fetch(tmdbTVQuery,options);
  if (response.ok)
  {
    const json = await response.json().then(arr => arr.results).then(results => results.map(tvShow=>({'name': tvShow.name,'year': tvShow.first_air_date,'description':tvShow.overview,'rating': tvShow.vote_average, 'posterImage': tvShow.poster_path})));
    res.send(json);
  }
  else
  {
    console.error("ERROR: " + response.status);
  }
  
})
app.get('/getLandingPageMovie',async(req,res) => {
  const link = "https://api.themoviedb.org/3/discover/movie?"
  includeGenre = !getGenres() == "";
  includeAdult = false;
  function generateFilters(){
    addOn = "";
    if(includeAdult)
    {
      addOn += "&include_adult=false"
    }
    else
    {
      addOn += "&include_adult=true"
    }
    addOn += "&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc"; //all of these can later be added as own separate variables
    if(includeGenre)
    {
      addOn += "&with_genres=" + getGenres();
    }
  };
  addOns = generateFilters();
  const tmdbTVQuery = link + addOns;
  response = await fetch(tmdbTVQuery,options);
  if (response.ok)
  {
    const json = await response.json().then(arr => arr.results).then(results => results.map(tvShow=>({'name': tvShow.name,'year': tvShow.first_air_date,'description':tvShow.overview,'rating': tvShow.vote_average, 'posterImage': tvShow.poster_path})));
    res.send(json);
  }
  else
  {
    console.error("ERROR: " + response.status);
  }
  
})
async function getGenres()//print genre string, requires 2 arrays, those that should be anded to the query and those that should be ord
{
  return "";//TODO
}
tvID = 0; 
results = [];
currentPage = 1;
async function TMDBconnection(name) {
    if(name.length === 0) {
      return [];
    }
    const link = "https://api.themoviedb.org/3/search/tv?query=";
    tvShow = name;
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
          results = json.results.map(movie =>({'name': movie.name, 'year': movie.first_air_date, 'genre_ids': movie.genre_ids, 'description': movie.overview, 'rating': movie.vote_average, 'id': movie.id ,'posterImage': movie.poster_path}));
          return results;
        }
        else {
          return []
        }
        //tvID = json.results[0].id;
        //console.log(tvID);
    }
    else{
        console.error("ERROR: " + response.status);
    }

}
// Define a route
app.get('/getMovies/:movieName', async (req, res) => { 
    stringID = tvID.toString();
    response = await TMDBconnection(req.params.movieName);
    res.send(response);
});
app.get('/getMovieProvider/:movieID', async(req,res)=>{//movieID is a num //TODO PUT THE ID IN THE OTHER JSONS
  const movieQuery = "https://api.themoviedb.org/3/movie/"+req.params.movieID+"/watch/providers";
  response = await fetch(movieQuery,options);
  if (response.ok)
  {
    const json = await response.json().then(arr => arr.results).then(results => results.US).then(movie=> ({'buy': movie.buy.map(ob => ob.provider_name),'flatrate': movie.buy.map(ob => ob.provider_name),'rent':movie.buy.map(ob => ob.provider_name)}));
    res.send(json);
  }
  else
  {
    console.error("ERROR: " + response.status);
  }
});

// Start the server
const start = async () => {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
start();

