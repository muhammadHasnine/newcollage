import express from 'express';
import connectionDB from './connection/connect.mjs';
import cors from 'cors'
import route from './routes/route.mjs';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api',route)
connectionDB()
const PORT = process.env.PORT || 3002
app.listen(PORT,()=>{
    console.log(`Our Server Running on ${PORT} PORT`)
})