import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@mantine/core/styles.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { MantineProvider, Container } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <MantineProvider>
        <Container>
        <App />
      </Container>
      </MantineProvider>
    </Router>
  </React.StrictMode>,
)
