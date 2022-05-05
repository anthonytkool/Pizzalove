import React from 'react'
import styled from 'styled-components'
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from '../FoodDialog/FoodDialog'
import { formatPrice } from '../Data/FoodData'

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 76px;
  width: 340px;
  background-color: white;
  height: calc(100% - 76px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
`
const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`
const OrderContainer = styled.div`
padding: 10px 0px;
border-bottom: 1px solid grey
`
const OrderItem = styled.div`
padding: 10px 0px;
display: grid;
grid-template-columns: 20px 150px 20px 60px;
justify-content: space-between;
`

export const Order = ({ orders }) => {
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <OrderContent>Your Order is Empty</OrderContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your Order:</OrderContainer>
          {orders.map(order => (
            <OrderContainer>
              <OrderItem>
                <div>1</div>
                <div>{order.name}</div>
                <div />
                <div>{formatPrice(order.price)}</div>
              </OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>CHECK OUT</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  )
}