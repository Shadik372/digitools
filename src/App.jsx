import './App.css'
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Stats from './components/Stats';

function App() {

  return (
    <div className="min-h-screen bg-white">

      <NavBar></NavBar>
      <Banner></Banner>
      <Stats></Stats>
    </div>
  )
}

export default App
