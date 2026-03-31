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

const Belize = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&h=1080&fit=crop"
            alt="Belize Office"
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
              Belize <span className="text-accent">Office</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed"
            >
              Your trusted partner in Belize
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 border-y border-amber-200">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-amber-300">
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="h-16 w-16 rounded-xl bg-amber-100 flex items-center justify-center">
                    <AlertCircle className="text-amber-600" size={36} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-3 flex items-center gap-2">
                    Important <span className="text-amber-600">Notice</span>
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    Please note that we <span className="font-semibold text-foreground">do not provide Legal Services</span> in Belize. Our focus is on delivering exceptional Immigration, Business, and IT Services tailored to your specific needs.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="font-medium text-foreground">Immigration Services</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="font-medium text-foreground">Business Consulting</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="font-medium text-foreground">IT Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Details */}
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
                Visit our Belize office for personalized consultation
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
                    src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
                    alt="Belize Office"
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
                          45 Marine Parade
                          <br />
                          Belize City
                          <br />
                          Belize
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
                          Monday - Friday: 9:00 AM - 5:00 PM
                          <br />
                          Saturday: 10:00 AM - 1:00 PM
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
                          Conveniently located in Belize City with easy access to government offices and business centers
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

      {/* Services Available */}
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
                Services Available in <span className="text-accent">Belize</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive business solutions tailored for the Belize market
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Immigration",
                  desc: "Expert visa services, residency programs, and work permits for Belize. Our team specializes in Qualified Retired Persons (QRP) program, permanent residency applications, and temporary employment permits. We provide comprehensive support for individuals and families looking to relocate to Belize with personalized guidance throughout the immigration process.",
                  link: "/services/immigration",
                  image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
                  gradient: "from-blue-600/20 to-cyan-600/20"
                },
                {
                  title: "Business",
                  desc: "Strategic business consulting and investment opportunities in Central America. We assist with business formation, market entry strategies, and investment planning in Belize's growing economy. Our consultants provide expert guidance on offshore business structures, real estate investments, and tourism ventures tailored to Belize's unique business environment.",
                  link: "/services/business",
                  image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
                  gradient: "from-purple-600/20 to-pink-600/20"
                },
                {
                  title: "IT Services",
                  desc: "Modern technology solutions including website development, digital marketing, and e-commerce platforms. We help businesses in Belize establish their online presence with responsive web design, SEO optimization, and social media marketing. Our IT services are designed to help local businesses compete in the digital marketplace and reach international audiences.",
                  link: "/services/it-services",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                  gradient: "from-orange-600/20 to-red-600/20"
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

      {/* Contact Information */}
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
                Get in touch with our Belize team for personalized assistance
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
                      href="tel:+5011234567"
                      className="text-secondary font-semibold hover:underline text-base"
                    >
                      +501 123 4567
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
                      href="mailto:belize@orvanta.com"
                      className="text-secondary font-semibold hover:underline text-base"
                    >
                      belize@orvanta.com
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

export default Belize;
