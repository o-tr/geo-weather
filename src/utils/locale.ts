import { translations } from "@/const/locale";

export type Locale = keyof typeof translations;

export const getTranslation = (locale: Locale = "ja") => {
  return translations[locale];
};

export const isValidLocale = (locale: string): locale is Locale => {
  return locale in translations;
};