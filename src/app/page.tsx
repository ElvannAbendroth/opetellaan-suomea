'use client'

const verbs = [
  {
    infinitive: 'rakastaa',
    english: 'to love',
    verbtype: 1,
    present: {
      minä: 'rakastan',
      sinä: 'rakastat',
      hän: 'rakastaa',
      me: 'rakastamme',
      te: 'rakastatte',
      he: 'rakastavat',
    },
  },
  {
    infinitive: 'syödä',
    verbtype: 2,
    english: 'to eat',
    present: {
      minä: 'syön',
      sinä: 'syöt',
      hän: 'syö',
      me: 'syömme',
      te: 'syötte',
      he: 'syövät',
    },
  },
  {
    infinitive: 'haluta',
    verbtype: 4,
    english: 'to want',
    present: {
      minä: 'haluan',
      sinä: 'haluat',
      hän: 'halua',
      me: 'haluamme',
      te: 'haluatte',
      he: 'haluavat',
    },
  },
  {
    infinitive: 'olla',
    verbtype: 4,
    english: 'to be',
    present: {
      minä: 'olen',
      sinä: 'olet',
      hän: 'on',
      me: 'olemme',
      te: 'olette',
      he: 'olevat',
    },
  },
]

import { Icons } from '@ui/Icons'
import { Button } from '@ui/ui/Button'
import { Input } from '@ui/ui/Input'
import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react'

export default function Home() {
  const [score, setScore] = useState({ success: 0, skipped: 0, missed: 0 })
  const [verb, setVerb] = useState(null)
  const [pronoun, setPronoun] = useState('')
  const [input, setInput] = useState('')

  const getRandomVerb = (verbs: Array<any>) => {
    const i = Math.floor(Math.random() * verbs.length)
    setVerb(verbs[i])
  }

  const getRandomPronoun = () => {
    const pronouns = ['minä', 'sinä', 'hän', 'me', 'te', 'he']
    const i = Math.floor(Math.random() * pronouns.length)
    setPronoun(pronouns[i])
  }

  const getRandomExercise = () => {
    setInput('')
    getRandomPronoun()
    getRandomVerb(verbs)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSkip = () => {
    getRandomExercise()
    setScore({ ...score, skipped: score.skipped + 1 })
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    if (verb!['present'][pronoun] === input) {
      setScore({ ...score, success: score.success + 1 })
      // alert('Correct!')
      getRandomExercise()
    } else {
      setScore({ ...score, missed: score.missed + 1 })
      alert('Incorrect, try again!')
    }
  }
  useEffect(() => {
    getRandomExercise()
  }, [])

  return (
    <main className="flex flex-col gap-6 px-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-lg border-border border-[1px] ">
        <p className="italic text-sm text-muted">present tense</p>
        <h3 className="typo-h3">{pronoun}</h3>
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder={(verb && verb['infinitive']) || ''}
        />

        <Button type="submit" variant="primary">
          <Icons.send size={20} />
          submit
        </Button>
        <Button type="button" onClick={e => handleSkip()}>
          <Icons.refresh size={20} />
          skip
        </Button>
      </form>
      <div className="flex flex-col gap-4 bg-white p-6 rounded-lg border-border border-[1px]">
        <h3 className="typo-h3">Score</h3>
        <div className="flex justify-around font-bold text-3xl">
          <span>{score.success}</span>
          <span>{score.skipped}</span>
          <span>{score.missed}</span>
        </div>
        <div className="flex justify-around">
          <span>success</span>
          <span>skipped</span>
          <span>missed</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-white p-6 rounded-lg border-border border-[1px]">
        <h3 className="typo-h3">Verb Info</h3>
        <div className="">
          <p>Verb: {verb && verb['infinitive']}</p>
          <p>English: {verb && verb['english']}</p>
          <p>Verbtype: {verb && verb['verbtype']}</p>
        </div>
      </div>
    </main>
  )
}
