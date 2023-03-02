import React from 'react';
import Router from './shared/Router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import {
  FlexRow,
  FlexRowBetween,
  FlexCol,
  CL,
  FS,
  DarkBlur,
  Shadow,
} from './style/Theme';
const queryClient = new QueryClient();

function App() {
  const theme = {
    FlexRow,
    FlexRowBetween,
    FlexCol,
    CL,
    FS,
    DarkBlur,
    Shadow,
  };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
