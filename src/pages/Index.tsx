import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Plane, Users, Zap, TrendingUp, Heart, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  { icon: GraduationCap, title: "Study Visa", desc: "Get accepted into top universities worldwide. We guide you through applications, documentation, and interviews." },
  { icon: Briefcase, title: "Work Visa", desc: "Unlock international career opportunities. We handle employer sponsorship, permits, and compliance." },
  { icon: Plane, title: "Tourist Visa", desc: "Travel the world hassle-free. Quick processing for tourist and visitor visas to any destination." },
];

const countries = [
  { flag: "🇬🇧", name: "United Kingdom", desc: "World-class education and career opportunities." },
  { flag: "🇨🇦", name: "Canada", desc: "Immigration-friendly policies and high quality of life." },
  { flag: "🇦🇺", name: "Australia", desc: "Excellent study and skilled worker programs." },
  { flag: "🇩🇪", name: "Germany", desc: "Tuition-free education and strong economy." },
  { flag: "🇦🇪", name: "UAE", desc: "Thriving job market and business opportunities." },
];

const features = [
  { icon: Users, title: "Experienced Consultants", desc: "Over 10 years of immigration expertise." },
  { icon: Zap, title: "Fast Processing", desc: "Streamlined procedures for quick results." },
  { icon: TrendingUp, title: "High Success Rate", desc: "98% visa approval rate across all categories." },
  { icon: Heart, title: "Personalized Guidance", desc: "Tailored solutions for every client." },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "Study Visa – UK", text: "Orvanta made my dream of studying in London a reality. Their team was incredibly supportive throughout." },
  { name: "Ahmed Hassan", role: "Work Visa – Canada", text: "Professional, efficient, and genuinely caring. Got my work permit approved in record time!" },
  { name: "Priya Sharma", role: "Tourist Visa – Australia", text: "Seamless process from start to finish. I highly recommend Orvanta Advisory to anyone." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Global immigration" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6"
            >
              Start Your Journey Abroad with{" "}
              <span className="text-gradient">Trusted Immigration Experts</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed"
            >
              Expert guidance for study visas, work permits, and tourist visas. We make your global aspirations a reality with personalized support every step of the way.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 shadow-lg">
                  Book Free Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive immigration solutions tailored to your needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-8 card-elevated border border-border text-center"
              >
                <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                  <s.icon size={28} className="text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Popular Destinations</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We help you settle in some of the best countries worldwide.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {countries.map((c, i) => (
              <motion.div
                key={c.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-elevated border border-border text-center"
              >
                <span className="text-5xl mb-4 block">{c.flag}</span>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{c.name}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Why Choose Orvanta Advisory?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We combine expertise with genuine care for your success.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <f.icon size={30} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-8 card-elevated border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-heading font-semibold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 hero-bg">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Start Your Immigration Journey?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
              Book a free consultation today and let our experts guide you to your dream destination.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-10 shadow-lg">
                  Book Free Consultation <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
