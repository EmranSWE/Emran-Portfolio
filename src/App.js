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
import AddProjects from './Components/Projects/AddProjects';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MessageList from './Components/Home/MessageList';
import Login from './Components/Shared/Login';
import useSound from 'use-sound';
import mySound from './Assets/mind.mp3';
import Blogs from './Components/Blogs/Blogs';
function App() {
  const [play, {stop}] = useSound(mySound, { volume: 0.1 });

  return (
    <div onMouseEnter={() => play()} onMouseLeave={() => stop()}>
      <ParticleBG></ParticleBG>
      <Navbar></Navbar>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='*' element={<Home></Home>}></Route>
        <Route path='/message' element={<MessageList></MessageList>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/addproject' element={<AddProjects></AddProjects>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
     </Routes> 
     <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
