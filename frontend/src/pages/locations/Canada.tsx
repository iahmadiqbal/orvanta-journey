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
                Visit our Canada office for personalized consultation
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
                    src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&h=600&fit=crop"
                    alt="Canada Office"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="text-5xl mb-2">🇨🇦</div>
                    <h3 className="font-heading font-bold text-3xl text-white">
                      Canada
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
                          123 Business Street
                          <br />
                          Toronto, ON M5H 2N2
                          <br />
                          Canada
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
                          Located in downtown Toronto with easy access to public transit and major business districts
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
                Services Available in <span className="text-accent">Canada</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive business solutions tailored for the Canadian market
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Immigration",
                  desc: "Expert Canadian immigration services including Express Entry, Provincial Nominee Programs, and study permits. Our team provides comprehensive support for permanent residency applications, work permits, and family sponsorship. We guide you through Canada's immigration pathways with personalized consultation and document preparation to help you achieve your Canadian dream.",
                  link: "/services/immigration",
                  image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop",
                  gradient: "from-blue-600/20 to-cyan-600/20"
                },
                {
                  title: "Business",
                  desc: "Strategic business consulting for Canadian market entry and expansion. We assist with business immigration programs, investment opportunities, and company setup in Canada. Our experts help you navigate regulatory requirements, identify growth opportunities, and establish successful operations in this immigration-friendly country with strong economic fundamentals.",
                  link: "/services/business",
                  image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop",
                  gradient: "from-purple-600/20 to-pink-600/20"
                },
                {
                  title: "IT Services",
                  desc: "Modern technology solutions including web development, mobile applications, and digital marketing for Canadian businesses. We create innovative digital solutions, implement effective online strategies, and help you establish a strong digital presence in the Canadian market. Our IT team delivers scalable solutions that drive business growth and enhance customer engagement.",
                  link: "/services/it-services",
                  image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
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
