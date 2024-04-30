import { Box } from '@mui/material';
import React from 'react';
import Header from './components/sections/header/header';
import RouterCom from './routes';

export default function App() {
  return <Box>
      <Header />
      <RouterCom />
    </Box>;
  
}


