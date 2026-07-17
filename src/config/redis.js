import {createClient} from 'redis';

const redisClient=createClient({
    url:process.env.REDISURI
});

redisClient.on("error",(err)=>{
    console.log("Redis Error", err.message);
    
})

const connectRedis=async()=>{
    await redisClient.connect();
    console.log("Redis connected");
    
}

export {redisClient, connectRedis};