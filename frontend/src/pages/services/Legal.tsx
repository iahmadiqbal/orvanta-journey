import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { FaFileContract, FaShieldAlt, FaHandshake } from "react-icons/fa";
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

const legalServices = [
  {
    icon: FaFileContract,
    title: "Legal Document & Verification",
    desc: "Professional legal documentation services including contract drafting, review, and verification for international business.",
    features: [
      "Contract drafting and review",
      "Document authentication",
      "Legal translation services",
      "Notarization support",
      "Compliance documentation",
    ],
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    gradient: "from-blue-500/40 to-cyan-500/40",
  },
  {
    icon: FaShieldAlt,
    title: "Risk Management",
    desc: "Comprehensive risk assessment and management strategies to protect your business interests in international operations.",
    features: [
      "Legal risk assessment",
      "Compliance auditing",
      "Regulatory guidance",
      "Risk mitigation strategies",
      "Policy development",
    ],
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    gradient: "from-purple-500/40 to-pink-500/40",
  },
  {
    icon: FaHandshake,
    title: "Dispute Prevention",
    desc: "Proactive legal strategies and advisory services to prevent disputes and resolve conflicts in international business dealings.",
    features: [
      "Conflict resolution advisory",
      "Mediation support",
      "Preventive legal strategies",
      "Contract negotiation guidance",
      "Dispute resolution planning",
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
    gradient: "from-orange-500/40 to-red-500/40",
  },
];

const Legal = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=1920&h=1080&fit=crop"
            alt="Legal Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
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
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 drop-shadow-2xl"
            >
              Legal <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg md:text-xl text-white font-semibold leading-relaxed drop-shadow-2xl"
            >
              Professional legal support for documentation, risk management, and
              dispute prevention.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Legal Services
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Expert legal guidance for international business operations
            </p>
            <p className="text-muted-foreground text-base leading-relaxed text-left">
              We provide comprehensive legal consulting services to support your international business ventures and ensure regulatory compliance across global markets. Our experienced legal advisors specialize in contract drafting, business documentation, risk management, and dispute prevention for cross-border operations. From legal documentation and compliance advisory to risk assessment and business agreements, we help you navigate complex legal frameworks with confidence. Whether you're expanding into new markets, establishing partnerships, or managing international transactions, our legal expertise protects your business interests and ensures smooth operations in accordance with local and international regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {legalServices.map((service, i) => (
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
                    <h3 className="font-heading font-bold text-xl text-white drop-shadow-lg">
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
              Protect Your Business Interests
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Contact us today for professional legal advisory services tailored
              to your international business needs.
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

export default Legal;
