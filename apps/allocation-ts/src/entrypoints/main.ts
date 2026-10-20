import { buildApp } from "./fastify-app";

const port = Number(process.env.PORT ?? 3000);

await buildApp().listen({ port });
