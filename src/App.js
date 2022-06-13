import Navbar from "../src/components/Navbar/Navbar";
import "./index.css";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/Contact/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
