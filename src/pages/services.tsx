import { Card } from '@/components/ui/card';
import { GlowText } from '@/components/ui/glow-text';
import { Bot, HeadphonesIcon, Mail, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI Automated Lead Gen',
    description: 'A cutting-edge system for unlimited daily cold email outreach.',
    icon: Mail,
    features: [
      'AI-powered lead targeting',
      'Mass personalized emails',
      'Smart follow-up sequences',
    ],
  },
  {
    title: 'AI Website Chatbot',
    description: 'Real-human-like customer support with a custom knowledge database.',
    icon: Bot,
    features: [
      '24/7 customer support',
      'Custom knowledge base',
      'Natural language processing',
    ],
  },
  {
    title: 'AI Phone Receptionist',
    description: 'Human-sounding AI capable of answering and making calls.',
    icon: HeadphonesIcon,
    features: [
      'Natural voice interactions',
      'Call routing & scheduling',
      'Voicemail transcription',
    ],
  },
  {
    title: 'Lead Capture + CRM',
    description: 'Streamlined lead management with advanced CRM capabilities.',
    icon: Database,
    features: [
      'Automated data capture',
      'Smart lead scoring',
      'Integration with major CRMs',
    ],
  },
];

export function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <div className="text-center mb-12">
          <GlowText className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </GlowText>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Transform your business with our cutting-edge AI solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-black/50 border-purple-500/20 hover:border-purple-500/40 transition">
                <service.icon className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-purple-200">
                  {service.title}
                </h3>
                <p className="text-purple-200/80 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-purple-300/60">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}