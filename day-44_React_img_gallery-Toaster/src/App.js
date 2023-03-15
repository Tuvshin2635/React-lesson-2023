import './App.css';
import {Routes, Route} from 'react-router-dom'
import Index from './component';
import Accordion from './component/Accordion';
import HomePage from './component/HomePage';
import AboutPage from './component/AboutPage';
import Movies from './component/Movies';
import Movie from './component/Movie';
import Gallery from './component/GalleryPage';
import ToasterPage from './component/ToasterPage';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/accordion" element={<Accordion />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movie/:id" element={<Movie />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/toaster" element={<ToasterPage />}/>
      </Routes>

    </div>
  );
}

export default App;
