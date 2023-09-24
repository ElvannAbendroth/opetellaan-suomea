/* eslint-disable react/no-unescaped-entities */
'use client'

import { Icons } from '@ui/Icons'
import Link from 'next/link'

const items = [
  { id: 1, label: 'Verbs', href: '/verbs', description: 'Practice verb conjugaisons in different tense.' },
  // More items...
]

export default function Home() {
  return (
    <main className="flex flex-col gap-6 px-2">
      <h2 className="typo-h2">About</h2>
      <p className="typo-p">
        Opetellaan Suomea is a language learning tool that allows you to practice Finnish, with a focus on grammar and
        conjugaisons.
      </p>
      <p className="typo-p">
        While language learning shouldn't be limited only to grammar practice, Finnish is an exceptionally difficult
        language to acquire due to the numerous and difficult conjugaisons.
      </p>

      <p className="typo-p">
        The idea behind this app is to allow conjugaisons to feel easier, and provide a way for students to really focus
        on improving these skills so they can more confidently use Finnish in real-world scenarios.
      </p>
      <p className="typo-p">Happy practicing!</p>
    </main>
  )
}
