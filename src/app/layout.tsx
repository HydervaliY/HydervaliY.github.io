import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hydervali Yalamkur — Portfolio',
  description: 'Cloud • ML • Full‑Stack. High‑impact systems and measurable outcomes.',
  metadataBase: new URL('https://example.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="mx-auto max-w-6xl px-4">
          <header className="flex items-center justify-between py-6">
            <Link href="/" className="font-semibold">Hydervali Yalamkur</Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/projects">Projects</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/about">About</Link>
              <Link href="/writing">Writing</Link>
              <a href="mailto:hyalamkur1@student.gsu.edu">Contact</a>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="py-12 text-sm opacity-70">
            © {new Date().getFullYear()} Hydervali Yalamkur • Atlanta, GA
          </footer>
        </div>
      </body>
    </html>
  )
}
