import { motion } from "framer-motion";
import { Shield, AlertTriangle, TrendingUp, FileText, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

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
    introduction: {
      title: "Introduction to Risk Management",
      description: "UK risk management operates within a sophisticated regulatory framework governed by the Financial Conduct Authority (FCA), Prudential Regulation Authority (PRA), and Companies Act 2006. British businesses must comply with stringent corporate governance codes, including the UK Corporate Governance Code and risk management standards set by the Institute of Risk Management (IRM). The UK's approach emphasizes proactive risk identification, board-level oversight, and integration of risk management into strategic decision-making processes.",
      keyPoints: [
        "FCA and PRA regulatory compliance mandatory",
        "Board-level risk committees required for listed companies",
        "Emphasis on enterprise risk management (ERM) frameworks",
        "Strong focus on financial crime prevention and AML compliance"
      ]
    },
    risks: {
      title: "Types of Risks",
      list: [
        { type: "Regulatory Risk", desc: "Non-compliance with FCA/PRA regulations, GDPR violations, Brexit-related regulatory changes", severity: "High" },
        { type: "Financial Risk", desc: "Market volatility, currency fluctuations post-Brexit, interest rate changes, credit risk", severity: "High" },
        { type: "Operational Risk", desc: "Business continuity failures, supply chain disruptions, cybersecurity threats", severity: "Medium" },
        { type: "Reputational Risk", desc: "Brand damage from ESG failures, social media crises, corporate governance scandals", severity: "Medium" },
        { type: "Legal Risk", desc: "Contract disputes, employment tribunal claims, intellectual property infringement", severity: "Medium" }
      ]
    },
    mitigation: {
      title: "Mitigation Strategies",
      strategies: [
        { strategy: "Regulatory Compliance Program", desc: "Implement comprehensive FCA/PRA compliance frameworks with regular audits and staff training" },
        { strategy: "Financial Hedging", desc: "Use derivatives and hedging instruments to manage currency and interest rate risks" },
        { strategy: "Cyber Security Framework", desc: "Deploy ISO 27001-certified security systems with regular penetration testing" },
        { strategy: "Insurance Coverage", desc: "Maintain professional indemnity, D&O, and cyber insurance policies" },
        { strategy: "Business Continuity Planning", desc: "Develop and test BCP/DR plans aligned with ISO 22301 standards" }
      ]
    },
    caseStudies: {
      title: "Case Studies",
      cases: [
        {
          title: "London FinTech Regulatory Compliance",
          scenario: "A London-based fintech startup faced potential FCA sanctions for inadequate AML controls.",
          solution: "Implemented comprehensive AML/KYC framework, appointed MLRO, conducted staff training, and established transaction monitoring systems.",
          outcome: "Achieved full FCA compliance, avoided sanctions, and secured additional funding from institutional investors."
        },
        {
          title: "Manufacturing Supply Chain Risk",
          scenario: "UK manufacturer experienced supply chain disruptions post-Brexit affecting production timelines.",
          solution: "Diversified supplier base across EU and non-EU countries, implemented inventory buffer strategies, and negotiated flexible contracts.",
          outcome: "Reduced supply chain dependency by 40%, maintained production schedules, and improved profit margins by 15%."
        }
      ]
    },
    bestPractices: {
      title: "Best Practices & Guidelines",
      practices: [
        "Establish board-level risk committee with independent non-executive directors",
        "Conduct annual enterprise-wide risk assessments using ISO 31000 framework",
        "Implement three lines of defense model for risk governance",
        "Maintain comprehensive risk register with regular updates and board reporting",
        "Ensure adequate insurance coverage including cyber, D&O, and professional indemnity",
        "Develop crisis management and business continuity plans tested annually",
        "Integrate ESG risks into overall risk management framework"
      ]
    },
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop"
  },
  {
    title: "Hong Kong",
    introduction: {
      title: "Introduction to Risk Management",
      description: "Hong Kong's risk management landscape is shaped by its role as Asia's premier financial hub and its unique political position. The Hong Kong Monetary Authority (HKMA), Securities and Futures Commission (SFC), and Insurance Authority oversee risk management practices. Hong Kong businesses must navigate risks related to mainland China relations, regional geopolitics, and international financial regulations. The city's risk management approach balances Western corporate governance standards with Asian business practices, emphasizing financial stability and cross-border risk considerations.",
      keyPoints: [
        "HKMA and SFC regulatory oversight for financial institutions",
        "Cross-border risk management with mainland China focus",
        "Strong emphasis on anti-money laundering and counter-terrorism financing",
        "Integration of Chinese and international risk management standards"
      ]
    },
    risks: {
      title: "Types of Risks",
      list: [
        { type: "Political Risk", desc: "Geopolitical tensions, policy changes affecting HK-China relations, international sanctions", severity: "High" },
        { type: "Regulatory Risk", desc: "Evolving financial regulations, mainland China regulatory alignment, compliance complexity", severity: "High" },
        { type: "Currency Risk", desc: "HKD peg stability, RMB fluctuations, cross-border capital flow restrictions", severity: "Medium" },
        { type: "Market Risk", desc: "Stock market volatility, property market fluctuations, regional economic slowdowns", severity: "Medium" },
        { type: "Operational Risk", desc: "Talent retention challenges, office space costs, technology infrastructure dependencies", severity: "Medium" }
      ]
    },
    mitigation: {
      title: "Mitigation Strategies",
      strategies: [
        { strategy: "Political Risk Assessment", desc: "Regular monitoring of HK-China policy developments and scenario planning for regulatory changes" },
        { strategy: "Regulatory Compliance Framework", desc: "Implement dual compliance systems for HK and mainland China requirements" },
        { strategy: "Currency Hedging", desc: "Use forward contracts and options to manage HKD and RMB exposure" },
        { strategy: "Business Diversification", desc: "Expand operations across ASEAN markets to reduce Hong Kong concentration risk" },
        { strategy: "Talent Management", desc: "Develop retention programs and cross-border talent mobility strategies" }
      ]
    },
    caseStudies: {
      title: "Case Studies",
      cases: [
        {
          title: "Financial Services Regulatory Adaptation",
          scenario: "Hong Kong investment firm needed to adapt to new mainland China cross-border investment regulations.",
          solution: "Established dedicated compliance team for mainland regulations, obtained necessary licenses, and implemented dual reporting systems.",
          outcome: "Successfully maintained operations in both markets, increased mainland client base by 60%, and achieved full regulatory compliance."
        },
        {
          title: "Property Developer Market Risk Management",
          scenario: "HK property developer faced significant exposure to market downturn and policy tightening.",
          solution: "Diversified portfolio into commercial and industrial properties, expanded to Greater Bay Area, and implemented dynamic pricing strategies.",
          outcome: "Reduced residential exposure from 80% to 50%, maintained profitability during market correction, and secured new growth opportunities."
        }
      ]
    },
    bestPractices: {
      title: "Best Practices & Guidelines",
      practices: [
        "Maintain strong relationships with both HK and mainland China regulators",
        "Implement comprehensive AML/CTF programs exceeding FATF recommendations",
        "Develop contingency plans for various political and regulatory scenarios",
        "Diversify business operations across Greater Bay Area and ASEAN markets",
        "Invest in bilingual compliance and risk management teams",
        "Regular stress testing for currency, market, and liquidity risks",
        "Establish crisis communication protocols for stakeholder management"
      ]
    },
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop"
  },
  {
    title: "India",
    introduction: {
      title: "Introduction to Risk Management",
      description: "India's risk management framework is evolving rapidly, driven by economic growth, digital transformation, and regulatory reforms. The Reserve Bank of India (RBI), Securities and Exchange Board of India (SEBI), and Insurance Regulatory and Development Authority of India (IRDAI) govern risk management practices. Indian businesses face unique challenges including regulatory complexity across states, infrastructure constraints, and rapid technological change. The Companies Act 2013 mandates risk management committees for listed companies, reflecting India's commitment to strengthening corporate governance and risk oversight.",
      keyPoints: [
        "RBI, SEBI, and IRDAI regulatory frameworks",
        "Mandatory risk management committees for listed companies",
        "Focus on operational and infrastructure risks",
        "Emphasis on digital transformation and cyber security risks"
      ]
    },
    risks: {
      title: "Types of Risks",
      list: [
        { type: "Regulatory Risk", desc: "Complex multi-layered regulations, GST compliance, frequent policy changes, state-level variations", severity: "High" },
        { type: "Operational Risk", desc: "Infrastructure challenges, supply chain inefficiencies, power supply disruptions, logistics issues", severity: "High" },
        { type: "Cyber Security Risk", desc: "Increasing digital threats, data privacy concerns, payment fraud, ransomware attacks", severity: "High" },
        { type: "Financial Risk", desc: "Currency volatility, credit risk, working capital management, NPAs for lenders", severity: "Medium" },
        { type: "Compliance Risk", desc: "Labor law compliance, environmental regulations, tax audits, corporate governance requirements", severity: "Medium" }
      ]
    },
    mitigation: {
      title: "Mitigation Strategies",
      strategies: [
        { strategy: "Regulatory Compliance System", desc: "Implement automated compliance tracking for central and state regulations with regular legal updates" },
        { strategy: "Infrastructure Resilience", desc: "Invest in backup power systems, alternative logistics routes, and local supplier networks" },
        { strategy: "Cyber Security Program", desc: "Deploy multi-layered security with ISO 27001 certification and regular security audits" },
        { strategy: "Financial Risk Management", desc: "Implement robust credit assessment, working capital optimization, and currency hedging strategies" },
        { strategy: "Compliance Automation", desc: "Use technology platforms for GST, labor law, and environmental compliance management" }
      ]
    },
    caseStudies: {
      title: "Case Studies",
      cases: [
        {
          title: "E-commerce Platform Cyber Security",
          scenario: "Major Indian e-commerce platform faced increasing cyber attacks and data breach attempts affecting customer trust.",
          solution: "Implemented comprehensive cyber security framework with AI-powered threat detection, employee training, and incident response protocols.",
          outcome: "Reduced security incidents by 75%, achieved ISO 27001 certification, and restored customer confidence with zero data breaches in 18 months."
        },
        {
          title: "Manufacturing GST Compliance",
          scenario: "Multi-state manufacturer struggled with GST compliance across 15 states, facing penalties and audit notices.",
          solution: "Deployed automated GST compliance software, centralized tax team, conducted staff training, and engaged state-specific tax consultants.",
          outcome: "Achieved 100% GST compliance, eliminated penalties, reduced compliance costs by 30%, and improved cash flow through timely input tax credit claims."
        }
      ]
    },
    bestPractices: {
      title: "Best Practices & Guidelines",
      practices: [
        "Establish dedicated compliance teams for central and state-level regulations",
        "Invest in digital infrastructure and backup systems for operational continuity",
        "Implement comprehensive cyber security programs with regular employee training",
        "Maintain strong relationships with local authorities and regulatory bodies",
        "Use technology platforms for automated compliance and risk monitoring",
        "Develop contingency plans for infrastructure failures and supply chain disruptions",
        "Regular internal audits and third-party risk assessments"
      ]
    },
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop"
  }
];

