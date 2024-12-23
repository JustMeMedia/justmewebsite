import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlowButton } from '@/components/ui/glow-button';
import { GlowText } from '@/components/ui/glow-text';
import { Typewriter } from '@/components/ui/typewriter';
import { AnimatedIcon } from '@/components/ui/animated-icon';
import { openCalendly } from '@/lib/utils';

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container flex flex-col items-center justify-center text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <AnimatedIcon 
            icon={Terminal} 
            className="h-16 w-16 text-purple-400 mx-auto" 
          />
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            <GlowText>
              <Typewriter text="JustMe AI" delay={500} />
            </GlowText>
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-200 max-w-[600px] mx-auto">
            <Typewriter 
              text="Innovating AI Solutions for Businesses – Elevate your operations with intelligent automation tailored to your needs."
              delay={1200}
              speed={30}
            />
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <GlowButton size="lg">
                Explore Services
              </GlowButton>
            </Link>
            
            <GlowButton
              size="lg"
              variant="outline"
              onClick={openCalendly}
            >
              Book a Call
            </GlowButton>
          </div>
        </motion.div>
      </main>
    </div>
  );
}