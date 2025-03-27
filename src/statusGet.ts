import type { Context } from 'koa';
import pkg from '../package.json' with { type: 'json' };
import mongoose from 'mongoose';

export const statusGet = async (ctx: Context) => {
  try {
    const mongodbStatus = await mongoose.connection.db.admin().ping();

    ctx.body = {
      message: 'OpenFinance Simulator',
      mongodbStatus: !!mongodbStatus,
      version: pkg.version,
      commitSha: process.env.COMMIT_SHA,
      buildTimestamp: process.env.BUILD_TIMESTAMP,
    };
    ctx.status = 200;
  } catch (err) {
    // eslint-disable-next-line
    console.log({
      err,
    });
    ctx.body = err.toString();
    ctx.status = 400;
  }
};
