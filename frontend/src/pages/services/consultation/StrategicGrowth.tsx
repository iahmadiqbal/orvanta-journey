import { motion } from "framer-motion";
import { CheckCircle, Rocket, LineChart, Users, Target, ArrowRight, Phone, Mail } from "lucide-react";
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
    planning: {
      title: "Strategic Growth Planning",
      description: "UK growth planning requires balancing innovation with regulatory compliance in a post-Brexit landscape. Success depends on leveraging the UK's strengths in financial services, technology, and creative industries while navigating new trade relationships. Strategic planning must account for regional economic variations, access to venture capital, and the UK's position as a global business hub. Focus areas include sustainable growth, ESG considerations, and digital transformation aligned with UK government initiatives.",
      keyPoints: [
        "Access to Europe's largest venture capital market",
        "Strong government support for innovation and R&D",
        "World-class talent pool from leading universities",
        "Established ecosystem for scale-ups and unicorns"
      ]
    },
    framework: {
      title: "Growth Framework",
      steps: [
        { step: "Vision & Goals", desc: "Define clear 3-5 year vision with measurable objectives. Align stakeholders on growth targets and success metrics.", icon: Target },
        { step: "Market Analysis", desc: "Conduct comprehensive market research, competitive analysis, and identify growth opportunities in UK and international markets.", icon: LineChart },
        { step: "Resource Planning", desc: "Assess financial, human, and technological resources needed. Develop funding strategy including VC, grants, and debt financing.", icon: Users },
        { step: "Execution Roadmap", desc: "Create detailed implementation plan with milestones, KPIs, and accountability structures for systematic growth.", icon: Rocket }
      ]
    },
    actionable: {
      title: "Actionable Steps",
      actions: [
        { action: "Secure Growth Funding", desc: "Access UK venture capital, apply for Innovate UK grants, utilize British Business Bank schemes, explore EIS/SEIS for investor tax relief." },
        { action: "Build Strategic Partnerships", desc: "Form alliances with corporates, join accelerator programs, partner with universities for R&D, leverage industry associations." },
        { action: "Scale Operations", desc: "Implement scalable systems, automate processes, expand team strategically, establish regional offices in key UK cities." },
        { action: "International Expansion", desc: "Leverage UK Export Finance, enter new markets through strategic partnerships, utilize UK's trade agreements and FTAs." },
        { action: "Innovation & R&D", desc: "Claim R&D tax credits, collaborate with UK research institutions, develop IP strategy, invest in product development." }
      ]
    },
    needs: {
      title: "Customer Needs Focus",
      requirements: [
        "Sustainable and profitable growth strategies",
        "Access to funding and investment opportunities",
        "Scalable operational frameworks",
        "Market expansion guidance",
        "Risk management during growth phases",
        "Talent acquisition and retention strategies"
      ]
    },
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop"
  },
  {
    title: "Hong Kong",
    planning: {
      title: "Strategic Growth Planning",
      description: "Hong Kong's strategic position as Asia's financial hub and gateway to China creates unique growth opportunities. Planning must leverage the city's advantages in financial services, logistics, and professional services while capitalizing on Greater Bay Area integration. Success requires understanding both Western and Chinese business practices, navigating cross-border regulations, and utilizing Hong Kong's extensive network of free trade agreements and double taxation treaties.",
      keyPoints: [
        "Gateway to 1.4 billion Chinese consumers",
        "Simple tax system with competitive rates",
        "World-class financial and legal infrastructure",
        "Strategic location in Asia-Pacific region"
      ]
    },
    framework: {
      title: "Growth Framework",
      steps: [
        { step: "Market Positioning", desc: "Position Hong Kong entity as regional headquarters. Leverage city's reputation for establishing credibility in Asia-Pacific markets.", icon: Target },
        { step: "GBA Integration", desc: "Develop Greater Bay Area strategy connecting Hong Kong with Shenzhen, Guangzhou, and other GBA cities for expanded market access.", icon: LineChart },
        { step: "Cross-Border Strategy", desc: "Create efficient Hong Kong-mainland China operational structure. Utilize CEPA benefits and streamlined customs procedures.", icon: Users },
        { step: "Scaling Plan", desc: "Develop phased expansion across Asia-Pacific. Leverage Hong Kong's connectivity and business infrastructure for regional growth.", icon: Rocket }
      ]
    },
    actionable: {
      title: "Actionable Steps",
      actions: [
        { action: "Establish Regional HQ", desc: "Set up Hong Kong company as Asia-Pacific headquarters. Benefit from territorial tax system and extensive tax treaty network." },
        { action: "Access China Market", desc: "Utilize Hong Kong as springboard to mainland China. Leverage CEPA agreements, establish Shenzhen/Guangzhou presence for manufacturing/R&D." },
        { action: "Financial Optimization", desc: "Set up efficient treasury management, utilize Hong Kong's banking infrastructure, implement multi-currency strategies." },
        { action: "Talent Strategy", desc: "Recruit international talent, utilize Quality Migrant Admission Scheme, build diverse team with China market expertise." },
        { action: "Partnership Development", desc: "Form strategic alliances with mainland Chinese companies, join Hong Kong Trade Development Council programs, leverage business networks." }
      ]
    },
    needs: {
      title: "Customer Needs Focus",
      requirements: [
        "China market entry strategies",
        "Cross-border operational efficiency",
        "Tax-efficient structure setup",
        "Regional expansion guidance",
        "Regulatory compliance support",
        "Banking and financial infrastructure access"
      ]
    },
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop"
  },
  {
    title: "India",
    planning: {
      title: "Strategic Growth Planning",
      description: "India's rapid economic growth and massive domestic market present extraordinary opportunities for strategic expansion. Planning must account for India's diverse regional markets, complex regulatory environment, and rapidly evolving digital landscape. Success requires understanding local consumer behavior, navigating state-level variations, and leveraging government initiatives like Make in India, Digital India, and Production Linked Incentive schemes. Growth strategies must balance aggressive expansion with sustainable profitability.",
      keyPoints: [
        "1.4 billion population with growing middle class",
        "Fastest-growing major economy globally",
        "Government incentives and startup ecosystem support",
        "Massive digital adoption and mobile-first market"
      ]
    },
    framework: {
      title: "Growth Framework",
      steps: [
        { step: "Market Segmentation", desc: "Identify target segments across tier-1, tier-2, tier-3 cities. Understand regional preferences and purchasing power variations.", icon: Target },
        { step: "Phased Expansion", desc: "Start with metros, expand to tier-2 cities, then tier-3. Adapt business model for each market segment with localized strategies.", icon: LineChart },
        { step: "Digital Integration", desc: "Leverage India's digital infrastructure - UPI, Aadhaar, digital lending. Build mobile-first customer engagement strategies.", icon: Users },
        { step: "Scalable Model", desc: "Develop franchise/partnership models for rapid expansion. Create systems that work across diverse Indian markets.", icon: Rocket }
      ]
    },
    actionable: {
      title: "Actionable Steps",
      actions: [
        { action: "Leverage PLI Schemes", desc: "Apply for Production Linked Incentive schemes in manufacturing. Access government subsidies and tax benefits for eligible sectors." },
        { action: "Startup India Benefits", desc: "Register under Startup India for tax holidays, easier compliance, and access to government tenders. Utilize Fund of Funds scheme." },
        { action: "Multi-City Strategy", desc: "Establish presence in multiple cities to diversify risk. Leverage cost advantages of tier-2 cities for operations." },
        { action: "Technology Adoption", desc: "Implement Indian tech stack - UPI payments, WhatsApp Business, local logistics platforms. Integrate with India Stack for seamless operations." },
        { action: "Funding Access", desc: "Tap into India's growing VC ecosystem, apply for SIDBI schemes, utilize government startup funds, explore debt financing options." }
      ]
    },
    needs: {
      title: "Customer Needs Focus",
      requirements: [
        "Rapid yet sustainable growth strategies",
        "Multi-city expansion planning",
        "Government incentive maximization",
        "Cost-effective scaling solutions",
        "Digital transformation guidance",
        "Funding and investment access"
      ]
    },
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop"
  }
];

