# MERN
## _MongoDB, Express, React, Node.JS_

[![N|Solid](https://www.patterns.dev/img/reactjs/react-logo@3x.svg)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)]()


## MERN 
MERN is one of several variations of the 
 (MongoDB Express Angular Node), where the traditional Angular.js front-end framework is replaced with React.js.
 
 The MERN stack is a JavaScript stack that’s designed to make the development process smoother. It consists of four technologies:

- MongoDB: A document-oriented database. JSON documents created in your React.js front end can be sent to the Express.js server, where they can be processed and stored directly in MongoDB for later retrieval.
 

- Express.js: A server-side web framework. It has powerful models for URL routing and handling HTTP requests and responses.


- React.js: A client-side JavaScript framework. It lets you build up complex interfaces through simple components, connect them to data on your back-end server, and render them as HTML.
 

- Node.js: The premier JavaScript web server. Express and Node make up the middle (application) tier.


- ✨Magic ✨

## Features

The MERN architecture allows you to easily construct a three-tier architecture (front end, back end, database) entirely using JavaScript and JSON. The MERN stack project structure is organized in a way that separates the backend and frontend code. It follows the MVC (Model-View-Controller) architecture pattern.

- The MERN Stack combines the most recent technologies for building high-end web apps. Multiple frameworks, databases, libraries, and other tools are used to create these apps.

- It comprises several open-source parts, including MongoDB, React, Node.js, and Express.js.

## What is the MERN stack?
MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.

> MongoDB — document database
> Express(.js) — Node.js web framework
> React(.js) — a client-side JavaScript framework
> Node(.js) — the premier JavaScript web server


Express and Node make up the middle (application) tier. Express.js is a server-side web framework, and Node.js is the popular and powerful JavaScript server platform. Regardless of which variant you choose, ME(RVA)N is the ideal approach to working with JavaScript and JSON, all the way through.

## How does the MERN stack work?

The MERN architecture allows you to easily construct a three-tier architecture (front end, back end, database) entirely using JavaScript and JSON.

## React.js front end
The top tier of the MERN stack is React.js, the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build up complex interfaces through simple components, connect them to data on your back-end server, and render them as HTML.

React’s strong suit is handling stateful, data-driven interfaces with minimal code and minimal pain, and it has all the bells and whistles you’d expect from a modern web framework: great support for forms, error handling, events, lists, and more.

## Express.js and Node.js server tier
The next level down is the Express.js server-side framework, running inside a Node.js server. Express.js bills itself as a “fast, unopinionated, minimalist web framework for Node.js,” and that is indeed exactly what it is. Express.js has powerful models for URL routing (matching an incoming URL with a server function), and handling HTTP requests and responses.

By making XML HTTP Requests (XHRs) or GETs or POSTs from your React.js front end, you can connect to Express.js functions that power your application. Those functions, in turn, use MongoDB’s Node.js drivers, either via callbacks or using promises, to access and update data in your MongoDB database.

## MongoDB database tier
If your application stores any data (user profiles, content, comments, uploads, events, etc.), then you’re going to want a database that’s just as easy to work with as React, 
Express
, and Node.

That’s where MongoDB comes in: JSON documents created in your React.js front end can be sent to the Express.js server, where they can be processed and (assuming they’re valid) stored directly in MongoDB for later retrieval. Again, if you’re building in the cloud, you’ll want to look at Atlas. If you’re looking to set up your own MERN stack, read on!


## Installation
Start a New React Project [React](https://create-react-app.dev/docs/getting-started).

Install the dependencies and devDependencies and start the server.

```sh
npx create-react-app my-app
cd my-app
npm start
```

For production environments...

```sh
npm run build
npm run start
```

## React Dependencies
# Some Popular Dependencies That Are Commonly Used In React.js Projects:

- Vite: 
A build tool that uses a faster bundler called esbuild1. It makes use of the browser’s native ES modules to make for a quicker development experience1.

- React Query and SWR: 
Libraries that make it very easy to manage server state within our React components1. They help with fetching data by providing helpful custom hooks and have their own internal cache.

- Next.js: The most popular React framework.

- Redux: The most popular React state management library.

- React Hook Form: The most popular React form library.

- styled-components or MUI: The most popular React UI libraries.

- Framer Motion: A production-ready motion library for React3. It provides spring animations, simple keyframes syntax, gestures (drag/tap/hover), layout and shared layout animations, SVG paths, exit animations, server-side rendering, variants for orchestrating animations across components, and CSS variable.

- React Testing Library: A lightweight solution for testing React components3. It provides light utility functions on top of react-dom and react-dom/test-utils

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

## Development

First Tab:

```sh
# Npm
npm install -g react-devtools
```

Next open the developer tools from the terminal:

```sh
react-devtools
```

#### Building for source

Building a React.js application from source involves several steps. Here’s a basic guide:

1. Set up your development environment: You’ll need to have Node >= 14 on your local development machine. You can use nvm (macOS/Linux) or nvm-windows to switch Node versions between different projects.

2. Create a new app: You can create a new app using one of the following methods:

npx:
```sh 
npx create-react-app my-app 
```
npm:   
```sh 
npm init react-app my-app 
```
Yarn:
```sh 
yarn create react-app my-app
```

3. Start the development server: Navigate to your new project directory and start the development server:

 ```sh 
 cd my-app
 ```
 ```sh 
 npm start or yarn start
 ```

4. Open the app: Open http://localhost:3000/ in your browser to see your app.

5. Build the app: When you’re ready to deploy to production, create a minified bundle with  ```sh npm run build ``` or  ```sh yarn build ```.
 
# Task-Manager Application - Project Description

##### Purpose:
The To-Do List application serves as a tool for users to keep track of tasks they need to complete. The primary objective is to help users organize their tasks, set priorities, and manage their time more effectively.

##### Key Features:

Task Management

> Add Tasks: Users can create a new task by entering a task description.
> Delete Tasks: Users can remove tasks they've completed or no longer need.
> Edit Tasks: Users can modify the task description or due date.
> Complete Tasks: Users can mark tasks as completed. Completed tasks can be displayed separately or crossed out in the main list.

##### Technical Requirements:

list

> Platform: The application can be a web app, mobile app, or desktop app, depending on the target audience.

> Database: A database will be required to store tasks, categories, and user settings. This could be a cloud-based database like MongoDB for multi-user or sync-enabled applications.

> Frontend: Depending on the platform:

>Web: HTML, CSS, JavaScript (Frameworks like React, Angular)

> Desktop: native OS-based development tools

> Backend: Node.js, Django, MONGODB atlas etc.

##### APIs & Libraries:



> Notifications: Local notifications for reminders

>Security: It's crucial to implement security measures, especially if user data is stored in the cloud or if there's user account functionality.
