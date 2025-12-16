import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-2xl font-black tracking-wide text-transparent italic',
        className
      )}
    >
      ROOKIE
    </span>
  )
}
