import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Button, ChakraProvider } from '@chakra-ui/react';

import thema from './theme/theme';
import { Router } from './router/Router';

function App() {
  return (
    <ChakraProvider theme={thema}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
