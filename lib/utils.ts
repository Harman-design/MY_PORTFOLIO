import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength).trim() + "…";
}

/** Generate random integer between min and max inclusive */
export function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Generate contribution grid data (52 weeks × 7 days) */
export function generateContribData(): number[] {
  const data: number[] = [];
  for (let week = 0; week < 52; week++) {
    for (let day = 0; day < 7; day++) {
      // Weighted towards 0-1 with occasional high activity
      const r = Math.random();
      if (r < 0.42) data.push(0);
      else if (r < 0.62) data.push(1);
      else if (r < 0.78) data.push(2);
      else if (r < 0.90) data.push(3);
      else data.push(4);
    }
  }
  return data;
}
