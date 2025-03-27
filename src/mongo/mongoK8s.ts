import { connectMongo } from './connectMongo.ts';
// import { connectDatabaseMock } from './mongo.ts';
import { config } from '../config.ts';
import { prompt } from '../debug/prompt.ts';
import { connectDatabaseDictSimulator } from './mongo.ts';

export const connectDatabaseK8s = async (): Promise<void> => {
  await prompt();

  const directConnection = !config.MONGO_URI.includes('replicaSet');

  const mongooseOptions = {
    directConnection,
  };

  // await connectDatabaseMock();
  await connectDatabaseDictSimulator();

  return connectMongo(mongooseOptions);
};
