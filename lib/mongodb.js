import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI;
const uri = 'mongodb+srv://jorgeandresmm2002:jorgemora2002@cluster0.bhzwhhd.mongodb.net/'
let client;
let clientPromise;
let NODE_ENV = 'development'

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (NODE_ENV === 'development') {
  // In development mode, use a global variable so we can reuse the client across module reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
