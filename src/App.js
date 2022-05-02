import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Navbar } from './Navbar/Navbar'
import { Banner } from './Banner/Banner'
import { Menu } from './Menu/Menu'

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
      <Banner />
      <Menu />
    </>
  )
}

export default App
