import * as React from 'react';
import {ThemeProvider} from '@mui/material/styles'
import Button from '@mui/material/Button'
import {theme} from './theme/theme'
import Root from './routers/Roots'

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true)


  return <ThemeProvider theme={theme}>
    <Root />
  </ThemeProvider>;
};

export default App;
