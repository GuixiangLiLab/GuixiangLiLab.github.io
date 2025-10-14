import type { Locale } from "@/i18n";

export async function getDict(lang: Locale) {
  const dict = await import(`@/dictionaries/${lang}.json`);
  return dict.default as Record<string, string>;
}