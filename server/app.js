// Import Express
const express = require('express');

require("dotenv").config();
// importing dependencies
const cookieParser = require("cookie-parser");

// importing the routes
// const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");

// console.log(authRouter);

// Create an Express application
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 3. adding the routes
// app.use("/", indexRouter);
app.use("/auth", authRouter);

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
app.get('/getLandingPage',async(req,res) => {
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
async function getGenres()//print genre string, requires 2 arrays, those that should be anded to the query and those that should be ord
{
  return "";//TODO
}
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
app.get('/', (req, res) => { 
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

const mongoose = require("mongoose");
// connecting to the database
console.log(process.env.MONGO_URI)
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection is established successfully! 🎉");
  });

//testing for MongoDB-------------------------------------------------------
const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("test");
const coll = db.collection("users");
// console.log(coll)

async function run() {
  try {
    await client.connect();
    // database and collection code goes here
    const db = client.db("test");
    const names = db.listCollections();

    const coll = db.collection("users");
    console.log('testing');
    // find code goes here
    const cursor = coll.find();
    // iterate code goes here
    
    await cursor.forEach(console.log);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
//-------------------------------------------------------------------------------------

start();

