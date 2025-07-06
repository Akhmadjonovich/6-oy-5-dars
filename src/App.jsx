import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SelectedItems from './pages/SelectedItems';
import SelectedItemsProvider from './context/SelectedContext';
import BrandProvider from './context/BrandContext';
import Qollanma from './pages/Qollanma';
import ProductDetails from './pages/ProductDetails';
import AdollorgaElon from './pages/AdollorgaElon';
import FreeElon from './pages/FreeElon';
import Products from './components/Products';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]); // BO‘SH MASSIV

  const handleAddProduct = (newProduct) => {
    setProducts(prev => [newProduct, ...prev]);
  };

  return (
    <SelectedItemsProvider>
      <BrandProvider>
        <Router>
          <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <Routes>
            <Route path='/' element={<Home searchTerm={searchTerm} />} />
            <Route path='/products' element={<Products products={products} />} />
            <Route path='/SelectedItems' element={<SelectedItems />} />
            <Route path='/qollanma' element={<Qollanma />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/adollorgaElon' element={<AdollorgaElon />} />
            <Route path='/freeElon' element={<FreeElon onAdd={handleAddProduct} />} />
          </Routes>
        </Router>
      </BrandProvider>
      <ToastContainer />
    </SelectedItemsProvider>
  );
}

export default App;
