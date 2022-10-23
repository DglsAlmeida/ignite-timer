import React, { ReactNode } from 'react'

export type Cycle = {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export interface ICycleProviderProps {
  children: ReactNode
}

export interface ICycleContext {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  cycles: Cycle[]
  amountSecondsPassed: number
  setActiveCycleId: React.Dispatch<React.SetStateAction<string | null>>
  setCycles: React.Dispatch<React.SetStateAction<Cycle[]>>
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
}
