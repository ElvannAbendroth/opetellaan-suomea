import { FC } from 'react'

type Score = {
  success: number
  skipped: number
  missed: number
}

interface ScoreboardProps {
  score: Score
}

export const Scoreboard: FC<ScoreboardProps> = ({ score }) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-6 rounded-lg border-border border-[1px]">
      <h3 className="typo-h3">Score</h3>
      <div className="flex justify-around  text-3xl">
        <div className="flex flex-col gap-2 items-center">
          <span className="font-bold">{score.success}</span>
          <span className="text-sm text-gray-500">Success</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="font-bold">{score.skipped}</span>
          <span className="text-sm text-gray-500">Skipped</span>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="font-bold">{score.missed}</span>
          <span className="text-sm text-gray-500">Missed</span>
        </div>
      </div>
    </div>
  )
}
