import mongoose from 'mongoose';
const MONGODB_URL = "mongodb+srv://ranjansameer:zccJF7dajUM4B6ne@cluster0.knpdqht.mongodb.net/?retryWrites=true&w=majority";
if(!MONGODB_URL) {
    throw new Error(

    )
}
let cached = global.mongoose
if(!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    }
}
async function dbConnect() {
    if(cached.conn) {
        return cached.conn
    }
    if(!cached.promise) {
        const opts = {
            bufferCommands: false,
        }
        cached.promise = await mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
            return mongoose
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect
