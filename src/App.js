import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobayStyle = createGlobalStyle`
body{
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
      <h1>Pizza Love</h1>
      <p>Hello! Pizza Loverr</p>
    </>
  )
}

export default App
