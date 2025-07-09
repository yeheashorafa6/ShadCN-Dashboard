import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"


// class & name
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
