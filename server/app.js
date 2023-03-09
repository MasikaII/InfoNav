import express from 'express';
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import User from './models/User.js';
import blogRouter from './routes/blog-routes.js';


//const secret = 'dkmefoi3rimqdoqdm3ij3evghkikhhdfgklhsh';

//APIs
const app = express()
app.use(cors());
app.use(express.json())
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

//Middeleware for requests
/*
app.use(cors({
  origin: 'http://localhost:7000',
  credentials: true,
}));
*/

app.use(
  express.urlencoded({ extended: true })
);

//Ports
const port = 7000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

//MongDB 
const dbUrl = 'mongodb+srv://InfoNav:rKJHOIFCXMfNCn6u@cluster0.qzctxa3.mongodb.net/?retryWrites=true&w=majority';

/*
const connectionParams = {
  useNewUrlParser: true, useUnifiedTopology: true,
};
*/

mongoose.connect(dbUrl)
  .then(() => {
    console.info("Connected to the DB");
  })
