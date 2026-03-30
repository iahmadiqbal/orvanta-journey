import { motion } from "framer-motion";
import { CheckCircle, Briefcase, TrendingUp, Users, Target, ArrowRight, Phone, Mail, HelpCircle, ChevronDown, Building } from "lucide-react";
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
    description: "The UK offers a robust business investment ecosystem with access to European markets, strong legal framework, and diverse opportunities. Investment options include startups through SEIS/EIS schemes with tax relief up to 50%, established SMEs, franchise opportunities, and commercial property. The UK's business-friendly environment, skilled workforce, and innovation hubs in London, Manchester, and Edinburgh make it attractive for business investments. Investors benefit from transparent regulations, strong IP protection, and access to venture capital.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    highlights: ["SEIS/EIS tax relief", "European market access", "Strong legal system", "Innovation hubs"]
  },
  {
    title: "Hong Kong",
    description: "Hong Kong serves as the premier gateway for business investments in Asia and mainland China. The city offers simple tax structure (16.5% corporate tax), no capital gains tax, free port status, and strategic location. Investment opportunities include trading companies, fintech startups, logistics businesses, and China-focused ventures. Hong Kong's business registration takes just one day, with minimal bureaucracy and strong rule of law. The city's position as international financial center provides access to capital and Asian markets.",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop",
    highlights: ["Low tax rates", "China gateway", "Fast setup", "Financial hub"]
  },
  {
    title: "India",
    description: "India's rapidly growing economy offers exceptional business investment opportunities with a large domestic market of 1.4 billion consumers. Key sectors include technology, manufacturing, healthcare, and e-commerce. Government initiatives like Make in India, Startup India, and PLI schemes provide incentives and support. Investment options range from startups and SMEs to established companies and joint ventures. India's young workforce, digital infrastructure, and growing middle class create favorable conditions for business growth and returns.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    highlights: ["Large market", "Government incentives", "Tech ecosystem", "High growth"]
  }
];

const investmentTypes = [
  {
    title: "Startup Investments",
    description: "Early-stage investments in high-growth potential startups",
    features: ["Seed funding", "Series A/B rounds", "Angel investing", "Venture capital"],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
  },
  {
    title: "SME Acquisitions",
    description: "Acquire established small and medium enterprises",
    features: ["Business valuation", "Due diligence", "Deal structuring", "Integration support"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
  },
  {
    title: "Franchise Opportunities",
    description: "Invest in proven franchise business models",
    features: ["Franchise selection", "Territory rights", "Training support", "Brand leverage"],
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop"
  },
  {
    title: "Joint Ventures",
    description: "Strategic partnerships and collaborative investments",
    features: ["Partner matching", "Agreement structuring", "Risk sharing", "Market entry"],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop"
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "High Returns",
    description: "Potential for significant capital appreciation"
  },
  {
    icon: Building,
    title: "Asset Building",
    description: "Create tangible business assets and equity"
  },
  {
    icon: Users,
    title: "Active Involvement",
    description: "Opportunity to guide business direction"
  },
  {
    icon: Target,
    title: "Strategic Growth",
    description: "Scale businesses across markets"
  }
];

const processSteps = [
  { step: "01", title: "Investment Goals", description: "Define objectives, risk appetite, and investment criteria" },
  { step: "02", title: "Opportunity Sourcing", description: "Identify and evaluate potential business investments" },
  { step: "03", title: "Due Diligence", description: "Comprehensive analysis of business, financials, and market" },
  { step: "04", title: "Valuation & Negotiation", description: "Determine fair value and negotiate terms" },
  { step: "05", title: "Deal Structuring", description: "Structure investment for optimal returns and protection" },
  { step: "06", title: "Post-Investment Support", description: "Ongoing monitoring and strategic guidance" }
];

const faqs = [
  {
    question: "What is the minimum investment for business investments?",
    answer: "Minimum varies by opportunity type: UK startups through SEIS start from £10,000, Hong Kong businesses from HK$500,000, Indian startups from ₹10 lakhs. SME acquisitions typically require £100,000-500,000 depending on business size and market."
  },
  {
    question: "What returns can I expect from business investments?",
    answer: "Returns vary significantly based on business type and stage. Startups can offer 10-50x returns but with higher risk. Established SMEs typically provide 15-25% annual returns. Franchises offer 12-20% returns with lower risk. We help match investments to your risk-return profile."
  },
  {
    question: "How involved do I need to be in the business?",
    answer: "Involvement level depends on investment type. Passive investors can invest through funds or as silent partners. Active investors can take board positions or management roles. We help structure investments based on your desired involvement level."
  },
  {
    question: "What are the tax implications of business investments?",
    answer: "UK offers SEIS/EIS tax relief (30-50% income tax relief). Hong Kong has low corporate tax (16.5%) and no capital gains tax. India provides startup tax exemptions and capital gains benefits. We provide tax-efficient structuring for all investments."
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

const BusinessInvestments = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop" 
            alt="Business Investments" 
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
              Business <span className="text-accent">Investments</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8"
            >
              Invest in high-growth businesses across UK, Hong Kong, and India. From startups to established enterprises, find opportunities that match your goals.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                  Explore Opportunities <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Regional Opportunities */}
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
              Business Investment Markets
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Strategic business opportunities across three dynamic markets
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
                      <h4 className="font-semibold text-foreground mb-3">Key Advantages:</h4>
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

      {/* Section 2: Investment Types */}
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
              Types of Business Investments
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Diverse investment options for every strategy
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-white">
                    {type.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
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
              Why Invest in Businesses
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Key benefits of business investments
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
              Six-step approach to business investing
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
                Common questions about business investments
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
              Ready to Invest in Businesses?
            </motion.h2>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Discover high-potential business investment opportunities. Contact our advisors to explore options.
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

export default BusinessInvestments;
