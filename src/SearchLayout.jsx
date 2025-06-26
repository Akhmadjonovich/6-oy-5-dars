import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import mockProducts from '../components/MockProducts'

const SearchLayout = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Products
        products={mockProducts}
        searchTerm={searchTerm}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
    </div>
  )
}

export default SearchLayout
