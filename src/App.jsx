import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Menu from './components/menu';
import Reservation from './components/reservation';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Reservation />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;