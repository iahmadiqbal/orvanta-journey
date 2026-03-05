import { motion } from "framer-motion";
import { CheckCircle, Clock, Shield, TrendingUp, HeartHandshake } from "lucide-react";
import { FaGraduationCap, FaBriefcase, FaPlane, FaFileAlt, FaUsers, FaGlobe, FaTrophy, FaUserTie } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const mainServices = [
  {
    icon: FaGraduationCap,
    title: "Study Visa Services",
    desc: "Complete guidance for international education",
    features: [
      "University selection and application",
      "Document preparation and verification",
      "Visa interview preparation",
      "Scholarship assistance",
      "Pre-departure orientation",
      "Post-arrival support"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: FaBriefcase,
    title: "Work Visa Services",
    desc: "Professional immigration for career growth",
    features: [
      "Job search assistance",
      "Employer sponsorship guidance",
      "Work permit processing",
      "Skills assessment support",
      "Resume and profile optimization",
      "Settlement services"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: FaPlane,
    title: "Tourist Visa Services",
    desc: "Hassle-free travel documentation",
    features: [
      "Quick visa processing",
      "Travel itinerary planning",
      "Document checklist",
      "Application form assistance",
      "Travel insurance guidance",
      "Embassy appointment booking"
    ],
    color: "from-orange-500 to-red-500"
  }
];

const additionalServices = [
  { icon: FaFileAlt, title: "Document Translation", desc: "Certified translation services for all visa documents" },
  { icon: FaUsers, title: "Family Sponsorship", desc: "Reunite with your loved ones abroad" },
  { icon: FaGlobe, title: "PR & Citizenship", desc: "Permanent residency and citizenship applications" },
  { icon: FaTrophy, title: "Business Immigration", desc: "Investor and entrepreneur visa programs" }
];

const processSteps = [
  { icon: FaUsers, title: "Free Consultation", desc: "Discuss your goals with our experts" },
  { icon: FaFileAlt, title: "Documentation", desc: "We prepare all required documents" },
  { icon: CheckCircle, title: "Application", desc: "Submit your application with confidence" },
  { icon: Shield, title: "Follow-up", desc: "Track progress until approval" }
];

const whyChoose = [
  { icon: Clock, title: "Fast Processing", desc: "Quick turnaround times" },
  { icon: Shield, title: "100% Legal", desc: "Fully compliant services" },
  { icon: TrendingUp, title: "98% Success Rate", desc: "Proven track record" },
  { icon: HeartHandshake, title: "Personalized Care", desc: "Dedicated support team" }
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl mx-auto text-center">
            <motion.h1 
              variants={fadeUp} 
              custom={0} 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-6"
            >
              Our Immigration <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed"
            >
              Comprehensive visa and immigration solutions tailored to your unique needs. From study to work to travel, we've got you covered.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Core Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Expert guidance for every stage of your immigration journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-2xl p-8 card-elevated border border-border"
              >
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-base">
                  {service.desc}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-secondary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete immigration support beyond visa applications
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-elevated border border-border text-center"
              >
                <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <service.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Simple Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four easy steps to your visa approval
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto shadow-xl">
                    <step.icon size={36} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-accent flex items-center justify-center font-bold text-accent-foreground text-sm shadow-lg">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose Orvanta Advisory?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-elevated border border-border text-center"
              >
                <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 hero-bg">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              variants={fadeUp} 
              custom={0} 
              className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Book a free consultation with our immigration experts and take the first step towards your dream destination.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold text-base xl:text-lg px-10 xl:px-12 shadow-xl hover:shadow-2xl transition-all duration-200 h-12 xl:h-14">
                  Book Free Consultation
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
