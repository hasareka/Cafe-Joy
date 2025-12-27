import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Menu from './components/menu';
import Reservation from './components/reservation';
import Contact from './components/contact';
import Footer from './components/footer';
import AdminDashboard from './components/adminDashboard'; // Import your new component
import Heritage from './components/Heritage';
import FullMenu from './components/FullMenu';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* MAIN LANDING PAGE ROUTE */}
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Menu />
              <Reservation />
              <Contact />
              <Footer />
            </>
          } />

          {/* ADMIN DASHBOARD ROUTE */}
          <Route path="/admin-joy" element={<AdminDashboard />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/full-menu" element={<FullMenu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;