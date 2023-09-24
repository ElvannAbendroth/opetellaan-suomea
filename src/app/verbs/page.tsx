'use client'

import { verbs } from '@lib/data'
import { cn } from '@lib/utils'

import { Icons } from '@ui/Icons'
import { Scoreboard } from '@ui/Scoreboard'
import { Button, buttonVariants } from '@ui/ui/Button'
import { Input } from '@ui/ui/Input'
import Link from 'next/link'
import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react'

export default function Home() {
  const [filter, setFilter] = useState({ tense: 'present' })
  const [showAnswer, setShowAnswer] = useState(false)
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
    setShowAnswer(false)
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
    if (verb![filter.tense][pronoun] === input.toLowerCase()) {
      setScore({ ...score, success: score.success + 1 })
      // alert('Correct!')
      getRandomExercise()
    } else if (input === '') {
      alert('Please provide an answer!')
    } else {
      setScore({ ...score, missed: score.missed + 1 })
      alert(`Incorrect, try again!`)
    }
  }

  useEffect(() => {
    getRandomExercise()
  }, [])

  return (
    <main className="flex flex-col gap-6 px-2">
      <div className="flex gap-2">
        <Button
          onClick={() => setFilter({ ...filter, tense: 'present' })}
          variant="subtle"
          size="sm"
          className={`${filter.tense === 'present' && 'bg-border'}`}
        >
          present
        </Button>
        <Button
          onClick={() => setFilter({ ...filter, tense: 'past' })}
          variant="subtle"
          size="sm"
          className={`${filter.tense === 'past' && 'bg-border'}`}
        >
          past
        </Button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-lg border-border border-[1px] ">
        <p className="text-sm">
          {verb && verb['infinitive']},&nbsp; <span className="italic text-muted">{filter.tense} tense</span>
        </p>
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
        {!showAnswer ? (
          <p onClick={() => setShowAnswer(true)} className="text-sm underline text-tertiary cursor-pointer">
            see answer
          </p>
        ) : (
          <p className="text-sm text-muted">
            <span className="font-bold">answer: </span>
            {verb && verb![filter.tense][pronoun]}
          </p>
        )}
      </form>
      <Scoreboard score={score} />

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
