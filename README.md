# Movies REST API

## Description

This is the front end for a REST API made as part of a full stack app for the CN Master Bootcamp. Users can create an account and add/search/edit/delete movies.

The site is built with React, Material UI, and React Router, and pulls images from TMDB.

Users can search by movie title, or find a list of movies starring an actor or in a particular genre, as well as finding movies with a minimum rating.

---

## Back End

The back end is built with node, the repo can be found [here](https://github.com/shard520/rest-api) and the site is live at:

https://sh-movies.netlify.app/

---

## Issues

- The MySQL DB is hosted with a free cloud provider and adding a movie with a large list of actors/genres can max out the connection, leading to the movie being added without the complete list of actors/genres.

---

## To Do

- Tweak some spacings and adjust form layout for mobile.
- Add a footer with link to the repo.
