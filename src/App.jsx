import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavarComponent from './components/navarComponent'
import HomeScreen from './screens/HomeScreen'
import ProductsScreen from './screens/ProductsScreen'
import FooterComponent from './components/FooterComponent';
import TeamScreen from './screens/TeamScreen';
import RoadmapScreen from './screens/RoadmapScreen';
import ComprarScreen from './screens/ComprarScreen';
import MintearScreen from './screens/MintearScreen';

function App() {

  return (
    <div className='wrapper'>
      <Router>
        <NavarComponent/>
          <Routes>
            <Route path='/' exact element={<HomeScreen/>}/>
            <Route path='/productos' element={<ProductsScreen/>}/>
            <Route path='/equipo' element={<TeamScreen/>}/>
            <Route path='/ruta' element={<RoadmapScreen/>}/>
            <Route path='/comprar' element={<ComprarScreen/>}/>
            <Route path='/mintear' element={<MintearScreen/>}/>
          </Routes>
        <FooterComponent/>
      </Router>
    </div>
  )
}

export default App
