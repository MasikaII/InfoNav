import { Configuration, OpenAIApi } from "openai";
import express from 'express';
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import User from './models/User.js';
import blogRouter from './routes/blog-routes.js';


// CONFIGURATIONS
// OpenAI Configuration
const configuration = new Configuration({
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();


// MIDDLEWARE
const app = express()
app.use(cors());
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

const port = 7000

// CHAT STRING
app.post('/', async (req, res) => {
    const { message } = req.body;
    console.log(message, "message")

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


// DATBASE SETUP
const dbUrl = 'mongodb+srv://InfoNav:rKJHOIFCXMfNCn6u@cluster0.qzctxa3.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbUrl)
  .then(() => {
    console.info("Connected to the DB");
  })

// verfying connection
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

// ROUTES
app.use("/api/user", router);
app.use("/api/blog", blogRouter);