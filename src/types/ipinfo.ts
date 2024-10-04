import {z} from "zod";

export const IPInfoResponse = z.object({
  ip: z.string(),
  city: z.string(),
  region: z.string(),
  country: z.string(),
  loc: z.string(),
  org: z.string(),
  postal: z.optional(z.string()),
  timezone: z.string(),
})

export type ZIPInfoResponse = z.infer<typeof IPInfoResponse>;
