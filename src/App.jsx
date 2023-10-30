import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavarComponent from './components/navarComponent'
import HomeScreen from './screens/HomeScreen'
import ProductsScreen from './screens/ProductsScreen'
import FooterComponent from './components/FooterComponent';
import TeamScreen from './screens/TeamScreen';
import RoadmapScreen from './screens/RoadmapScreen';

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
          </Routes>
        <FooterComponent/>
      </Router>
    </div>
  )
}

export default App
