import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  FaPassport,
  FaUserCheck,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
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

const immigrationServices = [
  {
    icon: FaPassport,
    title: "Visa Service",
    desc: "Complete visa application support for tourist, business, and transit visas across multiple countries.",
    features: [
      "Document preparation and verification",
      "Application form assistance",
      "Embassy appointment scheduling",
      "Interview preparation guidance",
      "Application tracking support",
    ],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
    gradient: "from-blue-500/40 to-cyan-500/40",
  },
  {
    icon: FaUserCheck,
    title: "PR Service",
    desc: "Permanent residency application assistance for Canada, Australia, and other immigration-friendly countries.",
    features: [
      "Eligibility assessment",
      "Points calculation and optimization",
      "Document compilation",
      "Application submission support",
      "Post-submission follow-up",
    ],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
    gradient: "from-purple-500/40 to-pink-500/40",
  },
  {
    icon: FaBriefcase,
    title: "Work Permit",
    desc: "Work permit and employment visa services for professionals seeking international career opportunities.",
    features: [
      "Job market guidance",
      "Employer sponsorship support",
      "Work permit application",
      "Skills assessment assistance",
      "Relocation support",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    gradient: "from-orange-500/40 to-red-500/40",
  },
  {
    icon: FaGraduationCap,
    title: "Study Abroad",
    desc: "Complete support for international education including university selection and student visa applications.",
    features: [
      "University and course selection",
      "Application assistance",
      "Student visa processing",
      "Scholarship guidance",
      "Pre-departure orientation",
    ],
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
    gradient: "from-emerald-500/40 to-teal-500/40",
  },
];

const Immigration = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=1920&h=1080&fit=crop"
            alt="Immigration Services"
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
              Immigration <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg md:text-xl text-white font-semibold leading-relaxed drop-shadow-2xl"
            >
              Expert immigration solutions for visas, permanent residency, work
              permits, and study abroad programs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Immigration Services
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Comprehensive support for all your immigration needs
            </p>
            <p className="text-muted-foreground text-base leading-relaxed text-left">
              We specialize in providing end-to-end immigration solutions for individuals and businesses across multiple global markets. Our experienced immigration consultants guide you through complex visa processes, permanent residency applications, and work permit requirements with personalized attention. From initial consultation to successful visa approval, we handle documentation, application submissions, and follow-ups to ensure a smooth immigration journey. With expertise in UK, Canada, and other major destinations, we help you navigate immigration regulations confidently and achieve your relocation goals efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {immigrationServices.map((service, i) => (
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
                    <h3 className="font-heading font-bold text-2xl text-white drop-shadow-lg">
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
              Start Your Immigration Journey
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Contact us today for a consultation and let our experts guide you
              through the immigration process.
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

export default Immigration;
