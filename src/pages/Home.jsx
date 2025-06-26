import React, { useState } from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import { BrandContext } from '../context/BrandContext'

import mockProducts from '../components/MockProducts'

const Home = ({searchTerm }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  
  return (
    <div>
        <Hero products={mockProducts} handleBrandChange={setSelectedBrand}/>
        <Products
        products={mockProducts}
        searchTerm={searchTerm}
        selectedBrand={selectedBrand}
      />
    </div>
  )
}

export default Home