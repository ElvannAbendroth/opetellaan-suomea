'use client'

import Image from 'next/image'
import Link from 'next/link'
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
          className={`rounded-lg px-3 py-2 text-sm   ${pathname === '/about' ? 'bg-border/20' : 'hover:text-primary'}`}
          href="/about"
        >
          about
        </Link>
        <Link
          className={`rounded-lg px-3 py-2 text-sm   ${pathname === '/verbs' ? 'bg-border/20' : 'hover:text-primary'}`}
          href="/verbs"
        >
          verbs
        </Link>
      </div>
    </div>
  )
}

export default Navbar
