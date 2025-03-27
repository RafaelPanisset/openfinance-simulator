import mongoose from 'mongoose';
import type { ConnectOptions } from 'mongoose';

import { config } from '../config.ts';
import { mongooseConnectionDebug } from './mongooseConnectionDebug.ts';

mongoose.set('strictQuery', false);

export const connectMongo = async (options: ConnectOptions = {}) => {
  mongooseConnectionDebug();

  try {
    await mongoose.connect(config.MONGO_URI, options);
  } catch (err) {
    // eslint-disable-next-line
    console.log('mongoose connect try catch: ', err);
  }
};
