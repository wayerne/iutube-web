import {createTheme} from '@mui/material/styles'

export const theme = createTheme({
    palette: {
      primary: {
        main: '#ddcc33',
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        contrastText: '#ffcc00',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });
