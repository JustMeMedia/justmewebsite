import { GlowText } from '@/components/ui/glow-text';
import { AnimatedIcon } from '@/components/ui/animated-icon';
import { Typewriter } from '@/components/ui/typewriter';
import { Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/justmehq/',
      icon: Instagram,
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@justmeaihq',
      icon: () => (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    {
      name: 'X',
      url: 'https://x.com/JustMeHQ',
      icon: () => (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UC6MnXusZyAu-bUMwwbrRblg',
      icon: Youtube,
    },
  ];

  return (
    <footer className="border-t border-purple-500/20 bg-black">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-purple-200">
            <Typewriter 
              text={`© ${new Date().getFullYear()} JustMe LLC. All rights reserved.`}
              delay={2000}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition"
              >
                <AnimatedIcon icon={link.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}