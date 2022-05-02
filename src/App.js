import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Navbar } from './Navbar/Navbar'

const GlobayStyle = createGlobalStyle`
body{
  margin: 0;
  font-family: 'Radio Canada', sans-serif;
}
h1, h2, h3 {
  font-family: 'Libre Bodoni', serif;
}
`

function App() {
  return (
    <>
      <GlobayStyle />
      <Navbar />
    </>
  )
}

export default App
