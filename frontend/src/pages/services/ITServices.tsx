import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { FaCode, FaSearch, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
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

const itServices = [
  {
    icon: FaCode,
    title: "Web Development",
    desc: "Custom website development with modern technologies for responsive, scalable, and high-performance web applications.",
    features: [
      "Responsive website design",
      "E-commerce solutions",
      "Content management systems",
      "Web application development",
      "API integration and development",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    gradient: "from-blue-500/40 to-cyan-500/40",
  },
  {
    icon: FaSearch,
    title: "Digital Marketing & SEO",
    desc: "Comprehensive digital marketing strategies and search engine optimization to boost your online presence and visibility.",
    features: [
      "Search engine optimization (SEO)",
      "Social media marketing",
      "Content marketing strategy",
      "Pay-per-click advertising",
      "Analytics and reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    gradient: "from-purple-500/40 to-pink-500/40",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile application development for iOS and Android with seamless user experiences.",
    features: [
      "iOS app development",
      "Android app development",
      "Cross-platform solutions",
      "App UI/UX design",
      "App maintenance and support",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    gradient: "from-orange-500/40 to-red-500/40",
  },
  {
    icon: FaPaintBrush,
    title: "Video Editing & Graphic Designing",
    desc: "Professional video editing and graphic design services to create compelling visual content for your brand.",
    features: [
      "Video editing and production",
      "Motion graphics and animation",
      "Brand identity design",
      "Marketing collateral design",
      "Social media graphics",
    ],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
    gradient: "from-emerald-500/40 to-teal-500/40",
  },
];

const ITServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop"
            alt="IT Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
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
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground mb-6"
            >
              IT <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed"
            >
              Complete IT solutions for web development, digital marketing,
              mobile apps, and creative design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our IT Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Modern technology solutions to power your digital transformation
            </p>
            <p className="text-muted-foreground text-base max-w-3xl mx-auto leading-relaxed">
              We deliver cutting-edge IT solutions that help businesses thrive in the digital age. Our comprehensive services include custom web development, mobile application design, digital marketing strategies, and creative graphic design tailored to your brand identity. From building responsive websites and e-commerce platforms to implementing effective SEO campaigns and social media marketing, we provide end-to-end technology solutions. Our expert team combines technical expertise with creative innovation to develop scalable, user-friendly digital products that enhance your online presence, engage your target audience, and drive measurable business growth in competitive markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {itServices.map((service, i) => (
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
              Transform Your Digital Presence
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Contact us today to discuss your IT needs and discover how we can
              help your business succeed online.
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

export default ITServices;
