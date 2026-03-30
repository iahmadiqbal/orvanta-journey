import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Target, Zap, BarChart3, ArrowRight, Phone, Mail, ChevronDown } from "lucide-react";
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
    overview: {
      title: "Expansion & Optimization Overview",
      description: "UK business expansion requires strategic planning within a mature, competitive market. Post-Brexit, UK businesses face new opportunities in global trade while navigating regulatory changes. Optimization focuses on operational efficiency, digital transformation, and leveraging the UK's strong financial services sector. Success requires understanding regional variations across England, Scotland, Wales, and Northern Ireland, each with distinct business environments and incentives.",
      keyPoints: [
        "Post-Brexit trade opportunities and challenges",
        "Regional development grants and incentives available",
        "Strong focus on digital transformation and innovation",
        "Access to skilled workforce and world-class universities"
      ]
    },
    strategies: {
      title: "Expansion Strategies",
      list: [
        { strategy: "Geographic Expansion", desc: "Expand to Scotland, Wales, Northern Ireland with regional incentives. Leverage Enterprise Zones and Freeports for tax benefits.", icon: Target },
        { strategy: "Digital Transformation", desc: "Implement cloud solutions, AI, and automation. Access UK government's Digital Growth Programme and innovation grants.", icon: Zap },
        { strategy: "Market Diversification", desc: "Enter new sectors or customer segments. Utilize UK Export Finance for international expansion support.", icon: TrendingUp },
        { strategy: "Strategic Partnerships", desc: "Form alliances with UK universities, research institutions, and established businesses for growth acceleration.", icon: CheckCircle }
      ]
    },
    optimization: {
      title: "Optimization Processes",
      processes: [
        { process: "Operational Efficiency", desc: "Streamline operations using lean methodologies. Reduce costs through process automation and supply chain optimization." },
        { process: "Financial Optimization", desc: "Improve cash flow management, optimize tax structure using R&D tax credits, and access growth funding through UK schemes." },
        { process: "Technology Integration", desc: "Adopt Industry 4.0 technologies, implement ERP systems, and leverage UK's strong tech ecosystem for competitive advantage." },
        { process: "Talent Optimization", desc: "Attract top talent through competitive packages, utilize apprenticeship levy, and implement flexible working arrangements." },
        { process: "Regulatory Compliance", desc: "Ensure compliance with UK regulations, GDPR, and industry-specific standards while optimizing compliance costs." }
      ]
    },
    examples: {
      title: "Success Examples",
      cases: [
        {
          title: "Tech Startup Scale-Up",
          challenge: "London-based SaaS company needed to scale operations while maintaining service quality and managing costs.",
          solution: "Implemented cloud infrastructure, automated customer onboarding, expanded to Manchester tech hub for cost-effective talent, secured Innovate UK grant.",
          results: "300% revenue growth, 40% cost reduction, expanded team from 15 to 75 employees, entered 5 new European markets."
        },
        {
          title: "Manufacturing Optimization",
          challenge: "Midlands manufacturer facing rising costs and competition from overseas, needed operational efficiency improvements.",
          solution: "Deployed IoT sensors for predictive maintenance, automated quality control, relocated to Enterprise Zone, claimed R&D tax credits.",
          results: "25% production cost reduction, 50% decrease in downtime, £200K annual tax savings, improved profit margins by 15%."
        }
      ]
    },
    support: {
      title: "Our Support Services",
      services: [
        "Comprehensive market analysis and feasibility studies",
        "Business plan development and financial modeling",
        "Access to UK government grants and funding programs",
        "Partnership and acquisition opportunity identification",
        "Operational audit and efficiency improvement recommendations",
        "Technology implementation and digital transformation support",
        "Regulatory compliance and legal structure optimization"
      ]
    },
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop"
  },
  {
    title: "Hong Kong",
    overview: {
      title: "Expansion & Optimization Overview",
      description: "Hong Kong serves as the premier gateway for businesses expanding into Asia-Pacific and mainland China. The city's strategic location, free-market economy, and robust legal system make it ideal for regional headquarters. Optimization in Hong Kong focuses on leveraging its position as a financial hub, utilizing efficient business infrastructure, and navigating the unique opportunities of the Greater Bay Area initiative connecting Hong Kong with mainland Chinese cities.",
      keyPoints: [
        "Gateway to mainland China and Asia-Pacific markets",
        "Simple tax system with low corporate tax rates (16.5%)",
        "World-class banking and financial infrastructure",
        "Greater Bay Area integration opportunities"
      ]
    },
    strategies: {
      title: "Expansion Strategies",
      list: [
        { strategy: "Greater Bay Area Expansion", desc: "Leverage GBA initiative to access 86 million consumers. Establish operations in Shenzhen, Guangzhou for manufacturing and R&D.", icon: Target },
        { strategy: "Regional HQ Setup", desc: "Position Hong Kong as Asia-Pacific headquarters. Benefit from territorial tax system and extensive double tax treaties.", icon: Zap },
        { strategy: "Cross-Border E-commerce", desc: "Tap into China's massive e-commerce market through Hong Kong's logistics infrastructure and cross-border payment systems.", icon: TrendingUp },
        { strategy: "Financial Services Expansion", desc: "Utilize Hong Kong's status as international financial center for wealth management, fintech, and investment services.", icon: CheckCircle }
      ]
    },
    optimization: {
      title: "Optimization Processes",
      processes: [
        { process: "Tax Structure Optimization", desc: "Leverage Hong Kong's territorial tax system, offshore profits exemption, and extensive tax treaty network for maximum efficiency." },
        { process: "Supply Chain Efficiency", desc: "Optimize logistics using Hong Kong's world-class port and airport infrastructure. Implement just-in-time inventory management." },
        { process: "Cross-Border Operations", desc: "Streamline Hong Kong-mainland China operations using CEPA agreements, simplified customs procedures, and efficient payment systems." },
        { process: "Talent Management", desc: "Access diverse talent pool, implement competitive compensation packages, utilize Quality Migrant Admission Scheme for key hires." },
        { process: "Banking Optimization", desc: "Leverage Hong Kong's banking infrastructure for multi-currency accounts, trade finance, and efficient international transactions." }
      ]
    },
    examples: {
      title: "Success Examples",
      cases: [
        {
          title: "E-commerce Platform Expansion",
          challenge: "International e-commerce company wanted to enter China market while maintaining global operations base.",
          solution: "Established Hong Kong entity as regional HQ, set up Shenzhen subsidiary for China operations, utilized cross-border e-commerce framework.",
          results: "Successfully entered China market with 50M users in first year, maintained tax-efficient structure, seamless cross-border payments."
        },
        {
          title: "Financial Services Optimization",
          challenge: "Asset management firm needed to optimize operations across Asia while ensuring regulatory compliance.",
          solution: "Consolidated regional operations in Hong Kong, obtained SFC licenses, implemented efficient fund administration structure.",
          results: "30% operational cost reduction, improved regulatory compliance, expanded AUM by 200%, entered 8 new Asian markets."
        }
      ]
    },
    support: {
      title: "Our Support Services",
      services: [
        "Greater Bay Area market entry and expansion strategies",
        "Hong Kong company formation and licensing support",
        "Cross-border business structure optimization",
        "Mainland China market access consultation",
        "Banking and financial infrastructure setup",
        "Tax planning and offshore structure optimization",
        "Bilingual business support (English and Chinese)"
      ]
    },
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop"
  },
  {
    title: "India",
    overview: {
      title: "Expansion & Optimization Overview",
      description: "India represents one of the world's fastest-growing major economies with a massive domestic market of 1.4 billion consumers. Expansion opportunities span from tier-1 metros to emerging tier-2 and tier-3 cities. The government's 'Make in India' and 'Digital India' initiatives provide substantial incentives. Optimization in India focuses on navigating complex regulatory environments, managing diverse state-level regulations, leveraging cost advantages, and tapping into India's skilled workforce and growing middle class.",
      keyPoints: [
        "Massive domestic market with growing middle class",
        "Government incentives through PLI schemes and startup programs",
        "Cost-effective operations with skilled workforce",
        "Rapid digital adoption and technology infrastructure growth"
      ]
    },
    strategies: {
      title: "Expansion Strategies",
      list: [
        { strategy: "Multi-City Expansion", desc: "Expand beyond metros to tier-2/3 cities like Pune, Ahmedabad, Jaipur. Access lower costs and untapped markets with government incentives.", icon: Target },
        { strategy: "Digital-First Approach", desc: "Leverage India's digital infrastructure - UPI payments, Aadhaar, digital lending. Reach customers through mobile-first strategies.", icon: Zap },
        { strategy: "Manufacturing Setup", desc: "Utilize PLI schemes for manufacturing. Set up in industrial corridors with infrastructure support and tax holidays.", icon: TrendingUp },
        { strategy: "Franchise/Partnership Model", desc: "Expand through local partnerships and franchising. Leverage local knowledge while maintaining brand standards.", icon: CheckCircle }
      ]
    },
    optimization: {
      title: "Optimization Processes",
      processes: [
        { process: "Cost Structure Optimization", desc: "Reduce operational costs through strategic location selection, vendor negotiations, and process automation. Leverage India's cost advantages." },
        { process: "Regulatory Compliance", desc: "Streamline GST compliance, labor law adherence, and state-level regulations. Use technology platforms for automated compliance management." },
        { process: "Supply Chain Efficiency", desc: "Optimize logistics using India's improving infrastructure. Implement warehouse management systems and last-mile delivery optimization." },
        { process: "Talent Acquisition", desc: "Access India's vast talent pool through strategic hiring in tech hubs. Implement retention programs to reduce attrition." },
        { process: "Technology Leverage", desc: "Adopt Indian tech solutions for payments, logistics, and customer engagement. Integrate with India Stack for seamless operations." }
      ]
    },
    examples: {
      title: "Success Examples",
      cases: [
        {
          title: "Retail Chain Expansion",
          challenge: "National retail brand wanted to expand from 50 to 200 stores across India while maintaining profitability.",
          solution: "Implemented hub-and-spoke model, expanded to tier-2 cities, optimized supply chain, adopted omnichannel strategy with digital integration.",
          results: "Achieved 200-store milestone in 18 months, 35% reduction in logistics costs, 50% online sales growth, maintained healthy margins."
        },
        {
          title: "IT Services Optimization",
          challenge: "Mid-sized IT company facing margin pressure and high attrition, needed operational efficiency improvements.",
          solution: "Opened development centers in tier-2 cities (Indore, Coimbatore), automated HR processes, implemented employee retention programs, optimized project management.",
          results: "40% reduction in operational costs, attrition dropped from 25% to 12%, improved project delivery by 30%, doubled profit margins."
        }
      ]
    },
    support: {
      title: "Our Support Services",
      services: [
        "Market entry strategy for tier-1, tier-2, and tier-3 cities",
        "Government incentive and PLI scheme application support",
        "Multi-state regulatory compliance management",
        "Partnership and franchise model development",
        "Supply chain and logistics optimization",
        "Technology implementation and digital transformation",
        "Talent acquisition and HR optimization strategies"
      ]
    },
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop"
  }
];

