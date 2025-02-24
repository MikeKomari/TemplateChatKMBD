import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatChatMessage = (
  template: string,
  data: {
    isBuddhist: boolean;
    daytime: string;
    medParName?: string;
    exactLocation: string;
  }
): string => {
  return template
    .replace(/\${daytime}/g, data.daytime)
    .replace(
      /\${medParName \? medParName : 'medpar'}/g,
      data.medParName || "medpar"
    )
    .replace(
      /\${isBuddhist \? 'Namo Buddhaya' : ''}/g,
      data.isBuddhist ? "Namo Buddhaya" : ""
    )
    .replace(
      /\${location.pathname.split\('\/'\).pop\(\)}/g,
      data.exactLocation
    );
};
