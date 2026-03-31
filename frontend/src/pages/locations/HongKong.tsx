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

const HongKong = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1920&h=1080&fit=crop"
            alt="Hong Kong Office"
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
              Hong Kong <span className="text-accent">Office</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed"
            >
              Your trusted partner in Hong Kong
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Office Details */}
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
                Visit our Hong Kong office for personalized consultation
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
                    src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop"
                    alt="Hong Kong Office"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="text-5xl mb-2">🇭🇰</div>
                    <h3 className="font-heading font-bold text-3xl text-white">
                      Hong Kong
                    </h3>
                  </div>
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
                          Unit 1603, 16/F, The L.Plaza
                          <br />
                          367-375 Queens Road Central
                          <br />
                          Sheung Wan, Hong Kong
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
                          Prime location in Central Hong Kong with excellent
                          connectivity to MTR and business districts
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

      {/* Section 2: Services Available */}
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
                Services Available in <span className="text-accent">Hong Kong</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive business solutions tailored for the Hong Kong market
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Immigration",
                  desc: "Comprehensive visa services, PR applications, and work permits tailored for Hong Kong. Our expert team assists with employment visas, dependent visas, and permanent residency applications. We guide you through the entire immigration process with personalized support and ensure compliance with Hong Kong immigration regulations.",
                  icon: "✈️",
                  link: "/services/immigration",
                  image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop",
                  gradient: "from-blue-600/20 to-cyan-600/20"
                },
                {
                  title: "Business",
                  desc: "Strategic investment and business expansion solutions for the Asia-Pacific market. We provide expert guidance on company formation, market entry strategies, and investment opportunities in Hong Kong. Our consultants help you navigate the business landscape and establish a strong presence in this dynamic financial hub.",
                  icon: "💼",
                  link: "/services/business",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
                  gradient: "from-purple-600/20 to-pink-600/20"
                },
                {
                  title: "IT Services",
                  desc: "Cutting-edge technology solutions including web development, digital marketing, and mobile app development. We help businesses establish their digital presence with modern, responsive websites and effective SEO strategies. Our team delivers innovative IT solutions that drive growth and enhance your competitive advantage in the Hong Kong market.",
                  icon: "💻",
                  link: "/services/it-services",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
                  gradient: "from-orange-600/20 to-red-600/20"
                },
                {
                  title: "Legal Services",
                  desc: "Professional legal documentation, compliance advisory, and risk management services. Our legal experts assist with contract drafting, regulatory compliance, and business documentation specific to Hong Kong law. We ensure your business operations meet all legal requirements while protecting your interests in this international business center.",
                  icon: "⚖️",
                  link: "/services/legal",
                  image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&h=400&fit=crop",
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
                Get in touch with our Hong Kong team for personalized assistance
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
                      href="tel:+85212345678"
                      className="text-secondary font-semibold hover:underline text-base"
                    >
                      +852 1234 5678
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
                      href="mailto:hongkong@orvanta.com"
                      className="text-secondary font-semibold hover:underline text-base"
                    >
                      hongkong@orvanta.com
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

export default HongKong;
