import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    address: "",
    desiredCountry: "",
    visaType: "",
    message: "" 
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", phone: "", address: "", desiredCountry: "", visaType: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl mx-auto text-center">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-6">
              Contact Us
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-primary-foreground/80 leading-relaxed">
              Have questions? Reach out and our team will be happy to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-3">
                Book a Free Consultation
              </motion.h2>
              <motion.p variants={fadeUp} custom={0} className="text-muted-foreground mb-8 text-base">
                Fill out the form below and our team will get back to you within 24 hours.
              </motion.p>
              <motion.form variants={fadeUp} custom={1} onSubmit={handleSubmit} className="space-y-5">
                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="h-12 text-base"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="h-12 text-base"
                />
                <Input
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="h-12 text-base"
                />
                <Input
                  placeholder="Address"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="h-12 text-base"
                />
                <Select value={form.desiredCountry} onValueChange={(value) => setForm({ ...form, desiredCountry: value })}>
                  <SelectTrigger className="h-12 text-base [&>span]:text-muted-foreground data-[placeholder]:text-muted-foreground">
                    <SelectValue placeholder="Desired Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="uk" className="text-base">United Kingdom</SelectItem>
                    <SelectItem value="canada" className="text-base">Canada</SelectItem>
                    <SelectItem value="australia" className="text-base">Australia</SelectItem>
                    <SelectItem value="germany" className="text-base">Germany</SelectItem>
                    <SelectItem value="uae" className="text-base">UAE</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={form.visaType} onValueChange={(value) => setForm({ ...form, visaType: value })}>
                  <SelectTrigger className="h-12 text-base [&>span]:text-muted-foreground data-[placeholder]:text-muted-foreground">
                    <SelectValue placeholder="Visa Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="study" className="text-base">Study Visa</SelectItem>
                    <SelectItem value="work" className="text-base">Work Visa</SelectItem>
                    <SelectItem value="immigrant" className="text-base">Immigrant Visa</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  className="text-base"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base"
                >
                  {loading ? "Sending..." : "Send Message"} <Send size={18} className="ml-2" />
                </Button>
              </motion.form>
            </motion.div>

            {/* Image + Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
              <motion.div variants={fadeUp} custom={0} className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop" 
                  alt="Consultation" 
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
              
              <motion.div variants={fadeUp} custom={1} className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-foreground">Get In Touch</h3>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-base">Office Address</p>
                    <p className="text-muted-foreground text-sm">123 Business Tower, Suite 400, New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-base">Email</p>
                    <p className="text-muted-foreground text-sm">info@orvantaadvisory.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-base">Phone</p>
                    <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="mt-16"
          >
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">Visit Our Office</h3>
            <div className="rounded-2xl overflow-hidden border border-border h-96 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
