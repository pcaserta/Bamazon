# Web-App

Web-App is a functioning node application that allows the user to "purchase items" displayed by the app. It updates the mysql database in realtime. There is a also a mangager view which allows the user to view different statistics regarding the products.


---

## Bamazon customer 
`node bamazonCustomer.js`

This will start the app, and display the featured items for sale along with the price. This is done through a query that pulls information from the database. Then after the user selects the item, they are asked how many they want to buy. After that the total is displayed with a message that lets the user know the transaction was successfull. During this the database is updated so that the stock_quantity reflects the new order.

<img width="1230" alt="screen shot 2018-12-09 at 4 05 24 pm" src="images/bamazoncustomer.PNG">

---

## Spotify Searchb
`node liri.js spotify-this-song <song-name-here>`

`spotify-this-song` will search Spotify API for information on the song that was searched. Song name, artist name, link to a preview of the song, and the album that the song was released in is included for each result.

<img width="1230" alt="screen shot 2018-12-09 at 4 05 24 pm" src="images/spotify-this-song.PNG">

---

## OMDB Movie Search
`node liri.js movie-this <song-name-here>`

`movie-this` will search OMDB movies API for information on the movie that was searched. Title of the movie, year the movie came out, IMDB Rating of the movie, Rotten Tomatoes rating of the movie, country where the movie was produced, language of the movie, plot of the movie, and actors in the movie will all be shown with each result. If no movie is selected MR. Nobody is defaulted in the search.

<img width="1230" alt="screen shot 2018-12-09 at 4 05 24 pm" src="images/movie-this.PNG">

---

## Do what it says search
`do-what-it-says`

`do-what-it-says` is a command that reads the file random.text and executes it according to the parameters in the file. Default is set to `spotify-this-song I Want It That Way`.

<img width="1230" alt="screen shot 2018-12-09 at 4 05 24 pm" src="images/do-what-it-says.PNG">

---

## Built With
Javascript, Node.js, Moment.js, Bandsintown API, Spotify API, OMDb API

---

## Author
**Patrick Caserta**
