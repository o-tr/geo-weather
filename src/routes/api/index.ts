import type { Hono } from "hono";
import { registerApiIndex } from "@/routes/api/api";
import { registerApiHealthz } from "@/routes/api/healthz";
import { registerApiV1 } from "@/routes/api/v1";

export const registerApi = (app: Hono) => {
  registerApiHealthz(app);
  registerApiIndex(app);
  registerApiV1(app);
};
