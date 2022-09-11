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

- Run client and backend at the same time

  - add "proxy": "http://localhost:5000" to package.json client

- Integrate the backend to frontend

  - axios
  - cd client
    - npm i axios
  - cd ..
    - back to server

- cd client/src/context/GlobalState

  - integrate API
  - run new action to fetch to the backend
  - getTransactions()
  - add new states

- AppReducer

  - add GET_TRANSACTIONS
  - add TRANSACTION_ERROR
  - swtich place `transactions: [...state.transactions, action.payload]`

- add error, loading, getTransactions to GlobalContext.Provider

- TransactionsList

  - add getTransactions
  - add in useEffect
    - any http request use useEffect

- Transaction component

  - change id to \_id

- GlobalState

  - deleteTransaction thru server

- GlobalState
  - addTransaction thru server

### Fix vite proxy

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/v1': 'http://localhost:5000/',
    },
  },
  plugins: [react()],
})
```
