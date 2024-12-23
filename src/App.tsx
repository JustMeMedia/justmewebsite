import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HomePage } from '@/pages/home';
import { ServicesPage } from '@/pages/services';
import { ContactPage } from '@/pages/contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black font-mono text-white">
        {/* Removed gradient for consistent brightness */}
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}