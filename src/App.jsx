import { useState } from 'react'; // BU MUHIM
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SelectedItems from './pages/SelectedItems';
import SelectedItemsProvider from './context/SelectedContext';
import BrandProvider, { BrandContext } from './context/BrandContext';
import Qollanma from './pages/Qollanma';
import mockProducts from './components/MockProducts';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // BU QATOR KERAK

  return (
    <SelectedItemsProvider>
      <BrandProvider>
        <Router>
          <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <Routes>
            <Route path='/' element={<Home searchTerm={searchTerm} products={mockProducts} />}/> {/* searchTerm ni uzatyapmiz */}
            <Route path='/SelectedItems' element={<SelectedItems/>}/>
            <Route path='/qollanma' element={<Qollanma/>}/>
            <Route path='/product/:id' element={<ProductDetails/>}/>
          </Routes>
        </Router> 
      </BrandProvider>
    </SelectedItemsProvider>
  )
}

export default App;
