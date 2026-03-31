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
    desc: "We believe in transparent and honest guidance at every step of your journey. Our commitment to ethical practices ensures you receive trustworthy advice and reliable support throughout your business expansion.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600"
  },
  { 
    icon: Award, 
    title: "Excellence", 
    desc: "Committed to delivering the highest standards of service across all our offerings. Our team continuously updates their expertise to provide cutting-edge solutions that drive your success in global markets.",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600"
  },
  { 
    icon: CheckCircle, 
    title: "Reliability", 
    desc: "Consistent results you can count on, backed by proven track records and satisfied clients worldwide. We deliver on our promises with timely execution and dependable support at every stage of your project.",
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-600"
  },
];

const teamMembers = [
  {
    name: "John Anderson",
    role: "CEO & Founder",
    image: "https://i.pravatar.cc/300?img=12",
    description: "With over 15 years of experience in global immigration and business consulting, John leads our team with a vision to simplify international expansion. He has successfully guided hundreds of businesses through complex immigration processes and market entry strategies across multiple continents."
  },
  {
    name: "Sarah Chen",
    role: "Head of Immigration Services",
    image: "https://i.pravatar.cc/300?img=5",
    description: "Sarah is a certified immigration consultant with expertise in visa processing and immigration law across UK, Hong Kong, and India. She has helped over 500 clients secure visas, work permits, and permanent residency. Her deep understanding of international immigration regulations ensures smooth application processes."
  },
  {
    name: "Rajesh Kumar",
    role: "Investment Advisor",
    image: "https://i.pravatar.cc/300?img=33",
    description: "Rajesh specializes in real estate and stock market investments with a proven track record of maximizing returns for clients. With 12+ years in financial advisory, he provides strategic investment planning, portfolio management, and risk assessment services tailored to individual business goals and market conditions."
  },
  {
    name: "Emily Watson",
    role: "Legal Consultant",
    image: "https://i.pravatar.cc/300?img=9",
    description: "Emily is an international business law expert specializing in compliance, contract drafting, and risk management. With experience across multiple jurisdictions, she ensures businesses operate within legal frameworks while protecting their interests. Her expertise covers corporate law, employment regulations, and dispute prevention."
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
              A trusted name in immigration consultancy, helping thousands achieve their global dreams since 2014.
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
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto mb-4">
                Orvanta Advisory is a leading global consultancy firm specializing in immigration, business expansion, IT solutions, and legal services. With over a decade of experience, we've successfully guided thousands of clients and businesses to achieve their international goals across multiple continents.
              </motion.p>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-base leading-relaxed max-w-4xl mx-auto">
                Our team of certified consultants and industry experts delivers personalized, strategic guidance tailored to your unique needs. From visa applications and permanent residency to business investments and digital transformation, we provide comprehensive solutions that drive success in today's global marketplace.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { num: "10+", label: "Years Experience", icon: Award, gradient: "from-blue-500/20 to-cyan-500/20" },
                { num: "5000+", label: "Successful Cases", icon: CheckCircle, gradient: "from-purple-500/20 to-pink-500/20" },
                { num: "98%", label: "Success Rate", icon: Target, gradient: "from-emerald-500/20 to-teal-500/20" },
                { num: "25+", label: "Countries Covered", icon: MapPin, gradient: "from-orange-500/20 to-red-500/20" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  custom={i + 3}
                  className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-sm rounded-2xl p-6 card-elevated border border-border text-center hover:shadow-xl transition-all duration-300 group`}
                >
                  <div className="flex justify-center mb-4">
                    <div className="h-12 w-12 rounded-xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon size={24} className="text-secondary" />
                    </div>
                  </div>
                  <p className="text-4xl font-heading font-bold text-foreground mb-2">{stat.num}</p>
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-background">
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
                className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-10 card-elevated border border-border group hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl mb-6 text-foreground group-hover:text-secondary transition-colors">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    To simplify global expansion by providing expert, transparent, and personalized consultancy services across immigration, business, IT, and legal domains. We empower individuals and businesses to achieve their international goals with confidence, strategic guidance, and comprehensive support at every step.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="relative bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-10 card-elevated border border-border group hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-accent to-amber-500 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl mb-6 text-foreground group-hover:text-accent transition-colors">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    To be the most trusted global consultancy firm, recognized for excellence, integrity, and innovation across immigration, business, technology, and legal services. We aspire to create lasting partnerships built on genuine commitment to every client's success, growth, and long-term prosperity in international markets.
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
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={`bg-gradient-to-br ${v.gradient} backdrop-blur-sm rounded-2xl p-8 card-elevated border border-border hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className={`h-16 w-16 rounded-xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <v.icon size={32} className={v.iconColor} />
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

      {/* Our Team */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Meet Our <span className="text-accent">Expert Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dedicated professionals with decades of combined experience committed to your success
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-2xl overflow-hidden card-elevated border border-border group cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
