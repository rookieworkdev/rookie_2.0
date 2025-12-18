'use client'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const menuItems = [
  { name: 'Månadens Rookie', href: '/manadens-rookie' },
  { name: 'För jobbsökande', href: '/for-jobbsokande' },
  { name: 'För företag', href: '/for-foretag' },
  { name: 'Lediga jobb', href: '/lediga-jobb' },
  { name: 'Om oss', href: '/om-oss' },
  { name: 'Inspiration', href: '/inspiration' },
]

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className={cn(
          'fixed z-20 w-full border-b border-white/10 transition-all duration-300',
          scrolled && 'bg-black/80 backdrop-blur-lg'
        )}
      >
        <div className="mx-auto max-w-7xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-8 lg:w-auto">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo />
              </Link>

              <div className="flex items-center gap-2 lg:hidden">
                <Button
                  variant="default"
                  size="icon"
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                >
                  {menuState ? <X className="size-6" /> : <Menu className="size-6" />}
                </Button>
              </div>

              <div className="hidden lg:block">
                <ul className="flex gap-6 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={cn(
                          'block duration-150',
                          scrolled
                            ? 'hover:text-foreground font-medium text-white/80 hover:text-white'
                            : 'font-medium text-white/80 hover:text-white'
                        )}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-fit">
                {/* Mobile: keep default theme styling (menu surface is light) */}
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0 md:w-fit lg:hidden">
                  <Button asChild variant="outline" size="sm">
                    <Link href="#">
                      <span>Logga in</span>
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/kontakt">
                      <span>Kontakta oss</span>
                    </Link>
                  </Button>
                </div>

                {/* Desktop: force “dark-mode” outline look even in light mode */}
                <div className="dark hidden w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0 md:w-fit lg:flex lg:items-center">
                  <Button asChild variant="outline" size="sm">
                    <Link href="#">
                      <span>Logga in</span>
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/kontakt">
                      <span>Kontakta oss</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
