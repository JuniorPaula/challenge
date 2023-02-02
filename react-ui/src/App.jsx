import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import MainPage from './components/MainPage'
import './App.css'

function App() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </React.Fragment>
    )
}

export default App
