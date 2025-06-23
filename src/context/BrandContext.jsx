import React, { createContext, useState } from 'react'

export let BrandContext = createContext()

const BrandProvider = ({children}) => {
    let [selectedBrand , setSelectedBrand] = useState("All")
  return (
    <BrandContext.Provider value={{selectedBrand, setSelectedBrand}}>
        {children}
    </BrandContext.Provider>
  )
}

export default BrandProvider