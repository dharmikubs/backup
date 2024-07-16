import React from 'react'
import AppRouter from './Router/AppRouter'
import { BrowserRouter, Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </BrowserRouter>
    </>
  )
}

export default App