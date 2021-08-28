import { createTheme } from '@material-ui/core'
import { blue, red } from '@material-ui/core/colors'

const theme = createTheme({
  palette: {
    primary: {
      light: blue[200],
      main: blue[500],
      dark: blue[900]
    },
    secondary: {
      light: red[400],
      main: red[500],
      dark: red[800]
    }
  }
})
export default theme
