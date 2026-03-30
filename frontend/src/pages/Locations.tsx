import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

const locations = [
  {
    flag: "🇮🇳",
    name: "India",
    desc: "Our headquarters in Mohali, Punjab, serving clients across India with comprehensive business solutions.",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=400&fit=crop",
    link: "/locations/india",
    gradient: "from-orange-500/40 to-green-500/40",
  },
  {
    flag: "🇬🇧",
    name: "UK",
    desc: "Strategic presence in London providing expert services for European market expansion.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
    link: "/locations/uk",
    gradient: "from-blue-600/40 to-red-600/40",
  },
  {
    flag: "🇭🇰",
    name: "Hongkong",
    desc: "Asia-Pacific hub in Hong Kong for businesses looking to expand in Asian markets.",
    image:
      "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&h=400&fit=crop",
    link: "/locations/hong-kong",
    gradient: "from-red-600/40 to-yellow-500/40",
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    desc: "North American operations supporting businesses with immigration and expansion services.",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=400&fit=crop",
    link: "/locations/canada",
    gradient: "from-red-600/40 to-red-700/40",
  },
  {
    flag: "🇧🇿",
    name: "Belize",
    desc: "Central American presence offering specialized business and immigration advisory services.",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop",
    link: "/locations/belize",
    gradient: "from-blue-500/40 to-red-500/40",
  },
];

const Locations = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop"
            alt="Our Locations"
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
              Our Global <span className="text-accent">Locations</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed"
            >
              We operate across multiple continents to serve your business needs
              wherever you are.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {locations.map((location, i) => (
              <Link key={location.name} to={location.link}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="bg-card rounded-2xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${location.gradient}`}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <span className="absolute top-4 right-4 text-5xl drop-shadow-2xl filter brightness-110">
                      {location.flag}
                    </span>
                    <h3 className="absolute bottom-4 left-4 font-heading font-bold text-3xl text-white drop-shadow-lg">
                      {location.name}
                    </h3>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-1">
                      {location.desc}
                    </p>
                    <div className="flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all">
                      View Details{" "}
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </motion.div>
              </Link>
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
              Ready to Connect?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Contact us at any of our global offices for personalized
              consultation and support.
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

export default Locations;
