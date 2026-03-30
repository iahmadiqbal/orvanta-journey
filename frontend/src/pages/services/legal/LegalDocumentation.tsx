import { motion } from "framer-motion";
import { CheckCircle, FileCheck, Clock, AlertCircle, HelpCircle, ArrowRight, Phone, Mail, ChevronDown } from "lucide-react";
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
      title: "Overview of Legal Documentation",
      description: "In the UK, legal document verification is governed by strict regulatory frameworks including the Legal Services Act 2007 and overseen by bodies such as the Solicitors Regulation Authority (SRA). UK verification processes emphasize authenticity, compliance with British legal standards, and adherence to anti-money laundering regulations. Documents must meet specific formatting requirements and often require certification by UK-recognized solicitors or notaries public.",
      keyPoints: [
        "Regulated by SRA and Legal Services Board",
        "Apostille certification under Hague Convention",
        "Compliance with UK GDPR and data protection laws",
        "Notarization by qualified UK solicitors required"
      ]
    },
    verification: {
      title: "Verification Process",
      steps: [
        { step: "Document Submission", desc: "Submit original documents to UK-registered solicitor or notary public" },
        { step: "Identity Verification", desc: "Provide valid UK ID (passport, driving license) and proof of address" },
        { step: "Solicitor Review", desc: "Qualified solicitor reviews documents for authenticity and legal compliance" },
        { step: "Apostille Certification", desc: "Foreign & Commonwealth Office issues apostille for international use" },
        { step: "Final Certification", desc: "Receive certified copies with solicitor's seal and signature" }
      ]
    },
    documents: {
      title: "Required Documents",
      list: [
        "Valid UK passport or biometric residence permit",
        "Proof of UK address (utility bill, council tax statement)",
        "Original documents requiring verification",
        "Certified translations (if documents not in English)",
        "Solicitor's certificate of verification",
        "Apostille certificate for international use"
      ]
    },
    timelines: {
      title: "Timelines & Procedures",
      standard: "5-7 business days",
      expedited: "2-3 business days (additional fees apply)",
      apostille: "3-5 business days additional",
      details: "UK verification typically takes 5-7 business days for standard processing. Apostille certification adds 3-5 days. Expedited services available through premium solicitor services. Complex documents or international verifications may require up to 14 days."
    },
    faqs: [
      {
        question: "Do I need apostille for all UK documents?",
        answer: "Apostille is only required for documents being used in countries that are signatories to the Hague Convention. For other countries, you may need embassy legalization instead."
      },
      {
        question: "Can I verify documents online in the UK?",
        answer: "Some documents can be verified digitally through UK government services, but most legal documents still require physical verification by a solicitor or notary public."
      },
      {
        question: "How much does UK document verification cost?",
        answer: "Costs vary: solicitor certification £50-150 per document, apostille £30, expedited services £100-200 additional. Complex documents may cost more."
      }
    ],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop"
  },
  {
    title: "Hong Kong",
    overview: {
      title: "Overview of Legal Documentation",
      description: "Hong Kong's legal documentation system operates under a unique 'One Country, Two Systems' framework, maintaining common law traditions while integrating with mainland China's requirements. The Hong Kong Law Society regulates document verification, which must comply with both local ordinances and international standards. Hong Kong's position as an international business hub means verification processes are streamlined for efficiency while maintaining rigorous authenticity checks.",
      keyPoints: [
        "Regulated by Hong Kong Law Society",
        "Bilingual documentation (English and Chinese) often required",
        "Compliance with Personal Data (Privacy) Ordinance",
        "Notarization by Hong Kong solicitors or China-Appointed Attesting Officers"
      ]
    },
    verification: {
      title: "Verification Process",
      steps: [
        { step: "Document Preparation", desc: "Prepare documents in required format (bilingual if needed)" },
        { step: "Solicitor Appointment", desc: "Engage Hong Kong solicitor or China-Appointed Attesting Officer" },
        { step: "Identity Authentication", desc: "Present HKID card or valid passport with Hong Kong visa" },
        { step: "Document Attestation", desc: "Solicitor attests documents with official seal and signature" },
        { step: "Legalization (if needed)", desc: "High Court or Chinese Ministry of Foreign Affairs legalization for mainland use" }
      ]
    },
    documents: {
      title: "Required Documents",
      list: [
        "Hong Kong Identity Card (HKID) or valid passport",
        "Proof of Hong Kong address (bank statement, tenancy agreement)",
        "Original documents for verification",
        "Certified translations (English/Chinese as required)",
        "Company registration documents (for business matters)",
        "Legalization certificate (for mainland China use)"
      ]
    },
    timelines: {
      title: "Timelines & Procedures",
      standard: "3-5 business days",
      expedited: "1-2 business days (premium service)",
      legalization: "5-7 business days additional",
      details: "Hong Kong's efficient system typically processes verifications in 3-5 business days. Same-day services available for urgent matters. Legalization for mainland China use adds 5-7 days. Business documents may require additional company registry checks."
    },
    faqs: [
      {
        question: "Do I need bilingual documents in Hong Kong?",
        answer: "For local use, English is sufficient. However, documents for mainland China or certain government departments often require Chinese translations certified by a Hong Kong solicitor."
      },
      {
        question: "What's the difference between notarization and attestation in HK?",
        answer: "Notarization is for local use by solicitors. Attestation by China-Appointed Attesting Officers is specifically for documents used in mainland China and carries special legal weight."
      },
      {
        question: "How much does document verification cost in Hong Kong?",
        answer: "Standard verification: HKD 800-2,000 per document. China attestation: HKD 1,500-3,500. Legalization: HKD 500-1,000 additional. Expedited services cost 50-100% more."
      }
    ],
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=600&fit=crop"
  },
  {
    title: "India",
    overview: {
      title: "Overview of Legal Documentation",
      description: "India's legal documentation verification system is governed by the Indian Evidence Act 1872, Notaries Act 1952, and various state-specific regulations. The Bar Council of India oversees legal practitioners who can verify documents. India's system involves multiple layers including notarization, attestation by government officials, and apostille certification. The process varies significantly between states, with some offering digital verification services while others require traditional paper-based procedures.",
      keyPoints: [
        "Regulated by Bar Council of India and state bar councils",
        "Multi-tier attestation system (Notary, SDM, MEA)",
        "Apostille services through Ministry of External Affairs",
        "Digital verification available in select states"
      ]
    },
    verification: {
      title: "Verification Process",
      steps: [
        { step: "Notarization", desc: "Get documents notarized by registered notary public" },
        { step: "State Attestation", desc: "Sub-Divisional Magistrate (SDM) or Home Department attestation" },
        { step: "MEA Attestation", desc: "Ministry of External Affairs attestation for international use" },
        { step: "Apostille/Embassy", desc: "Apostille certificate or embassy legalization as required" },
        { step: "Final Verification", desc: "Receive complete attested document set with all seals" }
      ]
    },
    documents: {
      title: "Required Documents",
      list: [
        "Valid Indian passport or Aadhaar card",
        "PAN card for financial documents",
        "Address proof (Aadhaar, voter ID, utility bill)",
        "Original documents requiring verification",
        "Passport-size photographs",
        "Notarized affidavits (if applicable)",
        "Previous attestation certificates (for MEA)"
      ]
    },
    timelines: {
      title: "Timelines & Procedures",
      standard: "10-15 business days",
      expedited: "5-7 business days (tatkal service)",
      apostille: "3-5 business days at MEA",
      details: "Indian verification involves multiple stages: notarization (1-2 days), state attestation (3-5 days), MEA attestation (5-7 days). Total process typically takes 10-15 business days. Tatkal (expedited) services available at additional cost. Digital apostille services now available in major cities, reducing time to 3-5 days."
    },
    faqs: [
      {
        question: "What's the difference between attestation and apostille in India?",
        answer: "Attestation is a multi-step process for non-Hague Convention countries involving state and MEA verification. Apostille is a single-step MEA certification for Hague Convention countries, making it faster and simpler."
      },
      {
        question: "Can I get documents verified online in India?",
        answer: "Yes, MEA now offers e-Apostille services for educational and personal documents in select categories. However, initial notarization and state attestation still require physical presence in most states."
      },
      {
        question: "How much does document verification cost in India?",
        answer: "Notarization: ₹50-200 per document. State attestation: ₹50-100. MEA apostille: ₹50 (normal), ₹500 (tatkal). Total cost typically ₹500-2,000 depending on document type and urgency."
      }
    ],
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop"
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
          <h4 className="font-heading font-bold text-lg text-foreground pr-4">
            {faq.question}
          </h4>
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

const LegalDocumentation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop" 
            alt="Legal Documentation" 
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
              Legal Documentation <span className="text-accent">Verification</span>
            </motion.h1>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8"
            >
              Professional document verification services for UK, Hong Kong, and India. Ensure your legal documents meet international standards with our expert guidance.
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

      {/* Regional Documentation Services */}
      {regions.map((region, regionIndex) => (
        <div key={region.title}>
          {/* Section 1: Overview */}
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
                    {region.overview.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {region.overview.description}
                  </p>
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
                  <img 
                    src={region.image} 
                    alt={region.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Section 2: Verification Process */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-muted" : "py-20 lg:py-28 bg-background"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <motion.h3 
                    variants={fadeUp} 
                    custom={0}
                    className="text-3xl font-heading font-bold text-foreground mb-4"
                  >
                    {region.verification.title} - {region.title}
                  </motion.h3>
                </motion.div>

                <div className="space-y-8">
                  {region.verification.steps.map((step, i) => (
                    <motion.div
                      key={step.step}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      custom={i}
                      className="relative pl-16"
                    >
                      {i < region.verification.steps.length - 1 && (
                        <div className="absolute left-[31px] top-16 bottom-0 w-0.5 bg-secondary/30" />
                      )}
                      <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {i + 1}
                      </div>
                      <div className="bg-card rounded-xl p-6 card-elevated border border-border">
                        <h4 className="font-heading font-bold text-xl text-foreground mb-2">
                          {step.step}
                        </h4>
                        <p className="text-muted-foreground">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Required Documents */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-background" : "py-20 lg:py-28 bg-muted"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <motion.h3 
                    variants={fadeUp} 
                    custom={0}
                    className="text-3xl font-heading font-bold text-foreground mb-4"
                  >
                    {region.documents.title} - {region.title}
                  </motion.h3>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={0}
                  className="bg-card rounded-2xl p-8 card-elevated border border-border"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    {region.documents.list.map((doc, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <FileCheck size={20} className="text-secondary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{doc}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Section 4: Timelines & Procedures */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-muted" : "py-20 lg:py-28 bg-background"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <motion.h3 
                    variants={fadeUp} 
                    custom={0}
                    className="text-3xl font-heading font-bold text-foreground mb-4"
                  >
                    {region.timelines.title} - {region.title}
                  </motion.h3>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                    className="bg-card rounded-xl p-6 card-elevated border border-border text-center"
                  >
                    <Clock size={32} className="text-secondary mx-auto mb-3" />
                    <h4 className="font-heading font-bold text-lg text-foreground mb-2">Standard</h4>
                    <p className="text-2xl font-bold text-secondary">{region.timelines.standard}</p>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={1}
                    className="bg-card rounded-xl p-6 card-elevated border border-border text-center"
                  >
                    <AlertCircle size={32} className="text-accent mx-auto mb-3" />
                    <h4 className="font-heading font-bold text-lg text-foreground mb-2">Expedited</h4>
                    <p className="text-2xl font-bold text-accent">{region.timelines.expedited}</p>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={2}
                    className="bg-card rounded-xl p-6 card-elevated border border-border text-center"
                  >
                    <FileCheck size={32} className="text-primary mx-auto mb-3" />
                    <h4 className="font-heading font-bold text-lg text-foreground mb-2">Additional</h4>
                    <p className="text-2xl font-bold text-primary">{region.timelines.apostille}</p>
                  </motion.div>
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={3}
                  className="bg-card rounded-xl p-6 card-elevated border border-border"
                >
                  <p className="text-muted-foreground leading-relaxed">
                    {region.timelines.details}
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Section 5: FAQs */}
          <section className={regionIndex % 2 === 0 ? "py-20 lg:py-28 bg-background" : "py-20 lg:py-28 bg-muted"}>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <motion.h3 
                    variants={fadeUp} 
                    custom={0}
                    className="text-3xl font-heading font-bold text-foreground mb-4"
                  >
                    FAQs - {region.title}
                  </motion.h3>
                </motion.div>

                <div className="space-y-6">
                  {region.faqs.map((faq, i) => (
                    <FAQItem key={faq.question} faq={faq} index={i} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 
              variants={fadeUp} 
              custom={0} 
              className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6"
            >
              Need Document Verification Services?
            </motion.h2>
            <motion.p 
              variants={fadeUp} 
              custom={1} 
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Get expert assistance with legal document verification for UK, Hong Kong, and India. Our team ensures your documents meet all requirements.
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

export default LegalDocumentation;
