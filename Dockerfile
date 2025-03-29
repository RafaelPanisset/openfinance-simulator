FROM node:21-slim

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 5681

# Start the application
CMD ["pnpm", "dev"] 