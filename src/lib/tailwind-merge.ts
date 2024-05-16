import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const mergeCn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
