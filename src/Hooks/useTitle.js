import { useEffect } from "react";

export const useTitle = ({openFood, orders}) =>{
    useEffect(() =>{
        if(openFood){
            document.title = openFood.name
        }else{
            document.title = orders.length === 0 ? `Any Delicious Food?`:
            `${orders.length} items in your orders`
        }
    })
}