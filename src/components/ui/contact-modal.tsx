'use client';

import { useState, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      // Show success immediately
      toast({
        title: 'Success!',
        description: 'Contact Form Submitted Successfully',
      });

      // Send email in background without waiting
      fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          message: form.message,
          recipient: 'prashant.singh@icloud.com',
        }),
      }).catch(() => {});

      setForm({
        name: '',
        email: '',
        mobile: '',
        message: '',
      });

      onClose();
    },
    [form, onClose, toast]
  );

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-2xl bg-black text-white border border-purple-500/20">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-center">Get In Touch</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 text-base rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[rgb(57,171,152)] focus:border-[rgb(57,171,152)] outline-none transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 text-base rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[rgb(57,171,152)] focus:border-[rgb(57,171,152)] outline-none transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={handleChange}
                className="w-full p-3 text-base rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[rgb(57,171,152)] focus:border-[rgb(57,171,152)] outline-none transition-colors"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 text-base rounded-lg bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-[rgb(57,171,152)] focus:border-[rgb(57,171,152)] outline-none transition-colors resize-none"
                required
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button type="submit" variant="hero" size="xl" className="group bg-[rgb(57,171,152)] hover:bg-[rgb(57,171,152)]/90">
                Submit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactModal;
