import { motion } from "framer-motion";
import { CheckCircle, Home, TrendingUp, Calculator, Globe, Briefcase, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const investmentServices = [
  {
    id: "real-estate",
    icon: Home,
    title: "Real Estate Investments",
    description: "Strategic property investment opportunities across UK, Hong Kong, and India with comprehensive market analysis and portfolio management.",
    features: [
      "Residential and commercial property investments",
      "Market analysis and property valuation",
      "Rental yield optimization strategies",
      "Property management services",
      "Legal and regulatory compliance support",
      "Exit strategy planning and execution"
    ],
    regions: {
      uk: "Prime London properties, regional buy-to-let opportunities, student accommodation investments",
      hk: "Hong Kong residential market, commercial properties, Greater Bay Area real estate",
      india: "Metro city apartments, commercial spaces, REITs, emerging tier-2 city opportunities"
    },
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    link: "/services/investments/real-estate"
  },
  {
    id: "stock-investments",
    icon: TrendingUp,
    title: "Stock Investments",
    description: "Professional stock market advisory and portfolio management across global markets with data-driven investment strategies.",
    features: [
      "Equity portfolio management and diversification",
      "Market research and stock analysis",
      "Risk assessment and mitigation strategies",
      "Long-term wealth creation planning",
      "Regular portfolio reviews and rebalancing",
      "Tax-efficient investment structures"
    ],
    regions: {
      uk: "FTSE 100/250 stocks, ISA investments, UK growth stocks, dividend aristocrats",
      hk: "Hang Seng Index stocks, China A-shares access, Hong Kong blue chips, tech stocks",
      india: "NSE/BSE listed companies, mutual funds, SIPs, sectoral opportunities, IPO investments"
    },
    color: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    link: "/services/investments/stocks"
  },
  {
    id: "tax-planning",
    icon: Calculator,
    title: "Tax Planning",
    description: "Comprehensive tax optimization strategies to minimize liabilities and maximize returns across multiple jurisdictions.",
    features: [
      "Cross-border tax planning and optimization",
      "Tax-efficient investment structures",
      "Capital gains tax mitigation strategies",
      "Inheritance and estate tax planning",
      "Double taxation treaty utilization",
      "Compliance and filing support"
    ],
    regions: {
      uk: "ISA/SIPP optimization, capital gains allowances, inheritance tax planning, R&D tax credits",
      hk: "Territorial tax benefits, offshore structure optimization, MPF planning, tax treaty advantages",
      india: "Section 80C investments, LTCG/STCG optimization, NRI tax planning, TDS management"
    },
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
    link: "/services/investments/tax-planning"
  },
  {
    id: "nri-investments",
    icon: Globe,
    title: "NRI Investments",
    description: "Specialized investment solutions for Non-Resident Indians with focus on India opportunities and global portfolio diversification.",
    features: [
      "NRI-specific investment products and accounts",
      "Repatriation and fund transfer guidance",
      "India property investment for NRIs",
      "Portfolio management across geographies",
      "Tax optimization for NRI status",
      "Regulatory compliance and documentation"
    ],
    regions: {
      uk: "UK-based NRI investments, pension transfers, property purchases, remittance planning",
      hk: "Hong Kong NRI banking, investment accounts, cross-border wealth management",
      india: "NRE/NRO accounts, mutual funds, real estate, fixed deposits, government bonds, startup investments"
    },
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=600&fit=crop",
    link: "/services/investments/nri"
  },
  {
    id: "business-investments",
    icon: Briefcase,
    title: "Business Investments",
    description: "Strategic business investment opportunities including startups, private equity, and venture capital across emerging markets.",
    features: [
      "Startup and early-stage investment opportunities",
      "Private equity and venture capital deals",
      "Due diligence and valuation services",
      "Portfolio company support and mentoring",
      "Exit strategy planning and execution",
      "Co-investment and syndication opportunities"
    ],
    regions: {
      uk: "UK tech startups, EIS/SEIS schemes, scale-ups, fintech investments, cleantech opportunities",
      hk: "Hong Kong startups, GBA tech companies, cross-border deals, Asia-Pacific opportunities",
      india: "Indian startup ecosystem, unicorns, sectoral funds, angel investments, growth-stage companies"
    },
    color: "from-indigo-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop",
    link: "/services/investments/business"
  }
];

const whyInvest = [
  {
    title: "Expert Guidance",
    description: "Access to experienced investment advisors with deep market knowledge",
    icon: CheckCircle
  },
  {
    title: "Diversified Portfolio",
    description: "Build balanced portfolios across asset classes and geographies",
    icon: CheckCircle
  },
  {
    title: "Risk Management",
    description: "Comprehensive risk assessment and mitigation strategies",
    icon: CheckCircle
  },
  {
    title: "Tax Efficiency",
    description: "Optimize returns through tax-efficient investment structures",
    icon: CheckCircle
  }
];

const Investments = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&h=1080&fit=crop" 
            alt="Investment Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/75" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl mx-auto text-center">
            <motion.h1 
              variants={fadeUp} 
              custom={0} 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-6"
            >
              Investment <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8"
            >
              Comprehensive investment solutions across UK, Hong Kong, and India. Build wealth with expert guidance and strategic portfolio management.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Investment Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tailored investment solutions for your financial goals
            </p>
          </div>

          <div className="space-y-16">
            {investmentServices.map((service, i) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-2xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300"
              >
                <div className={`grid md:grid-cols-2 gap-0 ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`relative h-80 md:h-auto overflow-hidden ${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <service.icon size={32} className="text-white" />
                      </div>
                      <h3 className="font-heading font-bold text-3xl text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle size={20} className="text-secondary" />
                        Key Features:
                      </h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle size={16} className="text-secondary shrink-0 mt-1" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-6 border-t border-border space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">UK:</p>
                        <p className="text-sm text-muted-foreground">{service.regions.uk}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Hong Kong:</p>
                        <p className="text-sm text-muted-foreground">{service.regions.hk}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">India:</p>
                        <p className="text-sm text-muted-foreground">{service.regions.india}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link to={service.link}>
                        <Button className="w-full">
                          Learn More <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest With Us */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Invest With Us?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your trusted partner for wealth creation and financial growth
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyInvest.map((item, i) => (
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
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              variants={fadeUp} 
              custom={0} 
              className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6"
            >
              Ready to Start Investing?
            </motion.h2>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Get expert investment advice and start building your wealth portfolio today. Contact our investment advisors for personalized guidance.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                  <Phone className="mr-2" size={20} />
                  Book Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                  <Mail className="mr-2" size={20} />
                  Email Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Investments;
