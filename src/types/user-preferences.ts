import { z } from "zod";

const hour = 3600;

export const userPreferencesSchema = z.object({
  token: z.string(),
  hideLocation: z.boolean().optional().default(false),
  locale: z.enum(["ja", "en"]).optional().default("ja"),
  autoUpdateInterval: z.union([
    z.literal(-1),
    z.number().int().min(hour).max(12*hour)
  ]).optional().default(6*hour),
});

export type UserPreferencesInput = z.infer<typeof userPreferencesSchema>;