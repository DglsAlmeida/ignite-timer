import { useFormContext } from 'react-hook-form'
import { useCycle } from '../../../context/Cycle/CycleProvider'
import * as S from './styles'

const NewCycleForm = () => {
  const { activeCycle } = useCycle()
  const { register } = useFormContext()

  return (
    <S.FormContainer>
      <S.Label htmlFor="task">Vou trabalhar em</S.Label>
      <S.TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <S.Datalist id="task-suggestions">
        <S.Option value="Projeto 1"></S.Option>
        <S.Option value="Projeto 2"></S.Option>
        <S.Option value="Projeto 3"></S.Option>
        <S.Option value="Banana"></S.Option>
      </S.Datalist>

      <S.Label htmlFor="task">durante</S.Label>
      <S.MinutesAmountInput
        id="task"
        type="number"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />

      <span>minutos.</span>
    </S.FormContainer>
  )
}

export default NewCycleForm
