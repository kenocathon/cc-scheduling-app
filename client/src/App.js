import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { ThemeProvider } from '@material-ui/core';
import theme from './themes/theme';


function App() {
  return (
   <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
   </BrowserRouter>
  );
}

export default App;
