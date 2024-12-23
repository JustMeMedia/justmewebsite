import { Button } from '@/components/ui/button';
import { GlowText } from '@/components/ui/glow-text';
import { Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-purple-500/20 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Terminal className="h-6 w-6 text-purple-400" />
          <GlowText className="text-xl font-bold">JustMe AI</GlowText>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-purple-200 hover:text-purple-400 transition">Home</Link>
          <Link to="/services" className="text-purple-200 hover:text-purple-400 transition">Services</Link>
          <Link to="/contact" className="text-purple-200 hover:text-purple-400 transition">Contact</Link>
          <a 
            href="https://calendly.com/dylanshandbusiness/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              className="border-purple-500 text-purple-400 hover:bg-purple-500/20"
            >
              Book a Call
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}