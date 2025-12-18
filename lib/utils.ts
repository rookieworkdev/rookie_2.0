import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Section utility classes for consistent borders and padding
export const horizontalPadding = 'px-8'

export const sectionWrapper = (background?: string) => cn('border-border border-t', background)

export const sectionContainer = (
  background?: string,
  variant: 'default' | 'no-padding' = 'default'
) => {
  const baseClasses = cn('border-border', background, 'mx-auto max-w-7xl border-r border-l')
  const paddingClasses = variant === 'no-padding' ? '' : `${horizontalPadding} py-20`

  return cn(baseClasses, paddingClasses)
}
