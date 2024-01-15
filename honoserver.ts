import { Hono } from 'hono';

const app = new Hono();
app.get('/', (resp) => resp.text('Hello David!'));

export default app;
