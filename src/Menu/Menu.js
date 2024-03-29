import React from 'react'
import styled from 'styled-components'
import { foods } from '../Data/FoodData'
import { FoodGrid, Food, FoodLabel } from './FoodGrid'
import { formatPrice } from '../Data/FoodData'

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 10px;
  color: #black;
`

export const Menu = ({ setOpenFood }) => {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map((food) => (
              <Food
                img={food.img}
                onClick={() => {
                  setOpenFood(food)
                }}
              >
                <FoodLabel>
                  <div>{food.name}</div>
                </FoodLabel>
                <br />
                <h4>{formatPrice(food.price)}</h4>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  )
}
