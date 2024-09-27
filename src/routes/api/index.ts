import {Hono} from "hono";
import {registerApiHealthz} from "@/routes/api/healthz";
import {registerApiIndex} from "@/routes/api/api";

export const registerApi = (app: Hono) => {
  registerApiHealthz(app);
  registerApiIndex(app);
}