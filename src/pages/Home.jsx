import React, { useState } from 'react'
import Hero from '../components/Hero'
import Products from '../components/Products'
import mockProducts from '../components/MockProducts'

const Home = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  return (
    <div>
        <Hero products={mockProducts} handleBrandChange={setSelectedBrand}/>
        <Products products={mockProducts} selectedBrand={selectedBrand}/>
    </div>
  )
}

export default Home