const RiskManagement = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop" 
            alt="Risk Management" 
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
              Risk <span className="text-accent">Management</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8"
            >
              Comprehensive risk management solutions for businesses in UK, Hong Kong, and India. Identify, assess, and mitigate risks to protect your business and ensure sustainable growth.
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

      {/* Regional Risk Management Services */}
      {regions.map((region, regionIndex) => (
        <div key={region.title}>
          {/* Section 1: Introduction */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-background" : "py-20 lg:py-28 bg-muted"}>
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <motion.div variants={fadeLeft} custom={0}>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                    {region.title}
                  </h2>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                    {region.introduction.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {region.introduction.description}
                  </p>
                  <div className="space-y-3">
                    {region.introduction.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Shield size={20} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div variants={fadeRight} custom={0} className="relative h-96 rounded-2xl overflow-hidden">
                  <img 
                    src={region.image} 
                    alt={region.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Section 2: Types of Risks */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-muted" : "py-20 lg:py-28 bg-background"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                  <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
                    {region.risks.title} - {region.title}
                  </motion.h3>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-6">
                  {region.risks.list.map((risk, i) => (
                    <motion.div key={risk.type} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                      className="bg-card rounded-xl p-6 card-elevated border border-border">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-heading font-bold text-lg text-foreground">{risk.type}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          risk.severity === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>{risk.severity}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{risk.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Mitigation Strategies */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-background" : "py-20 lg:py-28 bg-muted"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                  <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
                    {region.mitigation.title} - {region.title}
                  </motion.h3>
                </motion.div>
                <div className="space-y-6">
                  {region.mitigation.strategies.map((item, i) => (
                    <motion.div key={item.strategy} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                      className="bg-card rounded-xl p-6 card-elevated border border-border flex gap-4">
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                          <TrendingUp className="text-secondary" size={24} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-foreground mb-2">{item.strategy}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Case Studies */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-muted" : "py-20 lg:py-28 bg-background"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                  <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
                    {region.caseStudies.title} - {region.title}
                  </motion.h3>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-8">
                  {region.caseStudies.cases.map((caseStudy, i) => (
                    <motion.div key={caseStudy.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                      className="bg-card rounded-xl p-6 card-elevated border border-border">
                      <h4 className="font-heading font-bold text-xl text-foreground mb-4">{caseStudy.title}</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-secondary mb-1">Scenario:</p>
                          <p className="text-sm text-muted-foreground">{caseStudy.scenario}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-secondary mb-1">Solution:</p>
                          <p className="text-sm text-muted-foreground">{caseStudy.solution}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-secondary mb-1">Outcome:</p>
                          <p className="text-sm text-muted-foreground">{caseStudy.outcome}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Best Practices */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-background" : "py-20 lg:py-28 bg-muted"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                  <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
                    {region.bestPractices.title} - {region.title}
                  </motion.h3>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                  className="bg-card rounded-2xl p-8 card-elevated border border-border">
                  <div className="space-y-4">
                    {region.bestPractices.practices.map((practice, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{practice}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Need Risk Management Support?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
              Protect your business with expert risk management services tailored to UK, Hong Kong, and India markets.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90">
                  <Phone className="mr-2" size={20} />
                  Contact Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                  <Mail className="mr-2" size={20} />
                  Email Inquiry
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default RiskManagement;