const ExpansionOptimization = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop" 
            alt="Expansion and Optimization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/75" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl mx-auto text-center">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-6">
              Expansion & <span className="text-accent">Optimization</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Strategic expansion and operational optimization services for UK, Hong Kong, and India. Scale your business efficiently while maximizing performance and profitability.
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

      {/* Regional Services */}
      {regions.map((region, regionIndex) => (
        <div key={region.title}>
          {/* Section 1: Overview */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-background" : "py-20 lg:py-28 bg-muted"}>
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeLeft} custom={0}>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">{region.title}</h2>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{region.overview.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{region.overview.description}</p>
                  <div className="space-y-3">
                    {region.overview.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div variants={fadeRight} custom={0} className="relative h-96 rounded-2xl overflow-hidden">
                  <img src={region.image} alt={region.title} className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Section 2: Expansion Strategies */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-muted" : "py-20 lg:py-28 bg-background"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                  <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
                    {region.strategies.title} - {region.title}
                  </motion.h3>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-6">
                  {region.strategies.list.map((item, i) => (
                    <motion.div key={item.strategy} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                      className="bg-card rounded-xl p-6 card-elevated border border-border flex gap-4">
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                          <item.icon className="text-secondary" size={24} />
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

          {/* Section 3: Optimization Processes */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-background" : "py-20 lg:py-28 bg-muted"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                  <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
                    {region.optimization.title} - {region.title}
                  </motion.h3>
                </motion.div>
                <div className="space-y-6">
                  {region.optimization.processes.map((item, i) => (
                    <motion.div key={item.process} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                      className="bg-card rounded-xl p-6 card-elevated border border-border">
                      <h4 className="font-heading font-bold text-lg text-foreground mb-2">{item.process}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Success Examples */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-muted" : "py-20 lg:py-28 bg-background"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                  <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
                    {region.examples.title} - {region.title}
                  </motion.h3>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-8">
                  {region.examples.cases.map((example, i) => (
                    <motion.div key={example.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                      className="bg-card rounded-xl p-6 card-elevated border border-border">
                      <h4 className="font-heading font-bold text-xl text-foreground mb-4">{example.title}</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-secondary mb-1">Challenge:</p>
                          <p className="text-sm text-muted-foreground">{example.challenge}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-secondary mb-1">Solution:</p>
                          <p className="text-sm text-muted-foreground">{example.solution}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-secondary mb-1">Results:</p>
                          <p className="text-sm text-muted-foreground">{example.results}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Support Services */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-background" : "py-20 lg:py-28 bg-muted"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                  <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
                    {region.support.title} - {region.title}
                  </motion.h3>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                  className="bg-card rounded-2xl p-8 card-elevated border border-border">
                  <div className="grid md:grid-cols-2 gap-4">
                    {region.support.services.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{service}</span>
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
              Ready to Expand and Optimize?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
              Get expert consultation for business expansion and operational optimization in UK, Hong Kong, and India.
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

export default ExpansionOptimization;
