import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import BigDataProvider from './context/BigDataProvider.js'
import ThemeProvider from './context/ThemeProvider.js'

const container = document.getElementById('root')
const root = createRoot(container)
const baseUrl = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.BASE_URL) || "/"
const routerBase = baseUrl.endsWith("/") && baseUrl !== "/" ? baseUrl.slice(0, -1) : baseUrl

root.render(
  <ThemeProvider>
    <BrowserRouter basename={routerBase}>
      <BigDataProvider>
        <App />
      </BigDataProvider>
    </BrowserRouter>
  </ThemeProvider>
)
