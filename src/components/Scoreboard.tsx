import { FC, useState, useEffect } from 'react'

type Score = {
  success: number
  skipped: number
  missed: number
}

interface ScoreboardProps {
  score: Score
}

export const Scoreboard: FC<ScoreboardProps> = ({ score }) => {
  const timeout = 500
  const [currentScore, setCurrentScore] = useState(score)
  const [highlightSuccess, setHighlightSuccess] = useState(false)
  const [highlightSkipped, setHighlightSkipped] = useState(false)
  const [highlightMissed, setHighlightMissed] = useState(false)

  useEffect(() => {
    if (score.success > currentScore.success) {
      setCurrentScore(score)
      setHighlightSuccess(true)
      setTimeout(() => {
        setHighlightSuccess(false)
      }, timeout)
    }

    if (score.skipped > currentScore.skipped) {
      setCurrentScore(score)
      setHighlightSkipped(true)
      setTimeout(() => {
        setHighlightSkipped(false)
      }, timeout)
    }

    if (score.missed > currentScore.missed) {
      setCurrentScore(score)
      setHighlightMissed(true)
      setTimeout(() => {
        setHighlightMissed(false)
      }, timeout)
    }
  }, [score, currentScore])

  return (
    <div className="flex flex-col gap-4 bg-white p-6 rounded-lg border-border border-[1px]">
      <h3 className="typo-h3">Score</h3>
      <div className="flex justify-around text-3xl">
        <div
          className={`transition-all flex flex-col gap-2 items-center ${
            highlightSuccess ? 'text-secondary scale-105' : ''
          }`}
        >
          <span className="font-bold">{score.success}</span>
          <span className={`text-sm text-gray-500 ${highlightSuccess ? 'text-secondary' : ''}`}>Success</span>
        </div>
        <div
          className={`transition-all flex flex-col gap-2 items-center ${
            highlightSkipped ? 'text-muted scale-105' : ''
          }`}
        >
          <span className="font-bold">{score.skipped}</span>
          <span className={`text-sm text-gray-500 ${highlightSkipped ? 'text-muted' : ''}`}>Skipped</span>
        </div>
        <div
          className={`transition-all flex flex-col gap-2 items-center ${
            highlightMissed ? 'text-danger scale-105' : ''
          }`}
        >
          <span className="font-bold">{score.missed}</span>
          <span className={`text-sm text-gray-500 ${highlightMissed ? 'text-danger' : ''}`}>Missed</span>
        </div>
      </div>
    </div>
  )
}
