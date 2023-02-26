const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

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
app.use(express.urlencoded({ extended: true }))
const port = 3080

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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
