# Lost & Found
by Jonathan Sweet

## Description:
This project is composed of two parts, a client side and a server side. Utilizing an express.js server with knex/postgreSQL on the backend to store user and reported item information, the frontend provides an interface with React, Router, Redux, Saga middleware, and the Google Maps Javascript API to allow users to sign up, create reports, and view their reports with a dynamic, interactive map. Future versions will allow for greater administrative control for organizations and more robust search functionality for querying reported items. 

## Instructions: 
This project requires the following: 
* [PostgreSQL](https://www.postgresql.org/download/) (can be installed with [Homebrew](https://brew.sh/))
* [This repo (backend server)](https://github.com/JSweet314/lostAndFound-server)

To start:
* Clone down this repo and run `npm install`
* Clone backend (server) and run `npm install`
* Start backend server with `nodemon index.js`
* Start frontend (client) with `npm start`
  * Press 'y' to accept different port (client side is proxied to port 3000)

Run the test suite in terminal with `npm test`. 
Run eslint with `npm run eslint`.

![welcome](src/images/LFscreenshot.png)
![reportMap](src/images/reportMapScreenshot.png)
![myReports](src/images/itemsListScreenshot.png)
