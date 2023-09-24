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
import Navbar from '@ui/Navbar'

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
  return (
    <html lang="en" className="h-full">
      <body className={`min-h-screen flex flex-col align-middle items-stretch `}>
        <Navbar />

        <div className="flex-grow">
          <main className="max-w-content w-content mx-auto pt-6 pb-10 px-4 sm:px-8 ">{children}</main>
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
