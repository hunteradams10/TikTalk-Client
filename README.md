# TikTalk🎃, a MERN Application

---

🎃 Staging/Development App: https://www.tiktalkproject.com 

👻 Deployed App: https://www.tiktalkproject.com/ 

TikTalk is a Halloween-themed chat application built with React, ExpressJS, NodeJS, and MongoDB. It has been deployed on [server] and Netlify.

---

## Installation Guide

The production app can be found at https://www.tiktalkproject.com , where you can make an account, add friends to your group, and get chatting! If you're after a more local experience, please follow the instructions below.

Requirements:

- NodeJS 14.18.0 or later
- MongoDB (be sure to create an account!)

Server-Side:

- Create a new directory and call it whatever you want! We advise `TikTalk`, or something similar 😉
- `cd` into that folder, then create another folder called `tiktalk-server`, or whatever best suits you 😊
- Clone the server repo using the `CLI` from here: `git clone git@github.com:coderGirlSu/TikTalk-server.git`
- `cd` into that folder (you should see `git` initialize), then run `npm install` or `npm i` to download everything you need to get started!
- Open a terminal window, and run `npm start` - make sure you have MongoDB open!
- If all went well, you'll see the server start on port `80` in your terminal!

Client-Side:

- `cd` out of the `server` folder, make a new folder called `tiktalk-client`. `cd` into it, and run `git clone git@github.com:hunteradams10/TikTalk-Client.git`
- Open a terminal, make sure it's in the current directory, and run `npm i` or `npm install` to make sure that all the required files are downloaded into the `package.json`.
- In that terminal, run `npm start` to run the client-side application in a new browser window.
- The server will expect requests from `localhost:3000`, so it should all be good! Happy chatting! 🦇

## Libraries and Dependencies

- ` "cors": "^2.8.5"` - The `cors` library allows cross-origin resource sharing. This prevents cors issues when the back-end and front-end are trying to communicate with one-another.
- `"dotenv": "^16.0.3"` `dotenv` is what allows us to load environment variables into the `process.env`, instead of having it in the code body, which is a spooky security risk 👻
- `"express": "^4.18.2",` - `expressjs` is a NodeJs web framework that enabled us to build this application! It helps to manage routes and servers. The force is strong with this one. 💫
- `"firebase": "^9.13.0"` - `Firebase` took care of all our authentication and authorization for the application. It holds the keys to all the doors.

- `"firebase-admin": "^11.2.0"` - Firebase's node SDK allows us to control what environments can access the server (such as development or production), another security step 👮
- `"helmet": "^6.0.0"` - `helmet` allowed us to build safe HTTP headers, to add additional security to the back-end.
- `"mongoose": "^6.7.2"` - `mongoose` allows developers to point to a specific schema in the database. It is an ODM library for MongoDB.

## Dev-Dependencies (Server)

- `"jest": "^29.3.1"` - a Javascript testing framework to make sure all our code is nice and correct and working properly ☑️
- `"nodemon": "^2.0.20"` - `nodemon` will automatically refresh the application when changes are detected in the directory. Very handy and saved a lot of time! 
- `"supertest": "^6.3.1"` - `supertest` is a NodeJS testing library that allows us to test our API, the HTTPS servers.

## Dependencies (Client)

- `"react": "^18.2.0"` - `React` is a Javascript front-end framework developed by Facebooks. It helps developers build modular, scalable front-end user interfaces using components.
- `"react-dom": "^18.2.0"` - `react-dom` is a library that binds React to the Document Object Model. It is the reason that React can `render()` browser content.
-  `"react-router-dom": "^6.4.3"` - `react-router-dom` allows React applications to be SPA's (or Single Page Applications). It allows us to add extensions to the URL by creating `Routes` that navigate to different "Pages".
- `"react-scripts": "5.0.1"` - `react scripts` enables us to use additional scripts along with those that come with React natively. These can be use to create custom builds, say, for production.
- `"sass": "^1.56.1"` - `SASS` is a CSS-Compiler that allows us to write all of our CSS on one page, with nested descendents inside of ancestors. It also allows us to create custom colour variables! Neat.
- `"moment": "^2.29.4"` - `moment` allows us to show all the dates and times of messages correctly, ensuring that they are readable.
- `"node-sass": "^7.0.3"` - `node-sass` is what allows us to convert the `scss` into `css`. It is a `css` pre-processor.
- `"jwt-decode": "^3.1.2",` - `JWT decode` is a means to decode `jwt` tokens when they are sent from the back-end for authentication.
- `"axios": "^1.1.3"` - `Axios` is a Javascript library that allows us to use the `Promise API` with HTTP requests. It handles all such requests and returns a promise - the result of which can be handled in React.

## Dev-Dependencies (Client)

---

[ TESTING ]

## TESTING STUFF

---

## Screenshots

**Register**

![register](./docs/app%20screenshots/register.png)

**Login**

![login](./docs/app%20screenshots/login.png)

**Chat**

![chat](./docs/app%20screenshots/chat.png)

**Group Chat**

![group chat](./docs/app%20screenshots/group%20chat.png)

---

## Project Management

All of our project management was done in Trello. Initially, we separated our work into the following columns: `nice to have`, `must to have`, `back-end`, `front-end`, `README2` (for this README!), `doing`, `done`, `check` (for making sure certain things were definitely kept track of), and `ideas` (the initial ideas for the app). We thought of the most basic things we needed to do and made cards in their relevant columns, deciding what was most important all the way through to least important.

![login/sign-up](./docs/trello%20screenshots/login-sign-up.png)

![nice to have](./docs/trello%20screenshots/initial-nice-to-have.png)

We had a meeting and decided upon the initial ideas for the app features, and made cards for them:

![initial features](./docs/trello%20screenshots/initial-ideas.png)

We decided that Su would work primarily on the back-end, and Hunter on the front-end, according to our strengths. We added our names to each card that we'd be working on individually, time limits for the most important features, and a number system so that when a pull request was made on github, we could keep track of which number item we were creating the request for and mark it off in Trello.

![register](./docs/trello%20screenshots/register.png)

As the project grew, more cards were added with our names assigned, as well as fixes that needed to be done. Features like making the navbar sticky were added and assigned to the respective developer, and fixes that were being worked on currently were added to the `doing` column. As bugs came up, we added cards for them to keep track of them, and to remind ourselves to work on them.

![more components](./docs/trello%20screenshots/more-components.png)

![and more components](./docs/trello%20screenshots/even-more-cards.png)

We decided to try to implement a colour-coding system for which marking criteria each card was for, but this ended up being cumbersome and was abandoned. We began to work on back-end testing.

![some things done](./docs/trello%20screenshots/some-things-done.png)

As we neared our deadline, the `doing` column started to shrink:

![doing column shrink](./docs/trello%20screenshots/doing-colum-shrinking.png)

![shrinking-more](./docs/trello%20screenshots/shrink-more.png)

There were some small tasks that were not added, but we managed to keep track of them.

## Reflection

It was a huge joy and a huge challenge to build this application, but Hunter Adams and Su Zhang are very proud of it. We found out that we didn't have enough time to implement every feature that we wanted to, but intend to add these in future. The project-management, although it was a lifesaver, was a little bit cumbersome in its details and the PR card-numbering system was largely abandoned on the front-end, due to the amount of fixes and changes that needed to be made and the time limit in which to make them. The teamwork and communication, however, was almost flawless. Su and Hunter stayed in constant communication every step of the way. Due to the enormity of the front-end, Su and Hunter decided to work together on it once the back-end was finished, and this contributed enormously to the product being completed by the due date. The developers are enormously proud of their work.










