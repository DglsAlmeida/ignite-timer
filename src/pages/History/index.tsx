import React from 'react'
import * as S from './styles'

const History: React.FC = () => {
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
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <S.Status statusColor="yellow">Concluído</S.Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <S.Status statusColor="yellow">Concluído</S.Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <S.Status statusColor="yellow">Concluído</S.Status>
              </td>
            </tr>
          </tbody>
        </S.Table>
      </S.HistoryList>
    </S.HistoryContainer>
  )
}

export default History
