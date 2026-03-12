export const apiToken = process.env.IPINFO_API_TOKEN;
export const endpoint = process.env.IPINFO_API_ENDPOINT;
export const sourceName = process.env.IPINFO_API_SOURCE_NAME ?? "ipinfo";

function readNormalizedLegalUrlFromEnv(): string | null {
  const raw = process.env.LEGAL_URL;
  if (!raw) return null;
  try {
    const url = new URL(raw);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.toString();
  } catch {
    return null;
  }
}

export const legalUrl = readNormalizedLegalUrlFromEnv();
