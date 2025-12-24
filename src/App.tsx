import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Test from './pages/Test'
import About from './pages/About'
import ArticlePage from './pages/ArticlePage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CollectionPage from './pages/CollectionPage';

import './App.css'


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element={ <About/>} />
          <Route path="/test" element={ <Test/> } />
          <Route path="/projects/:slug" element={<ArticlePage json='projects.json'/>} />
          <Route path="/publications/:slug" element={<ArticlePage json='research.json'/>} />
          <Route path="/projects" element={<CollectionPage source='projects.json'/>} />
          <Route path="/research" element={<CollectionPage source='research.json'/>} />
      </Routes>
      <Footer></Footer>
    </Router>
  </div>
  )
}

export default App
