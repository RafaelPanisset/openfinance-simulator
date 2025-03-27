import { createServer } from 'node:http';
import { app } from './app.ts';
import { connectMongo } from './mongo/connectMongo.ts';
import { config } from './config.ts';

const requestListener = app.callback();

(async () => {
  await connectMongo();
  const server = createServer(requestListener);

  server.listen(config.PORT, () => {
    // eslint-disable-next-line
    console.log(`Server started on port http://localhost:${config.PORT}`);
  });
})();
