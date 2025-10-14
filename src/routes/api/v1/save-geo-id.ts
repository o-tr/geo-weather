import { zValidator } from "@hono/zod-validator";
import type { Hono } from "hono";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { validateTurnstile } from "@/utils/turnstile";

const schema = z.object({
  token: z.string(),
  geoPosId: z.string(),
});

export const registerApiV1SaveGeoId = (app: Hono) => {
  app.post(
    "/api/v1/save-geo-id",
    zValidator("json", schema, (result, c) => {
      if (!result.success) {
        return c.json({ status: "failed", error: result.error });
      }
    }),
    async (c) => {
      const { geoPosId, token } = c.req.valid("json");
      const ip = c.req.header("x-forwarded-for") ?? "127.0.0.1";

      const validate = await validateTurnstile(token, ip);
      if (!validate) {
        return c.json({ status: "failed" });
      }
      const record = await prisma.geoWeather.findFirst({
        where: {
          ip,
        },
      });
      if (record) {
        await prisma.geoWeather.update({
          where: {
            ip,
          },
          data: {
            geoId: geoPosId,
            source: "user",
          },
        });
      } else {
        await prisma.geoWeather.create({
          data: {
            ip,
            geoId: geoPosId,
            source: "user",
          },
        });
      }
      return c.json({ status: "success" });
    },
  );
};
