import { Outlet } from 'react-router-dom'
import Header from '../pages/components/Header'
import * as S from './styles'

const DefaultLayout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  )
}

export default DefaultLayout
