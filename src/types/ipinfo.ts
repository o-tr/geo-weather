import { z } from "zod";

export const IPInfoResponse = z.object({
  city: z.string(),
  region: z.string(),
  loc: z.string(),
  timezone: z.string(),
});

export type ZIPInfoResponse = z.infer<typeof IPInfoResponse>;
