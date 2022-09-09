Expense Tracker - MERN stack

- move src to client/
- from to root run `npm init`

- npm i express dotenv mongoose colors morgan

  - express
  - dotenv - global variables
  - mongoose - object data map / a layer to interact with the database
  - mongoDB atlas
  - colors - set colors in the terminal
  - morgan - a logger

- npm i -D nodemon concurrently

  - nodemon - to constantly run the server
  - concurrently - runs the backend on a port 5000 and frontend to port 3000 simultaneously

- routes

  - Postman - GET http://localhost:5000/api/v1/transactions

- controllers

  - has all the methods to interact with the database

- setup add and delete transactions
- Postman - POST http://localhost:5000/api/v1/transactions
- Postman - DELETE http://localhost:5000/api/v1/transactions/123

- Create database mongoDB.com

  - create cluster
  - database name - expensetracker
  - collections name - transactions
  - then CONNECT - eckzen / Bernardo\*\*\*\*
    - connect to application
    - copy connection string
      - paste in config.env

- config/db.js

  - connect database thru mongoose

- create a model

  - create schema

- controllers

  - get transaction
    - try / catch
  - Postman - GET http://localhost:5000/api/v1/transactions

- Add transaction

  - Postman - POST http://localhost:5000/api/v1/transactions
  - 400 user error
    - Body -> raw -> JSON
      {
      "text": "Payment",
      "amount": 500
      }

- Delete transaction
  - Postman - DELETE http://localhost:5000/api/v1/transactions/123
  - 404 error not found
    - copy the id
    - from mongodb collection
    - paste at the end of the link
