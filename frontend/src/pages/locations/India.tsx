import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
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

const India = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=1080&fit=crop"
            alt="India Office"
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
              India <span className="text-accent">Office</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed"
            >
              Your trusted partner in India
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Services Available */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background">
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
                Services Available in <span className="text-accent">India</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive business solutions tailored for the Indian market
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Immigration",
                  desc: "Expert visa services, PR applications, and work permits for international destinations. Our team provides comprehensive support for study abroad programs, employment visas, and family immigration. We guide you through documentation, application processes, and ensure compliance with immigration regulations for smooth approvals.",
                  link: "/services/immigration",
                  image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&h=400&fit=crop",
                  gradient: "from-blue-600/20 to-cyan-600/20"
                },
                {
                  title: "Business",
                  desc: "Strategic business consulting, investment advisory, and expansion strategies for Indian entrepreneurs. We assist with market research, business planning, and international market entry. Our experts help you identify growth opportunities, structure investments, and establish successful business operations across global markets.",
                  link: "/services/business",
                  image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
                  gradient: "from-purple-600/20 to-pink-600/20"
                },
                {
                  title: "IT Services",
                  desc: "Modern technology solutions including custom web development, mobile applications, and digital marketing services. We create responsive websites, implement effective SEO strategies, and develop innovative software solutions. Our IT team helps businesses establish strong digital presence and leverage technology for competitive advantage.",
                  link: "/services/it-services",
                  image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
                  gradient: "from-orange-600/20 to-red-600/20"
                },
                {
                  title: "Legal Services",
                  desc: "Professional legal consultation, documentation services, and compliance advisory for businesses and individuals. Our legal experts assist with contract drafting, business agreements, and regulatory compliance. We provide comprehensive legal support to protect your interests and ensure smooth business operations.",
                  link: "/services/legal",
                  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
                  gradient: "from-emerald-600/20 to-teal-600/20"
                },
              ].map((service, i) => (
                <Link key={service.title} to={service.link}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i + 1}
                    className="group relative bg-card rounded-3xl overflow-hidden card-elevated border border-border hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer h-full"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} group-hover:opacity-30 transition-opacity duration-500`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                      
                      {/* Title */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="font-heading font-bold text-3xl text-white drop-shadow-2xl group-hover:translate-x-2 transition-transform duration-500">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-card to-card/80">
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Office Details */}
      <section className="py-20 lg:py-28 bg-background">
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
                Office Details
              </h2>
              <p className="text-muted-foreground text-lg">
                Visit our India office for personalized consultation
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="bg-card rounded-2xl overflow-hidden card-elevated border border-border"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop"
                    alt="India Office"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 shrink-0">
                        <Building2 className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Office Address
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          SCO 29, First Floor
                          <br />
                          New Sunny Enclave, Sector 125
                          <br />
                          Mohali - 140301, Punjab, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 shrink-0">
                        <Clock className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Business Hours
                        </h4>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 2:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 shrink-0">
                        <MapPin className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          Location
                        </h4>
                        <p className="text-muted-foreground">
                          Conveniently located in Mohali with easy access from
                          Chandigarh and surrounding areas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Contact Information */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                Contact <span className="text-accent">Information</span>
              </h2>
              <p className="text-muted-foreground text-base">
                Get in touch with our India team for personalized assistance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="bg-card rounded-2xl p-6 card-elevated border border-border hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors shrink-0">
                    <Phone className="text-secondary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      Phone
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Call us for immediate assistance
                    </p>
                    <a
                      href="tel:+911234567890"
                      className="text-secondary font-semibold hover:underline text-base"
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={2}
                className="bg-card rounded-2xl p-6 card-elevated border border-border hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition-colors shrink-0">
                    <Mail className="text-secondary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                      Email
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Send us your queries anytime
                    </p>
                    <a
                      href="mailto:india@orvanta.com"
                      className="text-secondary font-semibold hover:underline text-base"
                    >
                      india@orvanta.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
              className="text-center"
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 shadow-lg hover:shadow-xl transition-all"
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

export default India;
