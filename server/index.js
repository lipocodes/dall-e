import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();   //lets us store & pull vars from .env

const app = express();   //our server side
app.use(cors());
app.use(express.json({limit:'50mb'}));
//allow usage of: routes outside this file
app.use('/api/v1/post',postRoutes);
app.use('/api/v1/dalle',dalleRoutes);

app.get('/',async (req,res)=>{
    res.send("Hello from Dall-E");
});


const startServer = async () => {
    try{
     connectDB(process.env.MONGO_URL);
     app.listen(8080, ()=>{console.log("Server has started on http://localhost:8080")});
    }catch(err){console.log("Can't initialize server & DB: " + err);}
   
}

startServer();