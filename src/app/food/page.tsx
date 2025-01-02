'use client'

import { foodsWords, foodSentences } from '@lib/data'
import { Noun, Sentence } from '@lib/types'
import { Icons } from '@ui/Icons'
import { Scoreboard } from '@ui/Scoreboard'
import { Button } from '@ui/ui/Button'
import { Input } from '@ui/ui/Input'
import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react'

const initialSentence: Sentence = {
  sentence: '',
  english: '',
  answer: [''],
  nouns: [''],
  explanation: '',
}

const initialWord: Noun = {
  nominative: {
    singular: '',
    plural: '',
  },
  english: '',
  root: '',
  genitive: '',
  partitive: {
    singular: '',
    plural: '',
  },
  inessive: {
    singular: '',
    plural: '',
  },
  elative: {
    singular: '',
    plural: '',
  },
  illative: {
    singular: '',
    plural: '',
  },
  adessive: {
    singular: '',
    plural: '',
  },
  ablative: {
    singular: '',
    plural: '',
  },
  allative: {
    singular: '',
    plural: '',
  },
  essive: {
    singular: '',
    plural: '',
  },
  translative: {
    singular: '',
    plural: '',
  },
}

export default function Page() {
  const timeout = 500

  const [sentence, setSentence] = useState<Sentence>(initialSentence)
  const [word, setWord] = useState<Noun>(initialWord)
  const [showAnswer, setShowAnswer] = useState(false)
  const [score, setScore] = useState({ success: 0, skipped: 0, missed: 0 })
  const [input, setInput] = useState('')
  const [buttonColor, setButtonColor] = useState('bg-primary')
  const [inputBorderColor, setInputBorderColor] = useState('focus-visible:ring-muted/50')

  const getRandomSentence = () => {
    const i = Math.floor(Math.random() * foodSentences.length)
    setSentence(foodSentences[i])
    return foodSentences[i]
  }

  const getRandomWord = (sentence: Sentence) => {
    const i = Math.floor(Math.random() * sentence.nouns.length)
    const randomWord = sentence.nouns[i]
    const foundWord = foodsWords.find(word => word.nominative.singular === randomWord)
    if (!foundWord) {
      throw new Error(`Word "${randomWord}" not found in foodsWords`)
    }
    setWord(foundWord)
  }

  const getRandomExercise = () => {
    setInput('')
    setShowAnswer(false)
    const sentence = getRandomSentence()
    getRandomWord(sentence)
  }

  const getAnswer = (word: Noun, sentence: Sentence) => {
    const sentenceAnswer = sentence.answer

    return 'hello'
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSkip = () => {
    getRandomExercise()
    setScore({ ...score, skipped: score.skipped + 1 })
  }

  const handleSuccess = () => {
    setScore({ ...score, success: score.success + 1 })
    setButtonColor('bg-secondary')
    setInputBorderColor('focus-visible:ring-secondary/50')
    setTimeout(() => {
      setButtonColor('bg-primary')
      setInputBorderColor('focus-visible:ring-muted/50')
    }, timeout)
    getRandomExercise()
  }

  const handleMissed = () => {
    setScore({ ...score, missed: score.missed + 1 })
    setButtonColor('bg-danger')
    setInputBorderColor('focus-visible:ring-danger/50')
    setTimeout(() => {
      setButtonColor('bg-primary')
      setInputBorderColor('focus-visible:ring-muted/50')
    }, timeout)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    if (input.toLowerCase()) {
      handleSuccess()
    } else if (input === '') {
      alert('Please provide an answer!')
    } else {
      handleMissed()
    }
  }

  useEffect(() => {
    getRandomExercise()
  }, [])

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <span></span>
        <div className="flex gap-2">
          <p onClick={() => setInput(input.concat('ä'))} className="flex">
            <span className="cursor-pointer hover:bg-border/30 transition-all text-sm text-center bg-input border-border border-[1px] rounded-lg py-2 px-3">
              ä
            </span>
          </p>
          <p onClick={() => setInput(input.concat('ö'))} className="flex">
            <span className="cursor-pointer hover:bg-border/30 transition-all text-sm text-center bg-input border-border border-[1px] rounded-lg py-2 px-3">
              ö
            </span>
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-lg border-border border-[1px] ">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-2">
            <p className="typo-p text-lg italic text-muted">{sentence.sentence}</p>
            <h3 className="typo-h3 capitalize">{word.nominative.singular}</h3>
          </div>
          <div>
            <Button variant="ghost" size="sm" type="button" onClick={e => handleSkip()}>
              <Icons.refresh size={20} />
            </Button>
          </div>
        </div>

        <Input
          className={`${inputBorderColor}`}
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder={word.nominative.singular}
        />

        <Button type="submit" variant="primary" className={`transition-all ${buttonColor}`}>
          <Icons.send size={20} />
          submit
        </Button>

        {!showAnswer ? (
          <p onClick={() => setShowAnswer(true)} className="text-sm underline text-tertiary cursor-pointer">
            see answer
          </p>
        ) : (
          <p className="text-sm text-muted">
            <span className="font-bold">answer: </span>
            answer
          </p>
        )}
      </form>
      <Scoreboard score={score} />

      <div className="flex flex-col gap-4 bg-white p-6 rounded-lg border-border border-[1px]">
        <h3 className="typo-h3">Word Info</h3>
        <div className="">
          <p>Nominative: {word.nominative.singular}</p>
          <p>English: {word.english}</p>
          <p>Translation: {sentence.english}</p>
          <p>Case: {sentence.answer.join(', ')} </p>
          <p>Answer: {getAnswer(word, sentence)}</p>
        </div>
      </div>
    </div>
  )
}
