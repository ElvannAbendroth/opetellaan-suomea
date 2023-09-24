'use client'
import { cn } from '@lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from './ui/Button'
import { usePathname } from 'next/navigation'

function Navbar() {
  const pathname = usePathname()
  return (
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
          className={cn(buttonVariants({ variant: 'subtle', size: 'sm' }), `${pathname === '/past' && 'bg-border'}`)}
        >
          past
        </Link>
      </div>
    </div>
  )
}

export default Navbar
