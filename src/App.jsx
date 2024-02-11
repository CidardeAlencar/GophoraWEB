import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavarComponent from './components/navarComponent'
import HomeScreen from './screens/HomeScreen'
import NFTcollectibles from './screens/NFTcollectibles'
// import ProductsScreen from './screens/ProductsScreen'
import FooterComponent from './components/FooterComponent';
import TeamScreen from './screens/TeamScreen';
import RoadmapScreen from './screens/RoadmapScreen';
import PreguntasScreen from './screens/PreguntasScreen';
import SociosScreen from './screens/SociosScreen';
import ComprarScreen from './components/ComprarScreen';
// import MintearScreen from './screens/MintearScreen';
// import ProximamenteScreen from './screens/ProximamenteScreen';

function App() {

  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path='/' element={
            <>
              <NavarComponent />
              <HomeScreen />
              <NFTcollectibles />
              <RoadmapScreen />
              <TeamScreen />
              <PreguntasScreen />
              <SociosScreen />
              <FooterComponent />
            </>
          } />
  
          {/* Ruta para el formulario */}
          <Route path='/formulario' element={<ComprarScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
