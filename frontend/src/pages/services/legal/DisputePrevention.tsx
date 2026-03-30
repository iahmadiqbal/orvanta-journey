import { motion } from "framer-motion";
import { Scale, AlertCircle, FileText, Users, CheckCircle, ArrowRight, Phone, Mail, ChevronDown } from "lucide-react";
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
    introduction: {
      title: "Introduction to Dispute Prevention",
      description: "The UK legal system emphasizes alternative dispute resolution (ADR) and preventive measures to avoid costly litigation. With the Civil Procedure Rules encouraging pre-action protocols and mediation, UK businesses benefit from a structured approach to dispute prevention. The UK courts actively promote settlement through mediation and early neutral evaluation. Understanding UK contract law, employment regulations, and commercial practices is essential for preventing disputes before they escalate to formal legal proceedings.",
      keyPoints: [
        "Pre-action protocols mandatory before litigation",
        "Strong emphasis on mediation and ADR mechanisms",
        "Well-established commercial arbitration framework",
        "Clear contractual documentation reduces disputes significantly"
      ]
    },
    disputes: {
      title: "Common Disputes",
      list: [
        { type: "Commercial Contract Disputes", desc: "Breach of contract, payment disputes, delivery failures, service quality disagreements", frequency: "Very Common" },
        { type: "Employment Disputes", desc: "Unfair dismissal claims, discrimination allegations, wage disputes, redundancy issues", frequency: "Common" },
        { type: "Property Disputes", desc: "Landlord-tenant conflicts, boundary disputes, lease disagreements, dilapidation claims", frequency: "Common" },
        { type: "Intellectual Property Disputes", desc: "Patent infringement, trademark conflicts, copyright violations, trade secret misappropriation", frequency: "Moderate" },
        { type: "Partnership/Shareholder Disputes", desc: "Profit distribution conflicts, management disagreements, breach of fiduciary duty", frequency: "Moderate" }
      ]
    },
    preventive: {
      title: "Preventive Measures",
      measures: [
        { measure: "Comprehensive Contracts", desc: "Draft clear, detailed contracts with explicit terms, conditions, and dispute resolution clauses. Include jurisdiction, governing law, and escalation procedures." },
        { measure: "Regular Legal Audits", desc: "Conduct quarterly reviews of contracts, employment practices, and compliance with UK regulations to identify potential issues early." },
        { measure: "Clear Communication Protocols", desc: "Establish written communication procedures for all business dealings. Document all agreements, changes, and important decisions." },
        { measure: "ADR Clauses", desc: "Include mandatory mediation or arbitration clauses in all contracts to avoid costly court proceedings." },
        { measure: "Employee Training", desc: "Regular training on employment law, discrimination, health & safety, and proper documentation practices." }
      ]
    },
    assistance: {
      title: "Legal Assistance & Support",
      services: [
        "Access to UK-qualified solicitors specializing in commercial and employment law",
        "Mediation services through CEDR-accredited mediators",
        "Arbitration support via London Court of International Arbitration (LCIA)",
        "Pre-action protocol guidance and letter drafting",
        "Contract review and drafting services",
        "Employment tribunal representation and advice",
        "24/7 legal helpline for urgent dispute matters"
      ]
    },
    tips: {
      title: "User Tips & Recommendations",
      recommendations: [
        "Always use written contracts, even for small transactions - verbal agreements are difficult to enforce",
        "Respond promptly to pre-action protocol letters to demonstrate willingness to resolve disputes",
        "Keep detailed records of all business communications, meetings, and agreements",
        "Consider mediation before litigation - it's faster, cheaper, and preserves business relationships",
        "Review and update employment contracts annually to reflect current UK employment law",
        "Use escrow services for high-value transactions to protect both parties",
        "Obtain legal advice early when disputes arise - prevention is cheaper than litigation",
        "Include clear payment terms and late payment penalties in all contracts"
      ]
    },
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop"
  },
  {
    title: "Hong Kong",
    introduction: {
      title: "Introduction to Dispute Prevention",
      description: "Hong Kong's dispute prevention framework combines common law traditions with Asian business practices, emphasizing relationship preservation and face-saving mechanisms. The Hong Kong International Arbitration Centre (HKIAC) is a leading arbitration institution in Asia. Hong Kong's legal system encourages mediation through the Mediation Ordinance and offers efficient court procedures. Understanding the cultural context of business relationships, the importance of guanxi (connections), and bilingual documentation requirements is crucial for effective dispute prevention in Hong Kong.",
      keyPoints: [
        "Strong arbitration culture with HKIAC as regional hub",
        "Mediation Ordinance promotes settlement before litigation",
        "Bilingual legal documentation often required",
        "Cultural emphasis on relationship preservation and face-saving"
      ]
    },
    disputes: {
      title: "Common Disputes",
      list: [
        { type: "Cross-Border Commercial Disputes", desc: "International trade conflicts, payment disputes with mainland China, currency issues, delivery delays", frequency: "Very Common" },
        { type: "Property and Tenancy Disputes", desc: "Commercial lease disputes, rent reviews, management fee conflicts, property damage claims", frequency: "Very Common" },
        { type: "Employment Disputes", desc: "Termination disputes, bonus disagreements, non-compete enforcement, MPF contribution issues", frequency: "Common" },
        { type: "Shareholder Disputes", desc: "Minority shareholder oppression, dividend disputes, director conflicts, company deadlock", frequency: "Common" },
        { type: "Construction Disputes", desc: "Delay claims, quality issues, payment disputes, variation order disagreements", frequency: "Moderate" }
      ]
    },
    preventive: {
      title: "Preventive Measures",
      measures: [
        { measure: "Bilingual Contracts", desc: "Prepare contracts in both English and Chinese with clear precedence clause. Ensure both versions are legally consistent and culturally appropriate." },
        { measure: "HKIAC Arbitration Clauses", desc: "Include Hong Kong arbitration clauses in international contracts. Specify HKIAC rules, seat of arbitration, and language of proceedings." },
        { measure: "Cultural Due Diligence", desc: "Understand business partner's background, reputation, and connections. Conduct thorough due diligence on mainland China partners." },
        { measure: "Payment Security Mechanisms", desc: "Use letters of credit, bank guarantees, or escrow for cross-border transactions. Implement milestone-based payment structures." },
        { measure: "Regular Relationship Management", desc: "Maintain regular communication with business partners. Address concerns promptly before they escalate into formal disputes." }
      ]
    },
    assistance: {
      title: "Legal Assistance & Support",
      services: [
        "Hong Kong solicitors with mainland China practice experience",
        "HKIAC arbitration services and case management",
        "Hong Kong Mediation Centre accredited mediators",
        "Bilingual legal documentation and translation services",
        "Cross-border dispute resolution expertise",
        "China-Appointed Attesting Officers for mainland matters",
        "Commercial litigation support in Hong Kong courts"
      ]
    },
    tips: {
      title: "User Tips & Recommendations",
      recommendations: [
        "Always prepare bilingual contracts for mainland China dealings - Chinese version often takes precedence",
        "Build strong relationships (guanxi) with business partners - personal connections prevent disputes",
        "Use Hong Kong arbitration for international disputes - it's neutral and enforceable in mainland China",
        "Understand cultural differences in negotiation - direct confrontation may damage relationships",
        "Conduct thorough due diligence on mainland partners through local networks and credit agencies",
        "Include clear dispute escalation procedures starting with negotiation, then mediation, then arbitration",
        "Maintain detailed records of all communications, especially WeChat and email exchanges",
        "Seek legal advice early when dealing with cross-border transactions or mainland partners"
      ]
    },
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop"
  },
  {
    title: "India",
    introduction: {
      title: "Introduction to Dispute Prevention",
      description: "India's dispute prevention landscape is evolving with the introduction of the Commercial Courts Act 2015 and emphasis on alternative dispute resolution. The Indian legal system faces challenges with court backlogs, making dispute prevention particularly valuable. The Arbitration and Conciliation Act 1996 (amended 2015, 2019) promotes arbitration, while mediation is gaining acceptance. Understanding India's diverse legal landscape across states, the importance of proper documentation, and the role of relationship-based business practices is essential for effective dispute prevention.",
      keyPoints: [
        "Commercial Courts Act expedites commercial dispute resolution",
        "Arbitration increasingly preferred over litigation",
        "State-level variations in legal procedures and enforcement",
        "Strong emphasis on documentation and written agreements"
      ]
    },
    disputes: {
      title: "Common Disputes",
      list: [
        { type: "Payment and Recovery Disputes", desc: "Delayed payments, bounced cheques, invoice disputes, credit recovery issues", frequency: "Very Common" },
        { type: "Contract Enforcement Disputes", desc: "Breach of contract, non-performance, quality disputes, delivery failures", frequency: "Very Common" },
        { type: "Property and Real Estate Disputes", desc: "Title disputes, possession conflicts, construction delays, builder-buyer disagreements", frequency: "Common" },
        { type: "Partnership and Family Business Disputes", desc: "Profit sharing conflicts, succession issues, management disagreements, asset division", frequency: "Common" },
        { type: "Labor and Employment Disputes", desc: "Wrongful termination, wage disputes, PF/ESI issues, industrial disputes", frequency: "Common" }
      ]
    },
    preventive: {
      title: "Preventive Measures",
      measures: [
        { measure: "Comprehensive Written Agreements", desc: "Always use detailed written contracts with clear terms. Include jurisdiction, arbitration clauses, and payment schedules. Avoid relying on verbal agreements." },
        { measure: "Arbitration Clauses", desc: "Include arbitration clauses citing Indian Arbitration Act. Specify arbitration seat, number of arbitrators, and institutional vs. ad-hoc arbitration." },
        { measure: "Payment Security", desc: "Use post-dated cheques, bank guarantees, or letters of credit. Implement milestone-based payments with clear deliverable definitions." },
        { measure: "Regular Legal Compliance", desc: "Conduct quarterly compliance audits for labor laws, GST, contracts, and state-specific regulations to prevent regulatory disputes." },
        { measure: "Relationship Management", desc: "Maintain regular communication with business partners. Address payment or performance issues immediately before they escalate." }
      ]
    },
    assistance: {
      title: "Legal Assistance & Support",
      services: [
        "Network of advocates across major Indian cities and states",
        "Arbitration support through Indian Council of Arbitration",
        "Mediation services via court-annexed mediation centers",
        "Commercial Courts litigation support for high-value disputes",
        "Debt recovery tribunal (DRT) representation",
        "Labor law and industrial dispute resolution",
        "Legal notice drafting and pre-litigation negotiation support"
      ]
    },
    tips: {
      title: "User Tips & Recommendations",
      recommendations: [
        "Never rely on verbal agreements - always get written contracts with signatures and stamps",
        "Take post-dated cheques for payment security - dishonored cheques have criminal consequences",
        "Include arbitration clauses in all contracts - litigation can take 5-10 years in Indian courts",
        "Maintain detailed records of all transactions, communications, and deliveries",
        "Send legal notices promptly when disputes arise - it shows seriousness and creates legal record",
        "Understand state-specific laws - regulations vary significantly across Indian states",
        "Use institutional arbitration (MCIA, DIAC) rather than ad-hoc for better enforcement",
        "Consider mediation for relationship-based disputes - it's faster and preserves business relationships",
        "Verify business partner credentials through credit agencies and industry networks",
        "Keep all original documents safe - Indian courts require original documents as evidence"
      ]
    },
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop"
  }
];

