import { Logo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import Link from 'next/link'

const discoveryLinks = [
  {
    title: 'För företag',
    href: '#',
  },
  {
    title: 'För jobbsökande',
    href: '#',
  },
  {
    title: 'Om oss',
    href: '#',
  },
  {
    title: 'Integritetspolicy',
    href: '#',
  },
]

export default function FooterSection() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Half - Logo and Tagline */}
          <div className="space-y-4">
            <Link href="/" aria-label="go home" className="block size-fit">
              <Logo />
            </Link>
            <p className="text-xl font-medium">
              Matchar unga talanger
              <br />
              med företag
            </p>
          </div>

          {/* Right Half - Two Columns */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Upptäck Rookie Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Upptäck Rookie</h3>
              <nav className="flex flex-col space-y-3">
                {discoveryLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-white/70 transition-colors duration-150 hover:text-white"
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Kontakt Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Kontakt</h3>
              <div className="flex flex-col space-y-3 text-white/70">
                <div>Drottninggatan 32, 8tr, 111 51 Stockholm</div>
                <div>info@rookiework.se</div>
                <div>010 129 60 00</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Theme Toggle */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
          <span className="text-sm text-white/50">
            © {new Date().getFullYear()} Rookie, All rights reserved
          </span>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}
