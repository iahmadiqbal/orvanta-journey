import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, PieChart, BarChart3, LineChart, Target, Shield, ArrowRight, Phone, Mail, HelpCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const regions = [
  {
    title: "United Kingdom",
    description: "The UK stock market offers access to the London Stock Exchange (LSE), one of the world's oldest and most prestigious exchanges. UK investors benefit from a mature regulatory framework under the Financial Conduct Authority (FCA), diverse investment options including FTSE 100 blue-chip companies, and tax-efficient investment vehicles like ISAs and SIPPs. The UK market provides exposure to global companies, strong corporate governance, and investor protection.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    highlights: ["FTSE 100 & 250 access", "ISA tax benefits", "FCA regulation", "Global companies"]
  },
  {
    title: "Hong Kong",
    description: "Hong Kong Stock Exchange (HKEX) serves as the gateway to Asian markets and mainland China through Stock Connect programs. Hong Kong offers no capital gains tax on stock investments, making it highly attractive for investors. The market provides access to Chinese tech giants, financial institutions, and international companies with dual listings. Hong Kong's strategic position combines Western financial practices with Asian market opportunities.",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop",
    highlights: ["No capital gains tax", "China market access", "Hang Seng Index", "Stock Connect"]
  },
  {
    title: "India",
    description: "India's stock market, featuring BSE and NSE, is one of the fastest-growing globally with over 5,000 listed companies. The market offers exposure to India's booming economy, emerging sectors like technology and pharmaceuticals, and a young demographic dividend. Indian markets are regulated by SEBI, providing robust investor protection. Tax benefits through ELSS funds and long-term capital gains exemptions make it attractive for wealth creation.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    highlights: ["High growth potential", "SEBI regulation", "Diverse sectors", "Tax benefits"]
  }
];

