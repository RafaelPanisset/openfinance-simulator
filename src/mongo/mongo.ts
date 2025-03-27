import mongoose from 'mongoose';
import type { ConnectOptions } from 'mongoose';

import { connectMongo } from './connectMongo.ts';
import { config } from '../config.ts';

const mongooseOptions: ConnectOptions = {
  // autoIndex: true,
};

export const connectDatabase = () => connectMongo(mongooseOptions);

export const connectDatabaseDictSimulator = async () => {
  if (config.MONGO_URI) {
    // eslint-disable-next-line
    console.log('MONGO_URI_DICT_SIMULATOR', config.MONGO_URI);
    await mongoose.createConnection(config.MONGO_URI).asPromise();
  }
};
