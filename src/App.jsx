import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SelectedItems from './pages/SelectedItems';
import SelectedItemsProvider from './context/SelectedContext';

function App() {

  return (
    <SelectedItemsProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/SelectedItems' element={<SelectedItems/>}/>
          {/* <Route path='/post-ad' element={<PostAd/>}/> */}
        </Routes>
      </Router> 
    </SelectedItemsProvider>
  )
}

export default App
