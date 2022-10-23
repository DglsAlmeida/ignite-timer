import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CycleProvider } from './context/Cycle/CycleProvider'
import Router from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CycleProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Router />
        </BrowserRouter>
      </CycleProvider>
    </ThemeProvider>
  )
}
