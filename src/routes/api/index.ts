import {Hono} from "hono";
import {registerApiHealthz} from "@/routes/api/healthz";
import {registerApiIndex} from "@/routes/api/api";
import {registerApiV1} from "@/routes/api/v1";

export const registerApi = (app: Hono) => {
  registerApiHealthz(app);
  registerApiIndex(app);
  registerApiV1(app);
}