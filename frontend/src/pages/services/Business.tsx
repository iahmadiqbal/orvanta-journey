import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { FaChartLine, FaBuilding } from "react-icons/fa";
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

const businessServices = [
  {
    icon: FaChartLine,
    title: "Investments",
    desc: "Strategic investment guidance for real estate, stocks, and business opportunities across global markets.",
    features: [
      "Market analysis and research",
      "Investment portfolio planning",
      "Risk assessment and management",
      "ROI optimization strategies",
      "International investment opportunities",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    gradient: "from-blue-500/40 to-cyan-500/40",
  },
  {
    icon: FaBuilding,
    title: "Business Expansion",
    desc: "Comprehensive support for businesses looking to expand into new international markets and territories.",
    features: [
      "Market entry strategy",
      "Business planning and setup guidance",
      "Regulatory compliance advisory",
      "Partnership and networking support",
      "Operational optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    gradient: "from-purple-500/40 to-pink-500/40",
  },
];

const Business = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop"
            alt="Business Services"
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
              Business <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed"
            >
              Strategic business solutions for investments and international
              expansion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Business Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Expert guidance for business growth and investment opportunities
            </p>
            <p className="text-muted-foreground text-base max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive business consulting services to help companies expand globally and maximize their investment potential. Our expert team offers strategic guidance on market entry, business formation, and investment planning across multiple international markets. Whether you're looking to establish a new venture, expand existing operations, or explore lucrative investment opportunities, we deliver tailored solutions that align with your business objectives. With deep market knowledge and extensive experience in international business development, we help you navigate complex regulatory environments and identify growth opportunities that drive sustainable success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {businessServices.map((service, i) => (
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
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <service.icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle
                          size={18}
                          className="text-secondary shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
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
              Grow Your Business Globally
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Contact us today to discuss how we can help your business expand
              and thrive in international markets.
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

export default Business;
