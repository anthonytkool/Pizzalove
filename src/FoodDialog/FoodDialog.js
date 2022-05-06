import React from 'react'
import styled from 'styled-components'
import { FoodLabel } from '../Menu/FoodGrid'
import { pizzaRed } from '../Styles/Colors'
import { Title } from '../Styles/Title'
import { formatPrice } from '../Data/FoodData'
import { QuantityInput } from './QuantityInput'
import { useQuantity } from '../Hooks/useQuantity'
import { Toppings } from './Toppings'
import { useTopping } from '../Hooks/useTopping'

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 90px;
  z-index: 5;
  max-height: calc(100% - 120px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`
export const DialogContent = styled.div`
  min-height: 100px;
  overflow: auto;
  padding: 0px 40px;
  padding-bottom: 80px;
`
export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`
export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: #fff;
  height: 20px;
  font-size: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${pizzaRed};
`

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`
const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
`
const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  font-size: 20px;
  padding: 5px 40px;
`
const pricePerTopping = 0.50;
export const getPrice = (order) => {
  return order.quantity * (order.price + order.toppings.filter(t => t.checked).length * pricePerTopping)
}
const hasTopping = (food) => {
  return food.section === 'Pizza'
}

export const FoodDialogContainer = ({
  openFood,
  setOpenFood,
  setOrders,
  orders,
}) => {
  const quantity = useQuantity(openFood && openFood.quantity)
  const topping = useTopping(openFood.toppings)
  function close() {
    setOpenFood()
  }
  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: topping.toppings,
  }

  const addToOrder = () => {
    setOrders([...orders, order])
    close()
  }

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity} />
          {hasTopping(openFood) && (
            <>
              <h3>Would you like topping?</h3>
              <Toppings {...topping} />
            </>
          )}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>
            ADD To Order : {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export const FoodDialog = (props) => {
  if (!props.openFood) return null
  return <FoodDialogContainer {...props} />
}
