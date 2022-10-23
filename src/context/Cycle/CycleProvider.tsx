import { useContext, useState } from 'react'
import { CycleContext } from './CycleContext'
import { Cycle, ICycleProviderProps } from './interfaces'

export const CycleProvider = ({ children }: ICycleProviderProps) => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const markCurrentCycleAsFinished = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  const setSecondsPassed = (seconds: number) => {
    setAmountSecondsPassed(seconds)
  }

  return (
    <CycleContext.Provider
      value={{
        activeCycle,
        cycles,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        setActiveCycleId,
        setCycles,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}

export const useCycle = () => useContext(CycleContext)
