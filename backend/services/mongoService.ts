// import * as mongoDB from "mongodb";
// import dotenv from "dotenv";
// dotenv.config();
// export const collections: { event_store?: mongoDB.Collection; last_read_date?: mongoDB.Collection } = {};

// export async function connectToMongo() {
//   const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING!!);
//   try {
//     await client.connect();
//   } catch (err) {
//     console.error(err);
//   }

//   const db: mongoDB.Db = client.db(process.env.MONGO_DB_NAME);

//   const eventStoreCollection: mongoDB.Collection = db.collection(process.env.COLLECTION_NAME_1!!);
//   const lastReadTimeCollection: mongoDB.Collection = db.collection(process.env.COLLECTION_NAME_2!!);

//   collections.event_store = eventStoreCollection;
//   collections.last_read_date = lastReadTimeCollection;

//   console.log(
//     `Successfully connected to database: ${db.databaseName} and collection: ${eventStoreCollection.collectionName}`
//   );
// }

// connectToMongo();
