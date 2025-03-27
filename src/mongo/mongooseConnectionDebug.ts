import mongoose from 'mongoose';

/**
 * connecting: Emitted when Mongoose starts making its initial connection to the MongoDB server
 * connected: Emitted when Mongoose successfully makes its initial connection to the MongoDB server, or when Mongoose reconnects after losing connectivity. May be emitted multiple times if Mongoose loses connectivity.
 * open: Emitted after 'connected' and onOpen is executed on all of this connection's models.
 * disconnecting: Your app called Connection#close() to disconnect from MongoDB
 * disconnected: Emitted when Mongoose lost connection to the MongoDB server. This event may be due to your code explicitly closing the connection, the database server crashing, or network connectivity issues.
 * close: Emitted after Connection#close() successfully closes the connection. If you call conn.close(), you'll get both a 'disconnected' event and a 'close' event.
 * reconnected: Emitted if Mongoose lost connectivity to MongoDB and successfully reconnected. Mongoose attempts to automatically reconnect when it loses connection to the database.
 * error: Emitted if an error occurs on a connection, like a parseError due to malformed data or a payload larger than 16MB.
 * fullsetup: Emitted when you're connecting to a replica set and Mongoose has successfully connected to the primary and at least one secondary.
 * all: Emitted when you're connecting to a replica set and Mongoose has successfully connected to all servers specified in your connection string.
 */

export const mongooseConnectionDebug = () => {
  mongoose.connection
    .on('connecting', (...args) => {
      // eslint-disable-next-line
      console.log('mongoose connecting: ', args);
    })
    .on('connected', (...args) => {
      // eslint-disable-next-line
      console.log('mongoose connected: ', args);
    })
    .on('open', (...args) => {
      // eslint-disable-next-line
      console.log('mongoose open: ', args);
      // Display connection information
      const infos = mongoose.connections;

      // eslint-disable-next-line
      infos.map((info) => {
        // eslint-disable-next-line
        console.log('mongoose connect to: ', {
          host: info.host,
          port: info.port,
          name: info.name,
          // @ts-expect-error
          replica: info.replica,
        });
      });
    })
    .on('disconnecting', (...args) => {
      // eslint-disable-next-line
      console.log('mongoose disconnecting', args);
    })
    .on('disconnected', (...args) => {
      // eslint-disable-next-line
      console.log('mongoose disconnected', args);
    })
    // Exit Process if there is no longer a Database Connection
    .on('close', (...args) => {
      // eslint-disable-next-line
      console.log('mongoose close', args);
      // eslint-disable-next-line
      console.log('ERROR: Connection to MongoDB lost');
      process.exit(1);
    })
    .on('reconnected', (...args) => {
      // eslint-disable-next-line
      console.log('mongoose reconnected', args);
    })
    // Reject if an error ocurred when trying to connect to MongoDB
    .on('error', (err) => {
      // eslint-disable-next-line
      console.log('mongoose error: ', {
        err,
        reason: err?.reason,
        servers: err?.reason?.servers,
      });
    })
    .on('fullsetup', (...args) => {
      // eslint-disable-next-line
      console.log('mongoose fullsetup', args);
    })
    .on('all', (...args) => {
      // eslint-disable-next-line
      console.log('mongoose all', args);
    });
};
