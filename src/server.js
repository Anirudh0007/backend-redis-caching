import dotenv from 'dotenv';

dotenv.config();

import app from './app.js';
import connectMongo from './config/mongo.js';
import { connectRedis } from './config/redis.js';


const PORT=process.env.PORT || 3000;


const startServer=async()=>{
    try
    {
        await connectMongo();
        await connectRedis();
        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}`);
        })
    }
    catch(error)
    {
        console.error('Failed to start server');
        console.log(error.message);
        process.exit(1);
    }
}

startServer();


