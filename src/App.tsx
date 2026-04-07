import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import Category from '@/pages/Category';
import Contact from '@/pages/Contact';
import About from '@/pages/About';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Shop />} />
          <Route path="/categorie/:id" element={<Category />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
