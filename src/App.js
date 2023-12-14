import "./App.css";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";
import ParticleBG from "./Components/ParticleBackGround/ParticleBG";
import AddProjects from "./Components/Projects/AddProjects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MessageList from "./Components/Home/MessageList";
import Login from "./Components/Shared/Login";
import Blogs from "./Components/Blogs/Blogs";
import SingleProject from "./Components/Projects/SingleProject";
import Study from "./Components/Home/Study";
import Reference from "./Components/Home/Reference";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "black");
  }, []);
  return (
    <div>
      <ParticleBG></ParticleBG>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/education" element={<Study></Study>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/resume" element={<Resume></Resume>}></Route>
        <Route
          path="/projects/:id"
          element={<SingleProject></SingleProject>}
        ></Route>
        <Route path="/:id" element={<SingleProject></SingleProject>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
        <Route path="/reference" element={<Reference></Reference>}></Route>
        <Route path="/message" element={<MessageList></MessageList>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/addProject" element={<AddProjects></AddProjects>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
