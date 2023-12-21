import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import App from './App/App.tsx';

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme='dark'>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </MantineProvider>
  </React.StrictMode>
);
