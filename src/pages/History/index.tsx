import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import React from 'react'
import { useCycle } from '../../context/Cycle/CycleProvider'
import * as S from './styles'

const History: React.FC = () => {
  const { cycles } = useCycle()

  return (
    <S.HistoryContainer>
      <h1>Meu histórico</h1>

      <S.HistoryList>
        <S.Table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <S.Status statusColor="green">Concluído</S.Status>
                  )}

                  {cycle.interruptedDate && (
                    <S.Status statusColor="red">Interrompido</S.Status>
                  )}

                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <S.Status statusColor="yellow">Em andamento</S.Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.HistoryList>
    </S.HistoryContainer>
  )
}

export default History
