// app.js
const express = require('express')

// Create Express app
const app = express()

// A sample route
app.get('/', (req, res) => res.send('Hello World!'))

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
    