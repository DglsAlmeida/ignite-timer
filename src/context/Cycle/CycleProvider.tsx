import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect, useReducer, useState } from 'react'
import { ActionTypes } from '../../reducers/cycles/actionsTypes'
import { cyclesReducer } from '../../reducers/cycles/reducer'
import { CycleContext } from './CycleContext'
import { Cycle, CycleState, ICycleProviderProps } from './interfaces'

const initialState: CycleState = {
  cycles: [],
  activeCycleId: null,
}

export const CycleProvider = ({ children }: ICycleProviderProps) => {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    initialState,
    () => {
      const storedStateAsJson = localStorage.getItem(
        '@ignite-timer:cycles-state',
      )

      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }
    },
  )

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@ignite-timer:cycles-state', stateJSON)
  }, [cyclesState])

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const markCurrentCycleAsFinished = () => {
    dispatch({
      type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      payload: activeCycleId,
    })
  }

  const handleCreateNewCycle = (data: any) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch({ type: ActionTypes.ADD_NEW_CYCLE, payload: newCycle })
    setSecondsPassed(0)
  }

  const handleInterruptCycle = () => {
    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: activeCycleId,
    })
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
        handleInterruptCycle,
        handleCreateNewCycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}

export const useCycle = () => useContext(CycleContext)
