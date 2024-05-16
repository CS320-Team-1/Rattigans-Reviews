Welcome to Rattigan's Reviews!

This project aims to provide users with an interactive webpage which will allow those users to search for their favorite TV shows or movies based on key-words! 
Users will also have recommendations made to them based on what's popular at the time and what that user has liked in the past.


# Rattigan's Reviews
## Team Three
##### Manager: Mariana Jaramillo
##### Anh Pham, Jerry Du, Jonathan Coombs, Omar Natour, Rakeb Tewodros, Sapphire Tham

<a href = "https://github.com/CS320-Team-1/Rattigans-Reviews" ><img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" width = "50" height = "50"><a/>

### Code Overview
The project is split into two folders, react-app is our front end, and server is our backend
#### Front End
In the front end folder is the public folder which contains a few icons, and the index.html page.
the src folder is where the bulk of the project is contained. The components folders houses all of our react components, the main building blocks of the front end.
img contains most of the pictures used throughout the website. The pages folder contains all the distinct pages that a user can visit on the website.
The Styles folder contains all of our css used to style the components and pages to our liking. and in the root of react-app there are files like app.js which contain all of the routing information to display different pages.

#### Back End
In the back end folder titled server, the server is ran on local host 3000 through the app.js file. This file is the primary focus as it is where we fetch data from the TMDB API and relay that back to front end. Through our API token header where we registered through the TMDB site, we gained authorization to request and fetch their data.

We created many different end points some of which include: getMovies, getTVShows, and getMovieProvider. To properly construct the formatted query link and obtain the specified tv-shows or movies, we implemented asynchronous functions that would translate ASCII text (regarding spaces and punctuation) to hexadecimal (splitCinema function), append it within the API link, and pass this through fetch. The returned JSON object included a results field which stored an array of the different films categorizing under the specified key-words or genre. Each cell within the array contains an object for a single film. Using map, we extracted the necessary fields for our website which included: name, vote average, genre, description, and the poster image path.

We also hard-corded the associations of genres to numbers in which the TMDB API follows for proper correlation.

Additionally, within the app.js file we connect to our MongoDB using mongoose. Our MONGO_URI lies within the .env file and once connection is established it is logged on the console to indicate such.

The exports of the app.js file include: app itself, the splitCinema function, along with async functions TMDBConnectionTV and TMDBConnectionMovie. These are then imported into the auth.test.js file located within the tdd-with-nodejs folder. It is within the auth.test.js file we test these imports.

##### Testing
To run the Jest tests, make sure that you have properly installed Jest in tdd-with-nodejs folder
```
npm install jest
```
To run the test, make sure that you are in the tdd-with-nodejs folder, and use the command
```
npm run test
```
Note: The test created a static user in the database, so it can only be run once. If you need to run the test multiple times, please contact the project owners.
The test consists of testing for:
    - Handling search queries with weird characters
    - If the code is fetching the correct TV/movie id
    - If the user signup feature works
    - Handling duplication in signup
    - If signin feature works
    - If logout feature works
    - If setting the genres for TV/movie search works

### Installation
First clone the repository to your machine.
```
git clone https://github.com/CS320-Team-1/Rattigans-Reviews
```
You will need to open two terminals simultaneously, one for back end and one for the front end.
In your first terminal navigate to Rattigans-Reviews/server
Install the packages on your machine.
```
npm install
```
start the back end services using the command...
```
node app.js
```
You will then need to go into your second terminal.
Navigate to Rattigans-Reviews/react-app
Again, install packages on your machine
```
npm install
```
Finally start the front end using the command...
```
npm start
```
navigate to <http://localhost:3000> to access the webpage.

For cypress tests, run

```
npx cypress open 
```
in react-app folder.

Please also check for a .env file in the tdd-with-nodejs and the server folder. If the .env file does not exist in both folder, please create one with this content:
```
MONGO_URI=mongodb+srv://acpham:p1gaBUKefs0nqRca@rattiganreview.x9ag4wu.mongodb.net/
ACCESS_TOKEN_SECRET=379e470ee967867c65ba38d2f5b6350355bf2650dd94d0da70c0732e9cce1238
REFRESH_TOKEN_SECRET=cf249e04063f8233559e7c4b93bc36c16a623ec528e593128213389916c2c745
```

### Instructions

#### Home Page
Here you will be greeted with some pineapples! You will be able to select other pages or access your userprofile using the nav bar on top. On the lower part of the page there are two carousels which display poster art for popular TV shows and movies. Click on these poster arts to be redirected to the TMDB page which contains a wealth of information.
#### TV Shows
Among more pineapples you will find a TV search bar! Enter in a query to search for TV shows by title. You can also select a genre from the drop down menu below to include only TV shows which are in your selected genre. You will also see a carousel which will again display popular TV shows.
#### Movies
Here you will find a search bar which like the TV search bar allows you to enter a query to find a movie by title. Again here you are able to select for a specific genre. There is also a carousel for top rated movies below the search bar. 
#### Results Page
If you enter a search query in either the TV shows page or Movies page you will end up here. If there are results for your query you will be presented with a scrollable list of elements which show the media's poster art, title, release date, genre rating and a breif description. If there are no results based on your query you will be told so.

#### Login / Logout
When first entering the website, click login/signup in the top right. Then click register here to create your user account. Once you've made an account you can then login and be redirected to the home page. From there you can access the site as normal and additionally can access your profile page. 

### Profile
Your Profile page will display your username, a profile picture, and two lists containing your favorite movies and TV shows.

### Attributions

The TMDB API is heavily used in this project
```
https://developer.themoviedb.org/docs/getting-started
```

The user profile feature (mainly in /server/routes/auth.js and /server/models/users.js) was developed from this tutorial:
```
https://www.honeybadger.io/blog/javascript-authentication-guide/ 
```

In the front end we used Material UI
```
https://mui.com/
```
We also used React Material UI Carousel
```
https://www.npmjs.com/package/react-material-ui-carousel
```

### Known Issues

On the front end the Carousel has some issues depending on different screen sizes.