const DisputePrevention = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&h=1080&fit=crop" 
            alt="Dispute Prevention" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/75" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl mx-auto text-center">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-6">
              Dispute <span className="text-accent">Prevention</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Proactive dispute prevention strategies for UK, Hong Kong, and India. Protect your business interests and maintain strong relationships through effective conflict avoidance.
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

      {/* Regional Dispute Prevention Services */}
      {regions.map((region, regionIndex) => (
        <div key={region.title}>
          {/* Section 1: Introduction */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-background" : "py-20 lg:py-28 bg-muted"}>
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeLeft} custom={0}>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                    {region.title}
                  </h2>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{region.introduction.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{region.introduction.description}</p>
                  <div className="space-y-3">
                    {region.introduction.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Scale size={20} className="text-secondary shrink-0 mt-0.5" />
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

          {/* Section 2: Common Disputes */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-muted" : "py-20 lg:py-28 bg-background"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                  <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
                    {region.disputes.title} - {region.title}
                  </motion.h3>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-6">
                  {region.disputes.list.map((dispute, i) => (
                    <motion.div key={dispute.type} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                      className="bg-card rounded-xl p-6 card-elevated border border-border">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-heading font-bold text-lg text-foreground">{dispute.type}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          dispute.frequency === 'Very Common' ? 'bg-red-100 text-red-700' : 
                          dispute.frequency === 'Common' ? 'bg-orange-100 text-orange-700' : 'bg-yellow-100 text-yellow-700'
                        }`}>{dispute.frequency}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{dispute.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Preventive Measures */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-background" : "py-20 lg:py-28 bg-muted"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                  <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
                    {region.preventive.title} - {region.title}
                  </motion.h3>
                </motion.div>
                <div className="space-y-6">
                  {region.preventive.measures.map((item, i) => (
                    <motion.div key={item.measure} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                      className="bg-card rounded-xl p-6 card-elevated border border-border flex gap-4">
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                          <FileText className="text-secondary" size={24} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-foreground mb-2">{item.measure}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Legal Assistance */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-muted" : "py-20 lg:py-28 bg-background"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                  <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
                    {region.assistance.title} - {region.title}
                  </motion.h3>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                  className="bg-card rounded-2xl p-8 card-elevated border border-border">
                  <div className="grid md:grid-cols-2 gap-4">
                    {region.assistance.services.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Users size={20} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Section 5: Tips & Recommendations */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-background" : "py-20 lg:py-28 bg-muted"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
                  <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">
                    {region.tips.title} - {region.title}
                  </motion.h3>
                </motion.div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
                  className="bg-card rounded-2xl p-8 card-elevated border border-border">
                  <div className="space-y-4">
                    {region.tips.recommendations.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{tip}</span>
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
              Need Dispute Prevention Support?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
              Protect your business with proactive dispute prevention strategies tailored to UK, Hong Kong, and India.
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

export default DisputePrevention;
