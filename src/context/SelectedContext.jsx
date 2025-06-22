import React, { useState } from 'react'
import { createContext } from 'react'

export let SelectedContext = createContext();

const SelectedItemsProvider = ({children}) => {

    let [selectedItems , setSelectedItems] = useState([])
    
    let toggleSelect =(item) =>{
        let exist = selectedItems.find(i => i.id === item.id)
        if(exist){
            selectedItems(selectedItems.filter(i => i.id !== item.id))
        }else{
            setSelectedItems([...selectedItems , item])
        }
    };
    
  return (
    <SelectedContext.Provider value={{selectedItems , toggleSelect}}>
        {children}
    </SelectedContext.Provider>
  )
}

export default SelectedItemsProvider