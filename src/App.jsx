import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home/Home'
import './App.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home />
    </Router>
  )
}

export default App
