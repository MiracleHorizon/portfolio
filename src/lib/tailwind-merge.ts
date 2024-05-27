import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const mergeCn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
