import express from "express";

const app = express()

// Main page
app.get('/', (req, res) => {
  res.send('hello world')
})

// List products
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// Product detail
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// Create product
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

// Register User
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})


// Login User
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})