const investmentStrategies = [
  {
    title: "Growth Investing",
    description: "Focus on companies with high growth potential and strong earnings momentum",
    features: ["Technology stocks", "Emerging sectors", "Capital appreciation", "Long-term focus"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    title: "Value Investing",
    description: "Identify undervalued stocks trading below their intrinsic value",
    features: ["Fundamental analysis", "Margin of safety", "Dividend yields", "Patient approach"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop"
  },
  {
    title: "Dividend Investing",
    description: "Build passive income through dividend-paying stocks",
    features: ["Regular income", "Stable companies", "Dividend reinvestment", "Lower volatility"],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop"
  },
  {
    title: "Index Investing",
    description: "Diversified exposure through index funds and ETFs",
    features: ["Low cost", "Market returns", "Diversification", "Passive management"],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop"
  }
];

const services = [
  {
    icon: PieChart,
    title: "Portfolio Management",
    description: "Professional management of your investment portfolio with risk assessment, asset allocation, and regular rebalancing"
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description: "In-depth market research with technical and fundamental analysis across global markets"
  },
  {
    icon: LineChart,
    title: "Trading Advisory",
    description: "Expert guidance for active traders with entry/exit strategies and risk management"
  },
  {
    icon: Target,
    title: "Wealth Building",
    description: "Long-term wealth creation strategies including growth stocks and retirement planning"
  }
];

const processSteps = [
  { step: "01", title: "Investment Goals", description: "Define your financial objectives, risk tolerance, and investment timeline" },
  { step: "02", title: "Market Research", description: "Comprehensive analysis of markets, sectors, and individual stocks" },
  { step: "03", title: "Portfolio Design", description: "Create diversified portfolio aligned with your goals and risk profile" },
  { step: "04", title: "Account Setup", description: "Open trading accounts and complete regulatory requirements" },
  { step: "05", title: "Investment Execution", description: "Execute trades and build your portfolio systematically" },
  { step: "06", title: "Ongoing Management", description: "Regular monitoring, rebalancing, and performance reporting" }
];

const faqs = [
  {
    question: "What is the minimum amount needed to start investing in stocks?",
    answer: "Minimum investment varies by market: UK - £500 for most brokers, Hong Kong - HK$10,000 typically, India - ₹5,000-10,000. However, fractional shares and mutual funds allow starting with even smaller amounts."
  },
  {
    question: "How do I choose between UK, Hong Kong, and Indian stock markets?",
    answer: "Consider factors like your residency, tax implications, currency exposure, and investment goals. UK offers stability and global exposure, Hong Kong provides tax advantages and China access, India offers high growth potential. We help you diversify across markets."
  },
  {
    question: "What are the tax implications of stock investments?",
    answer: "UK: Capital gains tax above £6,000 annual allowance, ISA exemptions available. Hong Kong: No capital gains tax. India: 10% LTCG above ₹1 lakh, 15% STCG. We provide tax-efficient investment strategies for each market."
  },
  {
    question: "Do you provide ongoing portfolio management?",
    answer: "Yes, we offer comprehensive portfolio management including regular monitoring, rebalancing, performance reporting, and strategic adjustments based on market conditions and your evolving goals."
  }
];

const FAQItem = ({ faq, index }: { faq: { question: string; answer: string }; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={index}
      className="bg-card rounded-xl card-elevated border border-border overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-start gap-3 flex-1">
          <HelpCircle size={20} className="text-secondary shrink-0 mt-1" />
          <h3 className="font-heading font-bold text-lg text-foreground pr-4">
            {faq.question}
          </h3>
        </div>
        <ChevronDown
          size={20}
          className={`text-secondary shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6"
        >
          <p className="text-muted-foreground pl-8">
            {faq.answer}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

const Stocks = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&h=1080&fit=crop" 
            alt="Stock Investments" 
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
              Stock <span className="text-accent">Investments</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8"
            >
              Build wealth through strategic stock market investments in UK, Hong Kong, and India. Expert guidance for growth, value, and dividend investing.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                  Start Investing <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Regional Markets */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Global Stock Markets
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Access premier stock markets across three continents
            </motion.p>
          </div>

          <div className="space-y-12">
            {regions.map((region, i) => (
              <motion.div
                key={region.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={i % 2 === 0 ? fadeLeft : fadeRight}
                custom={i}
                className="bg-card rounded-2xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300"
              >
                <div className={`grid md:grid-cols-2 gap-0 ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`relative h-80 md:h-auto overflow-hidden ${i % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img 
                      src={region.image} 
                      alt={region.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h3 className="font-heading font-bold text-3xl text-white">
                        {region.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {region.description}
                    </p>
                    <div className="pt-6 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {region.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Investment Strategies */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Investment Strategies
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Proven approaches to stock market investing
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentStrategies.map((strategy, i) => (
              <motion.div
                key={strategy.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={strategy.image} 
                    alt={strategy.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-white">
                    {strategy.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {strategy.description}
                  </p>
                  <ul className="space-y-2">
                    {strategy.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Our Services */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Our Investment Services
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Comprehensive support for your stock market journey
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-elevated border border-border text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                  <service.icon className="text-secondary" size={32} />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Investment Process */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Our Investment Process
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Six-step approach to successful stock investing
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative pl-16 pb-12 last:pb-0"
              >
                {i < processSteps.length - 1 && (
                  <div className="absolute left-[31px] top-16 bottom-0 w-0.5 bg-secondary/30" />
                )}
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {step.step}
                </div>
                <div className="bg-card rounded-xl p-6 card-elevated border border-border">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: FAQs */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
                className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="text-muted-foreground text-lg"
              >
                Common questions about stock investments
              </motion.p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <FAQItem key={faq.question} faq={faq} index={i} />
              ))}
            </div>
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
              Ready to Start Your Investment Journey?
            </motion.h2>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Begin building wealth through strategic stock market investments. Contact our investment advisors today.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                  <Phone className="mr-2" size={20} />
                  Schedule Consultation
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

export default Stocks;
