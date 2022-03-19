import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config()
const connectionDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Mongo DB connection succesfull');
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

export default connectionDB;