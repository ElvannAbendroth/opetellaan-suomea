'use client'

import { verbs } from '@lib/data'
import { cn } from '@lib/utils'

import { Icons } from '@ui/Icons'
import { Scoreboard } from '@ui/Scoreboard'
import { Button, buttonVariants } from '@ui/ui/Button'
import { Input } from '@ui/ui/Input'
import Link from 'next/link'
import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react'
const items = [
  { id: 1, label: 'Verbs', href: '/verbs', description: 'Practice verb conjugaisons in different tense.' },
  // More items...
]

export default function Home() {
  return (
    <main className="flex flex-col gap-6 px-2">
      <h2 className="typo-h2">Exercises</h2>
      <ul role="list" className="space-y-3">
        {items.map(item => (
          <Link
            href="/verbs"
            key={item.id}
            className="overflow-hidden rounded-lg bg-white px-6 py-4 shadow flex gap-4 hover:scale-[102%] transition-all"
          >
            <div
              title="restore archive"
              className="h-12 w-12 flex justify-center items-center bg-primary hover:bg-primary-hover rounded-lg shadow transition-all"
            >
              <Icons.page className="cursor-pointer text-primary-foreground  transition-all" size={24} />
            </div>

            <div className="">
              <h2 className="typo-h4">{item.label}</h2>
              <p className="typo-p">{item.description}</p>
            </div>
          </Link>
        ))}
      </ul>
    </main>
  )
}
