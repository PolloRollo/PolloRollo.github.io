import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Test from './pages/Test'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar>
      </Navbar>
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/test" element={ <Test/> } />
      </Routes>
      <Footer></Footer>
    </Router>
  </div>
  )
}

export default App
