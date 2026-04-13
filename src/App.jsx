import './App.css'
import Banner from './components/Banner';
import CallToAction from './components/CallToAction';
import NavBar from './components/NavBar';
import Pricing from './components/Pricing';
import ProductSection from './components/ProductSection';
import Stats from './components/Stats';
import Steps  from './components/Steps';

function App() {

  return (
    <div className="min-h-screen bg-white">

      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>
      <ProductSection></ProductSection>
      <Steps></Steps>
      <Pricing></Pricing>
      <CallToAction></CallToAction>
    </div>
  )
}

export default App
