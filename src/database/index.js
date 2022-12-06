import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

mongoose.Promise = global.Promise;
const dbs = {};

const mongo = process.env.MONGODB_HOST_URI;

let conn;

export default class Database {
    static connect = () => {
        if (!conn) {
            conn = mongoose.createConnection(mongo, {
                poolSize: 10,
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        }
    
        conn.on('error', (err) => {
            console.log(`Connection error: ${err}`);
        });
        conn.once('open', () => {
            console.log(`Mongodb connected: ${mongo}`);
        });
    };

	static get conn() {
		return conn;
	};

	static select = (dbName) => {
		if (!conn) {
			Database.connect();
		}
		if (!dbName) {
			const error = new Error('Company required.');
			logger.error(error.stack);
			throw error;
		}
		let db = dbs[dbName];
		if (!db) {
			db = conn.useDb(dbName);
			dbs[dbName] = db;
		}
		return db;
	};
}
