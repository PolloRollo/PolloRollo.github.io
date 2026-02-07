import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';
import { ThemeProvider } from './context/ThemeContext';
import './App.css'

// Lazy load page components (only loaded when route is accessed)
const Home = lazy(() => import('./pages/Home'));
const Test = lazy(() => import('./pages/Test'));
const About = lazy(() => import('./pages/About'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const CollectionPage = lazy(() => import('./pages/CollectionPage'));
const Photography = lazy(() => import('./pages/Photography'));

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <ScrollToTop />
          <Navbar></Navbar>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={ <Home/> } />
              <Route path="/about" element={ <About/>} />
              <Route path="/test" element={ <Test/> } />
              <Route path="/projects/:slug" element={<ArticlePage json='projects.json'/>} />
              <Route path="/publications/:slug" element={<ArticlePage json='research.json'/>} />
              <Route path="/projects" element={<CollectionPage source='projects.json'/>} />
              <Route path="/research" element={<CollectionPage source='research.json'/>} />
              <Route path="/photography" element={<Photography/>} />
            </Routes>
          </Suspense>
          <Footer></Footer>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
