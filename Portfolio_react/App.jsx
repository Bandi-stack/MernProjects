import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skill from "./components/Skills/Skill";
import Projects from "./components/ProjectsFolder/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skill />
        <Projects />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
};

export default App;
