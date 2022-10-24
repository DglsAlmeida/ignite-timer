import { differenceInSeconds } from 'date-fns'
import { useEffect } from 'react'
import { useCycle } from '../../../context/Cycle/CycleProvider'
import * as S from './styles'

const CountDown = () => {
  const {
    markCurrentCycleAsFinished,
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    setSecondsPassed,
  } = useCycle()

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(
            differenceInSeconds(new Date(), activeCycle.startDate),
          )
        }
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes} ${seconds}`
    } else {
      document.title = '00 00'
    }
  }, [minutes, seconds, activeCycle])

  return (
    <S.CountdownContainer>
      <S.Time>{minutes[0]}</S.Time>
      <S.Time>{minutes[1]}</S.Time>
      <S.Separator>:</S.Separator>
      <S.Time>{seconds[0]}</S.Time>
      <S.Time>{seconds[1]}</S.Time>
    </S.CountdownContainer>
  )
}

export default CountDown
