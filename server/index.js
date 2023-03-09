const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { request } = require("express");
//Database import
const mongoose = require("mongoose");
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');


var salt = bcrypt.genSaltSync(10);
const secret = 'dkmefoi3rimqdoqdm3ij3evghkikhhdfgklhsh';
//const secret = process.env.SECRET_KEY;



const configuration = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();


// Allowing our frontend to query our model
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
//app.use(express.urlencoded({ extended: true }))
const port = 4000

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
//add cookie-parser middleware
app.use(cookieParser());


app.post('/', async (req, res) => {
    const { message } = req.body;

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
    });
    res.json({
        message: response.data.choices[0].text,  // reponse data from openai

    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


//This is for our Blog post
const dbUrl = 'mongodb+srv://InfoNav:rKJHOIFCXMfNCn6u@cluster0.qzctxa3.mongodb.net/?retryWrites=true&w=majority';

const connectionParams = {
    useNewUrlParser: true, useUnifiedTopology: true,
};

mongoose.connect(dbUrl, connectionParams)
    .then(() => {
        console.info("Connected to the DB");
    })



app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
});



app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const userDoc = await User.findOne({ username });

        if (!userDoc) {
            return res.status(400).json('wrong credentials');
        }

        const passOk = bcrypt.compareSync(password, userDoc.password);

        if (!passOk) {
            return res.status(400).json('wrong credentials');
        }

        const token = jwt.sign({ username, id: userDoc._id }, secret);
        res.cookie('token', token);
        res.send(`{"id": "${userDoc._id}", "username": "${username}", "token": "${token}"}`);

    } catch (error) {
        console.error(error);
        return res.status(500).json('internal server error');
    }
});


/*
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const userDoc = await User.findOne({ username });

        if (!userDoc) {
            return res.status(400).json('wrong credentials');
        }

        const passOk = bcrypt.compareSync(password, userDoc.password);

        if (!passOk) {
            return res.status(400).json('wrong credentials');
        }

        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token);
            res.send(`{"id": "${userDoc._id}", "username": "${username}", "token": "${token}"}`);
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json('internal server error');
    }
});
*/

/*
app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
});
*/


app.get('/profile', (req, res) => {
    const token = req.cookies.token;
    console.log(token);

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) {
            console.log(`Error verifying token: ${err}`)
            console.log(`Token: ${token}`);
            return res.status(401).json({ error: 'Invalid token' });
        }
        res.json(info);
    });
});


/*
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (!passOk) {
        return res.status(400).json('wrong credentials');
    }

    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json({
            id: userDoc._id,
            username,
        });
    });
});
*/




 //mongodb+srv://InfoNav:rKJHOIFCXMfNCn6u@cluster0.qzctxa3.mongodb.net/?retryWrites=true&w=majority
