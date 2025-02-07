import {Hono} from "hono";
import {translations} from "@/const/locale";

export const registerApiV1Translations = (app: Hono) => {
  app.get('/api/v1/translations', async (c) => {
    return c.json(translations);
  });
}