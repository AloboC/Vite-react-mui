import React from 'react'
// ?...................... Authentication ..............................
import AuthProvider from './auth/AuthProvider'

// ?...................... Rutas ..............................
import AppRouter from './routers/AppRouter'

// ?...................... Modificador tema ............................
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Config/ThemeConfig'

import './App.css'

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <AppRouter />
        </div>
      </ThemeProvider>
    </AuthProvider>
  )
}
// ALC
export default App
