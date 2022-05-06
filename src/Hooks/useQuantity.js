import { useState } from "react";

export const useQuantity = (defaultQualtity) =>{
    const [value, setValue] = useState(defaultQualtity || 1)

    const onChange = (e) => {
    if(!(+e.target.value >=1)){
        setValue(1); 
        return;
    }
    setValue(+e.target.value)
    }
    
return {
        value,
        setValue,
        onChange
    }
}
