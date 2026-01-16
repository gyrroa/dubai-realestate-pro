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
