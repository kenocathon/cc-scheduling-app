import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#35a4f2',
      main: '#126eb0',
      dark: '#003459',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ced4da',
      main: '#adb5bd',
      dark: '#6c757d'
    }
  }
})

export default theme;