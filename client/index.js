import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js';

const path = require('path')

const app = express();


app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

//static files
app.use(express.static(path.join(__dirname, '.client1/build')));

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, './client1/build/index.html'))
});

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));