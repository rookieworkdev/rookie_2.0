import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        'bg-linear-to-r from-green-600 to-yellow-300 bg-clip-text pr-1 text-2xl font-black tracking-wide text-transparent italic',
        className
      )}
    >
      ROOKIE
    </span>
  )
}
