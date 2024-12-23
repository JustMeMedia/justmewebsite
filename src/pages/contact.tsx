import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GlowText } from '@/components/ui/glow-text';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

export function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-6 bg-black/50 border-purple-500/20">
            <div className="text-center mb-8">
              <GlowText className="text-3xl font-bold mb-2">Contact Us</GlowText>
              <p className="text-purple-200">
                Let's discuss how we can help transform your business
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <Input
                  placeholder="Name"
                  className="bg-black/50 border-purple-500/20 focus:border-purple-500"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-black/50 border-purple-500/20 focus:border-purple-500"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Tell us about your needs"
                  className="bg-black/50 border-purple-500/20 focus:border-purple-500 min-h-[150px]"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                >
                  Send Message
                </Button>
                
                <Button
                  variant="outline"
                  className="flex-1 border-purple-500 text-purple-400 hover:bg-purple-500/20"
                  asChild
                >
                  <a
                    href="https://calendly.com/dylanshandbusiness/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Call
                  </a>
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}