# React-Gaming-App

![comeon-javascript-test-site](example.png)

This repository contains solution for comeon javascript assignment 

## Assignment Overview

The assignment is developed in React for a mock up working casino website. 

## Assignment Criteria

The following tasks are part of the assignment: 

* Login form with validation.
* On a valid username/password, user is listed with games.
* On an invalid username/password, provided feedback and allowed the user to try again.
* Listed all games 
* Listed categories with filter option.
* Search by text function. 
* Click and play the game.
* Logout option and navigate to login screen

### Server end Setup mock api
```javascript
npm install -g json-server
```

```javascript
json-server --watch mock/mock-data.json --port 3001 --middlewares mock/mock-api.js
```

Update: Use json-server version other than latest or alpha for example 0.17.3 or lower.

### Client end Setup

clone the repo and install dependencies
```javascript
npm install
```
