import React from 'react'
import styled from 'styled-components'
import { pizzaRed } from '../Styles/Colors'
import { Title } from '../Styles/Title'

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
`
const Logo = styled(Title)`
  font-size: 40px;
  color: #f9f902;
  text-shadow: 1px 5px 4px #380502;
`
export const Navbar = () => {
  return (
    <NavbarStyled>
      <Logo>
        Pizza Lover{' '}
        <span role='img' aria-label='pizza slice'>
          🍕
        </span>
      </Logo>
    </NavbarStyled>
  )
}
