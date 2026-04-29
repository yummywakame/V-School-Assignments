import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import BigDataProvider from './context/BigDataProvider.js'
import ThemeProvider from './context/ThemeProvider.js'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <BigDataProvider>
        <App />
      </BigDataProvider>
    </BrowserRouter>
  </ThemeProvider>
)
