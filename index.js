import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

import User from './model/User.js';

const app = express()

const __dirname = path.resolve();

async function main () {
    await mongoose.connect(process.env.DB_URL);
    var db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.on('connected', function () {  
        console.log('Mongoose default connection open');
    }); 

    // User.find({}, function(err, users) {
    //     console.log(users);
    // });



    app.use(express.static(path.resolve(__dirname, '../client/build')));

    // // A sample route
    // app.get('/', (req, res) => {

    //     res.send('Hello World!')
    // })

    app.get("/api", (req, res) => {
        res.json({ message: "API from server!" });
    });


    // All other GET requests not handled before will return our React app
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });
    
    // start the server listening for requests
    app.listen(process.env.PORT || 3001, 
        () => console.log("Server is running..."));

}

main();


