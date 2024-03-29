import styled from 'styled-components'
import { Title } from '../Styles/Title'

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-bottom: 40px;
`
export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 5px;
`

export const Food = styled.div`
  height: 150px;
  padding: 10px;
  color: #f8fb01;
  font-size: 30px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  border-radius: 7px;
  margin-top: 5px;
  transition-property: box-shadow margin-top filter;
  transition-duration: 0.1s;
  text-shadow: 1px 2px #ff0000;
  box-shadow: 0px 0px 2px 0px grey;
  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    margin-top: 0px;
    margin-bottom: 5px;
    box-shadow: 0px 5px 20px 0px grey;
  }
`
