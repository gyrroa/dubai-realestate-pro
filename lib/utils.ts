import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import React, { ReactNode } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Standard renderers for next-intl t.rich
 * Pure TypeScript version using React.createElement
 */
export const richRenderers = {
  gold: (chunks: ReactNode) =>
    React.createElement("span", { className: "text-accent" }, chunks),
  italic: (chunks: ReactNode) =>
    React.createElement("span", { className: "italic" }, chunks),
  i: (chunks: ReactNode) =>
    React.createElement("span", { className: "italic" }, chunks),
  black: (chunks: ReactNode) =>
    React.createElement("span", { className: "font-medium" }, chunks),
  br: () =>
    React.createElement("br"),
};

// --- NEW HELPER FUNCTION ---

/**
 * Safely retrieves a localized string from a Sanity object.
 * * @param content - The data field (e.g., dev.name which could be {en: "...", ar: "..."} or just "...")
 * @param locale - The current locale code (e.g., 'ar', 'en')
 * @returns The string for the current locale, or falls back to 'en'.
 */
export function getLocalized(content: any, locale: string = 'en'): string {
  // 1. Safety Check: If null or undefined
  if (!content) return "";

  // 2. Legacy Support: If data is already a plain string, just return it
  if (typeof content === "string") return content;

  // 3. Try exact locale match (e.g., content['ar'])
  const localizedValue = content[locale];
  if (localizedValue) return localizedValue;

  // 4. Fallback: Try English ('en')
  if (content.en) return content.en;

  // 5. Last Resort: Return the first available key or empty string
  return Object.values(content)[0] as string || "";
}