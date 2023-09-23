'use client'

import { ChangeEvent, FormEventHandler, MouseEventHandler, useEffect, useState } from 'react'

export default function Home() {
  const [verb, setVerb] = useState(null)
  const [pronoun, setPronoun] = useState('')
  const [input, setInput] = useState('')

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

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    if (verb!['present'][pronoun] === input) {
      alert('Correct!')
      getRandomExercise()
    } else {
      alert('Incorrect, try again!')
    }
  }
  useEffect(() => {
    getRandomExercise()
  }, [])

  return (
    <main className="flex flex-col gap-6 p-4">
      <h1 className="text-3xl font-bold">Welcome to Opetellaan Suomea!</h1>
      <p>Conjugate those verbs in the present tense!</p>
      <div className="">
        <p>Verb: {verb && verb['infinitive']}</p>
        <p>English: {verb && verb['english']}</p>
        <p>Verbtype: {verb && verb['verbtype']}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <p>
          {pronoun} [{verb && verb['infinitive']}]
        </p>
        <input className="rounded-md" type="text" value={input} onChange={handleInputChange} />
        <button type="submit" className="bg-blue-500 text-white py-2 px-3 rounded-md ml-2">
          submit
        </button>
      </form>
      <button className="bg-gray-500 text-white py-2 px-3 rounded-md" onClick={() => getRandomExercise()}>
        skip
      </button>
    </main>
  )
}
