'use client'
import '@/styles/globals.css'
import { Lato } from 'next/font/google'
import { siteConfig } from '@/lib/config'
import { usePathname } from 'next/navigation'
// import { Navbar } from '@/components/Navbar'
// import SessionProvider from '@/components/SessionProvider'
// import { getServerSession } from 'next-auth/next'
// import { options } from '@/lib/auth'
// import { UserProvider } from '@/components/UserProvider'
// import { Toaster } from '@/components/ui/Toaster'
// import { ThemeProvider } from '@/components/ThemeProvider'
// import ThemedHtml from '@/components/ThemedHtml'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@ui/ui/Button'
import { subtle } from 'crypto'
import { cn } from '@lib/utils'

const lato = Lato({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.href }],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <html lang="en" className="h-full">
      <body className={`min-h-screen flex flex-col align-middle items-stretch `}>
        {/* <Navbar /> */}

        <div className="flex justify-between px-6 py-4 border-b-border border-[1px]">
          <Link href="/" className="flex items-center gap-3  ">
            <Image src="/opetellaan-suomea-logo-1.svg" width={40} height={40} alt="Logo" />
            <p className="hidden sm:block font-display text-xl font-bold text-primary">Opetellaan Suomea</p>
          </Link>
          <div className="flex gap-2">
            <Link
              className={cn(buttonVariants({ variant: 'subtle', size: 'sm' }), `${pathname === '/' && 'bg-border'}`)}
              href="/"
            >
              present
            </Link>
            <Link
              href="/past"
              className={cn(
                buttonVariants({ variant: 'subtle', size: 'sm' }),
                `${pathname === '/past' && 'bg-border'}`
              )}
            >
              past
            </Link>
          </div>
        </div>

        <div className="flex-grow">
          <main className="max-w-content w-content mx-auto pt-10 pb-10 px-4 sm:px-8">{children}</main>
        </div>
        <footer className="p-8 pb-10 ">
          <p className="typo-p text-sm text-center text-muted">
            Opetellaan Suomea App created with NextJS 13 & Tailwind by Oodri. Checkout the project on{' '}
            <a className="typo-a" href="https://github.com/ElvannAbendroth/" target="_blank">
              Github
            </a>
          </p>
        </footer>
        {/* <Toaster /> */}
      </body>
    </html>
  )
}
