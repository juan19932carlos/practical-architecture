import { expect, test } from "vitest";
import { buildApp } from "./fastify-app";

test("health returns ok", async () => {
  const app = buildApp();

  const response = await app.inject({ method: "GET", url: "/health" });

  expect(response.statusCode).toBe(200);
  expect(response.json()).toEqual({ status: "ok" });
  await app.close();
});
