import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CALENDLY_URL = 'https://calendly.com/dylanshandbusiness/30min';

export function openCalendly() {
  window.open(CALENDLY_URL, '_blank');
}