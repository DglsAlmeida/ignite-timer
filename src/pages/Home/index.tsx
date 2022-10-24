import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { useCycle } from '../../context/Cycle/CycleProvider'
import CountDown from './CountDown'
import { INewCycleFormData } from './interfaces'
import NewCycleForm from './NewCycleForm'
import * as S from './styles'

export const newCycleFormValidationScheme = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no minimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

const Home = () => {
  const newCycleForm = useForm<INewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationScheme),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { activeCycle, handleCreateNewCycle, handleInterruptCycle } = useCycle()

  const { handleSubmit, watch, reset } = newCycleForm

  const createNewCycle = (data: INewCycleFormData) => {
    handleCreateNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <S.HomeContainer>
      <S.Form onSubmit={handleSubmit(createNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <CountDown />

        {activeCycle ? (
          <S.StopCountdownButton type="button" onClick={handleInterruptCycle}>
            <HandPalm size={24} />
            Interromper
          </S.StopCountdownButton>
        ) : (
          <S.StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </S.StartCountdownButton>
        )}
      </S.Form>
    </S.HomeContainer>
  )
}

export default Home
