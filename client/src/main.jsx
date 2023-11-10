import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@mantine/core/styles.css';

import { MantineProvider, Container } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <MantineProvider>
      <Container>
       <App />
     </Container>
    </MantineProvider>
  </React.StrictMode>,
)
