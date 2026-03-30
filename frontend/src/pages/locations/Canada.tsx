import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Canada = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=1920&h=1080&fit=crop"
            alt="Canada Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/75" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-6"
            >
              Canada <span className="text-accent">Office</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed"
            >
              Your trusted partner in Canada
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md border border-amber-300">
              <AlertCircle className="text-amber-600 shrink-0 mt-1" size={28} />
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  Important Notice
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  We don't provide Legal Services in Canada. However, we offer
                  comprehensive Immigration, Business, and IT Services to
                  support your needs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Services Available in Canada
              </h2>
              <p className="text-muted-foreground text-lg">
                Comprehensive business solutions for the Canadian market
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Immigration",
                  desc: "Visa services, PR applications, and work permits",
                  icon: "✈️",
                  link: "/services/immigration",
                },
                {
                  title: "Business",
                  desc: "Investment and business expansion strategies",
                  icon: "💼",
                  link: "/services/business",
                },
                {
                  title: "IT Services",
                  desc: "Web development, digital marketing, and more",
                  icon: "💻",
                  link: "/services/it-services",
                },
              ].map((service, i) => (
                <Link key={service.title} to={service.link}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i + 1}
                    className="bg-card rounded-xl p-8 card-elevated border border-border hover:shadow-2xl transition-all duration-300 cursor-pointer group text-center h-full"
                  >
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.desc}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Contact Information
              </h2>
              <p className="text-muted-foreground text-lg">
                Get in touch with our Canada team
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="bg-card rounded-xl p-8 card-elevated border border-border"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <Phone className="text-secondary" size={32} />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  Phone
                </h3>
                <p className="text-muted-foreground mb-4">
                  Call us for immediate assistance
                </p>
                <a
                  href="tel:+11234567890"
                  className="text-secondary font-semibold hover:underline"
                >
                  +1 123 456 7890
                </a>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={2}
                className="bg-card rounded-xl p-8 card-elevated border border-border"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <Mail className="text-secondary" size={32} />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                  Email
                </h3>
                <p className="text-muted-foreground mb-4">
                  Send us your queries anytime
                </p>
                <a
                  href="mailto:info@orvantaadvisory.com"
                  className="text-secondary font-semibold hover:underline"
                >
                  info@orvantaadvisory.com
                </a>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
              className="mt-12 text-center"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90"
                >
                  Schedule a Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Canada;
