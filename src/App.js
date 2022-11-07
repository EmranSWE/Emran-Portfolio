import logo from './logo.svg';
import './App.css';
import './styles.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';
import ParticleBG from './Components/ParticleBackGround/ParticleBG';
import ReactPDF from './Components/Resume/ReactPDF';
function App() {
  
  return (
    <div>
      <ParticleBG></ParticleBG>
      <Navbar></Navbar>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
     </Routes> 
     <ReactPDF></ReactPDF>
      <Footer></Footer>
    </div>
  );
}

export default App;
