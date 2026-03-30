import { motion } from "framer-motion";
import { CheckCircle, Globe, Landmark, TrendingUp, Shield, ArrowRight, Phone, Mail, HelpCircle, ChevronDown, Plane } from "lucide-react";
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

const nriCategories = [
  {
    title: "NRIs in United Kingdom",
    description: "Non-Resident Indians in the UK can invest in India through NRE and NRO accounts, maintaining strong financial ties with India while enjoying UK residency benefits. UK-based NRIs benefit from DTAA provisions between UK and India, allowing tax optimization on Indian income. Investment options include Indian stocks, mutual funds, real estate, and fixed deposits with full repatriation rights through NRE accounts. UK NRIs can leverage both markets for diversified wealth creation.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    highlights: ["DTAA benefits", "NRE/NRO accounts", "Full repatriation", "Dual market access"]
  },
  {
    title: "NRIs in Hong Kong",
    description: "Hong Kong-based NRIs enjoy unique advantages with no capital gains tax in Hong Kong while investing in India. The DTAA between Hong Kong and India provides favorable tax treatment on dividends and interest income. NRIs can maintain NRE accounts for full repatriation, invest in Indian markets through Portfolio Investment Scheme (PIS), and benefit from Hong Kong's financial infrastructure for seamless transactions. Hong Kong's position as Asian financial hub facilitates efficient India investments.",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop",
    highlights: ["Zero CGT in HK", "DTAA advantages", "PIS access", "Easy remittances"]
  },
  {
    title: "Indians Investing Abroad",
    description: "Indian residents can invest abroad under RBI's Liberalized Remittance Scheme (LRS) allowing up to $250,000 annually per person. Investment options include foreign stocks, real estate, and businesses in UK and Hong Kong. Benefits include portfolio diversification, currency hedging, and access to developed markets. Proper tax planning ensures compliance with Indian tax laws on foreign income while utilizing DTAA benefits to avoid double taxation.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    highlights: ["LRS facility", "Global diversification", "Currency benefits", "DTAA protection"]
  }
];

const investmentOptions = [
  {
    title: "Indian Equity Markets",
    description: "Invest in BSE and NSE through NRE/NRO accounts with PIS approval",
    features: ["Direct stock trading", "Mutual funds", "ETFs", "Portfolio management"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop"
  },
  {
    title: "Indian Real Estate",
    description: "Property investments in India with repatriation benefits",
    features: ["Residential properties", "Commercial real estate", "REITs", "Property management"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
  },
  {
    title: "Fixed Income Investments",
    description: "Secure returns through NRE/NRO fixed deposits and bonds",
    features: ["NRE fixed deposits", "NRO deposits", "Government bonds", "Corporate bonds"],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop"
  },
  {
    title: "Foreign Investments",
    description: "Diversify globally through LRS for Indian residents",
    features: ["Foreign stocks", "International real estate", "Global funds", "Overseas businesses"],
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop"
  }
];

const benefits = [
  {
    icon: Globe,
    title: "Global Diversification",
    description: "Spread investments across multiple countries and currencies"
  },
  {
    icon: Shield,
    title: "Tax Optimization",
    description: "Leverage DTAA and tax-efficient structures"
  },
  {
    icon: TrendingUp,
    title: "Wealth Growth",
    description: "Access high-growth markets and opportunities"
  },
  {
    icon: Landmark,
    title: "Repatriation Rights",
    description: "Full or partial repatriation based on account type"
  }
];

const processSteps = [
  { step: "01", title: "Status Verification", description: "Confirm NRI status and residency documentation" },
  { step: "02", title: "Account Setup", description: "Open NRE/NRO accounts and obtain PIS approval if needed" },
  { step: "03", title: "Investment Planning", description: "Design portfolio based on goals and tax implications" },
  { step: "04", title: "Compliance Check", description: "Ensure FEMA and tax compliance for all investments" },
  { step: "05", title: "Investment Execution", description: "Execute investments through proper channels" },
  { step: "06", title: "Ongoing Management", description: "Portfolio monitoring and tax reporting support" }
];

const faqs = [
  {
    question: "What is the difference between NRE and NRO accounts?",
    answer: "NRE accounts hold foreign earnings with full repatriation rights and tax-free interest in India. NRO accounts hold Indian income with restricted repatriation (up to $1 million annually) and taxable interest. NRE is better for parking foreign income, NRO for managing Indian income."
  },
  {
    question: "Can NRIs invest in Indian stock market?",
    answer: "Yes, NRIs can invest in Indian stocks through NRE/NRO accounts with PIS (Portfolio Investment Scheme) approval from their bank. You can trade on BSE and NSE, invest in mutual funds, and hold shares in Indian companies subject to certain limits."
  },
  {
    question: "How does DTAA benefit NRI investments?",
    answer: "Double Taxation Avoidance Agreements prevent paying tax twice on the same income. If you pay tax in your country of residence, you can claim credit in India or vice versa. This significantly reduces overall tax burden on investment income."
  },
  {
    question: "Can Indian residents invest in UK or Hong Kong markets?",
    answer: "Yes, through RBI's Liberalized Remittance Scheme (LRS), Indian residents can remit up to $250,000 per year for foreign investments including stocks, real estate, and businesses in UK and Hong Kong. Proper documentation and tax compliance required."
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

const NRIInvestments = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=1080&fit=crop" 
            alt="NRI Investments" 
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
              NRI <span className="text-accent">Investments</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8"
            >
              Specialized investment solutions for Non-Resident Indians and Indian residents investing abroad. Navigate cross-border investments with expert guidance.
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

      {/* Section 1: NRI Categories */}
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
              Investment Solutions by Location
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Tailored strategies for NRIs and Indian residents
            </motion.p>
          </div>

          <div className="space-y-12">
            {nriCategories.map((category, i) => (
              <motion.div
                key={category.title}
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
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h3 className="font-heading font-bold text-3xl text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {category.description}
                    </p>
                    <div className="pt-6 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.highlights.map((highlight, idx) => (
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

      {/* Section 2: Investment Options */}
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
              NRI Investment Options
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Diverse investment opportunities for NRIs
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentOptions.map((option, i) => (
              <motion.div
                key={option.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={option.image} 
                    alt={option.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-white">
                    {option.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {option.description}
                  </p>
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
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

      {/* Section 3: Benefits */}
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
              Why Choose NRI Investments
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Key advantages of cross-border investing
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 card-elevated border border-border text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                  <benefit.icon className="text-secondary" size={32} />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Process */}
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
              NRI Investment Process
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Six-step approach to cross-border investing
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
                Common questions about NRI investments
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
              Ready to Invest Across Borders?
            </motion.h2>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Start your NRI investment journey with expert guidance. Contact our advisors for personalized solutions.
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

export default NRIInvestments;
