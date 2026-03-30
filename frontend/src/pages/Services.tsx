import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  FaPlane,
  FaBriefcase,
  FaLaptopCode,
  FaBalanceScale,
} from "react-icons/fa";
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

const services = [
  {
    icon: FaPlane,
    title: "Immigration",
    desc: "Comprehensive immigration solutions including visa services, PR applications, work permits, and study abroad programs across multiple global markets.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    link: "/services/immigration",
    gradient: "from-blue-500/40 to-cyan-500/40",
  },
  {
    icon: FaBriefcase,
    title: "Business",
    desc: "Strategic business solutions including investment opportunities and business expansion strategies to help your company grow internationally.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    link: "/services/business",
    gradient: "from-purple-500/40 to-pink-500/40",
  },
  {
    icon: FaLaptopCode,
    title: "IT Services",
    desc: "Complete IT solutions including web development, digital marketing & SEO, mobile app development, and video editing & graphic designing.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    link: "/services/it-services",
    gradient: "from-orange-500/40 to-red-500/40",
  },
  {
    icon: FaBalanceScale,
    title: "Legal Services",
    desc: "Professional legal support including legal documentation & verification, risk management, and dispute prevention for international business.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    link: "/services/legal",
    gradient: "from-emerald-500/40 to-teal-500/40",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
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
              Our <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed"
            >
              Comprehensive B2B solutions for immigration, business growth, IT
              development, and legal support across global markets.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <Link key={service.title} to={service.link}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="bg-card rounded-2xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-4">
                      <div className="h-16 w-16 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                        <service.icon size={32} className="text-white" />
                      </div>
                      <h3 className="font-heading font-bold text-3xl text-white drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-1">
                      {service.desc}
                    </p>
                    <div className="flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all">
                      Learn More{" "}
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </motion.div>
              </Link>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Business Consultation",
                desc: "Expert guidance for starting and growing your business internationally. We help you navigate market entry, business setup, and expansion strategies. Our consultants provide comprehensive support in business planning, market research, and operational optimization to ensure your success in global markets.",
                image:
                  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
              },
              {
                title: "Business Investment",
                desc: "Explore lucrative investment opportunities in global markets with our expert guidance. Our team provides detailed market analysis, risk assessment, and investment planning services. We help you identify profitable ventures, structure investments, and maximize returns while ensuring compliance with international regulations.",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
              },
              {
                title: "Stock Investment",
                desc: "Professional stock market advisory and portfolio management services tailored to your financial goals. Get expert insights on market trends, investment strategies, and risk management. Our financial analysts help you build a diversified portfolio and make informed decisions for better returns and long-term wealth creation.",
                image:
                  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
              },
              {
                title: "Financial Advisors",
                desc: "Comprehensive financial planning and wealth management solutions for individuals and businesses. From retirement planning to tax optimization and asset allocation, our experienced advisors help you achieve financial security. We provide personalized strategies to grow, protect, and preserve your wealth for future generations.",
                image:
                  "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
              },
              {
                title: "Legal",
                desc: "Professional legal consultation for immigration, business contracts, and documentation needs. Our legal team provides expert support for visa applications, business agreements, and compliance matters. We ensure all your legal requirements are met with accuracy and efficiency. Please note: Legal services are not available for Canada and Belize.",
                image:
                  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
              },
              {
                title: "Education Career Online Course",
                desc: "Access premium online courses and career development programs designed for global professionals. Enhance your skills with industry-recognized certifications, language training, and specialized courses. Our educational programs help you stay competitive in the international job market and advance your career with confidence.",
                image:
                  "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
              },
              {
                title: "Document Translation Services",
                desc: "Professional translation and certification of documents for visa and immigration purposes. Our certified translators ensure accuracy and compliance with embassy requirements. We handle birth certificates, academic transcripts, employment letters, and all official documents needed for your application process.",
                image:
                  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-2xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 hero-bg">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
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
              Contact us today to discuss how we can help your business expand
              globally with our expert services.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/contact">
                <button className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold text-base xl:text-lg px-10 xl:px-12 shadow-xl hover:shadow-2xl transition-all duration-200 h-12 xl:h-14 rounded-md inline-flex items-center gap-2">
                  Contact Us <ArrowRight size={20} />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
