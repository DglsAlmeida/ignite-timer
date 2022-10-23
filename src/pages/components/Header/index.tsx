import * as S from './styles'
import logoIgnite from '../../../assets/logo-ignite.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <S.HeaderContainer>
      <img src={logoIgnite} alt="" />
      <S.Nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="history">
          <Scroll size={24} />
        </NavLink>
      </S.Nav>
    </S.HeaderContainer>
  )
}

export default Header
