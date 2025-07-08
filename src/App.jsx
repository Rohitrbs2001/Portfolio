
// import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    
      <div className="App">
        <Navbar />
        {/* <ThemeToggle /> */}
        <Home />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    
  );
}

export default App;
