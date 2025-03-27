import Router from '@koa/router';
import { statusGet } from './statusGet.ts';

export const router = new Router();

router.all('/', async (ctx: { status: number; body: string }) => {
  ctx.status = 200;
  ctx.body = `            
    GET /status
  `;
});

router.get('/status', statusGet);
