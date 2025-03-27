export const config = {
  NODE_ENV: process.env.NODE_ENV as string,
  MONGO_URI: process.env.MONGO_URI as string,
  PORT: process.env.PORT as string,
} as const;
