import { zValidator } from "@hono/zod-validator";
import type { Hono } from "hono";
import { prisma } from "@/lib/prisma";
import { userPreferencesSchema } from "@/types/user-preferences";
import { getRequestIp } from "@/utils/getRequestIp";
import { validateTurnstile } from "@/utils/turnstile";

export const registerApiV1UserPreferences = (app: Hono) => {
  app.put(
    "/api/v1/preferences",
    zValidator("json", userPreferencesSchema, (result, c) => {
      if (!result.success) {
        return c.json({ status: "failed", error: result.error });
      }
    }),
    async (c) => {
      const { token, ...data } = c.req.valid("json");
      const ip = getRequestIp(c);

      const validate = await validateTurnstile(token, ip);
      if (!validate) {
        return c.json({ status: "failed" });
      }

      const geoWeather = await prisma.geoWeather.findUnique({
        where: { ip },
      });

      if (!geoWeather) {
        return c.json(
          {
            status: "failed",
            error: "GeoWeather record not found",
          },
          404,
        );
      }

      const preferences = await prisma.userPreferences.upsert({
        where: { ip },
        create: {
          ip,
          ...data,
        },
        update: data,
      });

      return c.json({
        status: "success",
        data: preferences,
      });
    },
  );

  app.get("/api/v1/preferences", async (c) => {
    try {
      const ip = getRequestIp(c);
      const preferences = await prisma.userPreferences.findUnique({
        where: { ip },
      });

      return c.json({
        status: "success",
        data: preferences,
      });
    } catch (e) {
      console.error(e);
      return c.json(
        {
          status: "failed",
          error: e,
        },
        400,
      );
    }
  });
};
