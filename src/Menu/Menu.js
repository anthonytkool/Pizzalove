import React from 'react'
import styled from 'styled-components'
import { foods } from '../Data/FoodData'
import { FoodGrid, Food, FoodLabel } from './FoodGrid'

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 10px;
  color: #black;
`

export const Menu = () => {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map((food) => (
              <Food img={food.img}>
                <FoodLabel>{food.name}</FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  )
}
