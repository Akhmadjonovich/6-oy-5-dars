import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SelectedItems from './pages/SelectedItems';
import SelectedItemsProvider from './context/SelectedContext';
import { BrandContext } from './context/BrandContext';
import Qollanma from './pages/Qollanma';

function App() {

  return (
    <SelectedItemsProvider>
      <BrandContext>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/SelectedItems' element={<SelectedItems/>}/>
            <Route path='/qollanma' element={<Qollanma/>}/>
            {/* <Route path='/post-ad' element={<PostAd/>}/> */}
          </Routes>
        </Router> 
      </BrandContext>
    </SelectedItemsProvider>
  )
}

export default App
