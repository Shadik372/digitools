import './App.css'
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import ProductSection from './components/ProductSection';
import Stats from './components/Stats';

function App() {

  return (
    <div className="min-h-screen bg-white">

      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <ProductSection></ProductSection>
    </div>
  )
}

export default App
