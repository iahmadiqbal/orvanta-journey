import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Award, CheckCircle, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const values = [
  { 
    icon: Shield, 
    title: "Integrity", 
    desc: "We uphold the highest standards of honesty, transparency, and ethical conduct in every engagement. Our client relationships are built on trust, and we are committed to providing advice that aligns with both regulatory standards and our moral principles. We carefully assess each case to ensure responsible and ethical client selection."
  },
  { 
    icon: Award, 
    title: "Accuracy", 
    desc: "Our advisory is grounded in verified information, thorough research, and up-to-date regulatory knowledge. We avoid assumptions and ensure that every recommendation is based on facts and practical realities. This commitment allows our clients to make well-informed and confident decisions."
  },
  { 
    icon: CheckCircle, 
    title: "Confidentiality", 
    desc: "We treat all client information with the utmost discretion and care. Strict data protection practices and secure systems are maintained to safeguard sensitive information at every stage. Our clients can trust that their personal and business matters remain private and protected."
  },
  { 
    icon: Target, 
    title: "Realism", 
    desc: "We believe in setting clear, practical expectations rather than offering overly optimistic or misleading assurances. Our guidance is honest, transparent, and aligned with real-world outcomes. This approach helps clients plan effectively and avoid unnecessary risks."
  },
  { 
    icon: Eye, 
    title: "Scope Discipline", 
    desc: "We maintain clarity in defining the scope of our services, ensuring clients understand exactly what we offer. By setting clear boundaries, we deliver focused, high-quality outcomes without overpromising. This disciplined approach enables efficient execution and stronger client trust."
  },
];

const teamMembers = [
  {
    name: "John Anderson",
    role: "CEO & Founder",
    image: "https://i.pravatar.cc/300?img=12",
    description: "15+ years in global immigration and business consulting, leading strategic expansion initiatives across multiple continents."
  },
  {
    name: "Sarah Chen",
    role: "Head of Immigration Services",
    image: "https://i.pravatar.cc/300?img=5",
    description: "Certified immigration consultant specializing in UK, Hong Kong, and India visa processing with 500+ successful cases."
  },
  {
    name: "Rajesh Kumar",
    role: "Investment Advisor",
    image: "https://i.pravatar.cc/300?img=33",
    description: "12+ years in financial advisory, specializing in real estate and stock market investments with proven ROI strategies."
  },
  {
    name: "Emily Watson",
    role: "Legal Consultant",
    image: "https://i.pravatar.cc/300?img=9",
    description: "International business law expert in compliance, contract drafting, and risk management across multiple jurisdictions."
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop" 
            alt="About Orvanta Advisory" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl mx-auto text-center">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-6">
              About Orvanta Advisory
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-primary-foreground/80 leading-relaxed">
              Your trusted partner in global mobility, business expansion, and strategic advisory—delivering clarity, expertise, and results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Who We <span className="text-accent">Are</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-base leading-relaxed max-w-4xl mx-auto mb-4 text-center">
                Orvanta Advisory Limited is a global consultancy firm specializing in immigration, business expansion, IT solutions, and legal services. As a boutique advisory practice, we are committed to helping individuals and businesses make informed, strategic cross-border decisions with confidence.
              </motion.p>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-base leading-relaxed max-w-4xl mx-auto mb-4 text-center">
                Operating from Hong Kong, we primarily support clients with interests between Canada and India, while also serving a broader international clientele across multiple continents. Our team of certified consultants and industry experts brings deep domain knowledge and a personalized approach to every engagement.
              </motion.p>
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground text-base leading-relaxed max-w-4xl mx-auto text-center">
                From visa applications and permanent residency to business investments, regulatory navigation, and digital transformation, we provide comprehensive, end-to-end solutions tailored to each client's unique goals. By combining strategic insight with practical execution, we help our clients succeed in today's complex global landscape.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Our Mission & <span className="text-accent">Vision</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Guiding principles that drive our commitment to excellence and client success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
                className="relative bg-card rounded-3xl p-10 card-elevated border-2 border-secondary/20 group hover:shadow-2xl hover:border-secondary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex h-20 w-20 rounded-2xl bg-gradient-to-br from-secondary to-blue-600 shadow-xl items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Target size={36} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl mb-6 text-foreground">
                    Our <span className="text-secondary">Mission</span>
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    To empower individuals and businesses to make informed decisions in international mobility, business expansion, and technology readiness through disciplined, ethical, and structured advisory. We are committed to simplifying global growth by delivering expert, transparent, and personalized consultancy services across immigration, business, IT, and legal domains—providing strategic guidance and comprehensive support at every step.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="relative bg-card rounded-3xl p-10 card-elevated border-2 border-accent/20 group hover:shadow-2xl hover:border-accent/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex h-20 w-20 rounded-2xl bg-gradient-to-br from-accent to-amber-500 shadow-xl items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Eye size={36} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl mb-6 text-foreground">
                    Our <span className="text-accent">Vision</span>
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    To be a trusted global boutique advisory firm, recognized for excellence, integrity, and innovation across immigration, business, technology, and legal services. We aim to deliver clarity in cross-border opportunities between Canada and India through a globally positioned platform, while building lasting partnerships grounded in a genuine commitment to our clients' success, growth, and long-term prosperity in international markets.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Clients <span className="text-accent">Trust Us</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our core values drive everything we do, ensuring exceptional service and lasting partnerships
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-2xl p-8 card-elevated border border-border hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-16 w-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <v.icon size={32} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-foreground group-hover:text-accent transition-colors">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