const StrategicGrowth = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop" 
            alt="Strategic Growth Planning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/75" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl mx-auto text-center">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-6">
              Strategic Growth <span className="text-accent">Planning</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Comprehensive growth planning services for UK, Hong Kong, and India. Transform your vision into actionable strategies for sustainable business growth.
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
          {/* Section 1: Planning Overview */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-background" : "py-20 lg:py-28 bg-muted"}>
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeLeft} custom={0}>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">{region.title}</h2>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{region.planning.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{region.planning.description}</p>
                  <div className="space-y-3">
                    {region.planning.keyPoints.map((point, idx) => (
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

          {/* Section 2: Growth Framework */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-muted" : "py-20 lg:py-28 bg-background"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                  <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
                    {region.framework.title} - {region.title}
                  </motion.h3>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-6">
                  {region.framework.steps.map((item, i) => (
                    <motion.div key={item.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                      className="bg-card rounded-xl p-6 card-elevated border border-border flex gap-4">
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                          <item.icon className="text-secondary" size={24} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-foreground mb-2">{item.step}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Actionable Steps */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-background" : "py-20 lg:py-28 bg-muted"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                  <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
                    {region.actionable.title} - {region.title}
                  </motion.h3>
                </motion.div>
                <div className="space-y-6">
                  {region.actionable.actions.map((item, i) => (
                    <motion.div key={item.action} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                      className="bg-card rounded-xl p-6 card-elevated border border-border">
                      <h4 className="font-heading font-bold text-lg text-foreground mb-2">{item.action}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Customer Needs */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-muted" : "py-20 lg:py-28 bg-background"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                  <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
                    {region.needs.title} - {region.title}
                  </motion.h3>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                  className="bg-card rounded-2xl p-8 card-elevated border border-border">
                  <div className="grid md:grid-cols-2 gap-4">
                    {region.needs.requirements.map((need, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{need}</span>
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
              Ready to Plan Your Growth?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
              Get expert strategic growth planning services tailored to UK, Hong Kong, and India markets.
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

export default StrategicGrowth;
