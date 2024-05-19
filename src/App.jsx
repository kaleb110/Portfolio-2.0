import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <main className="container relative px-6 py-4">
      <section>
        <Nav />
      </section>

      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Contact />
      </section>
      
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
