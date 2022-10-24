import { ReactNode } from 'react'

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

export interface CycleState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export interface ICycleContext {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  cycles: Cycle[]
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  handleCreateNewCycle: (data: any) => void
  handleInterruptCycle: () => void
}
