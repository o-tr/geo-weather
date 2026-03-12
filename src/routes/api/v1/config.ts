import type { Hono } from "hono";
import { legalUrl } from "@/const/env";

export const registerApiV1Config = (app: Hono) => {
  app.get("/api/v1/config", async (c) => {
    return c.json({
      legalUrl: legalUrl ?? null,
    });
  });
};
