import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  FaPlane,
  FaBriefcase,
  FaLaptopCode,
  FaBalanceScale,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const services = [
  {
    icon: FaPlane,
    title: "Immigration",
    desc: "Visa services, PR applications, work permits, and study abroad programs across multiple global markets.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop",
    link: "/services/immigration",
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    icon: FaBriefcase,
    title: "Business",
    desc: "Investment opportunities and business expansion strategies to help your company grow internationally.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop",
    link: "/services/business",
    gradient: "from-purple-600/20 to-pink-600/20",
  },
  {
    icon: FaLaptopCode,
    title: "IT Services",
    desc: "Web development, digital marketing, mobile apps, and graphic design solutions for modern businesses.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=800&fit=crop",
    link: "/services/it-services",
    gradient: "from-orange-600/20 to-red-600/20",
  },
  {
    icon: FaBalanceScale,
    title: "Legal Services",
    desc: "Legal documentation, risk management, and dispute prevention for international business operations.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop",
    link: "/services/legal",
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section with Carousel */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent className="h-full">
              {services.map((service) => (
                <CarouselItem key={service.title} className="h-full">
                  <div className="relative w-full h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 lg:left-8 h-12 w-12 border-2 border-white/60 bg-white/10 text-white hover:bg-white hover:text-primary hover:border-white backdrop-blur-md" />
            <CarouselNext className="right-4 lg:right-8 h-12 w-12 border-2 border-white/60 bg-white/10 text-white hover:bg-white hover:text-primary hover:border-white backdrop-blur-md" />
          </Carousel>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-primary-foreground mb-8 drop-shadow-lg"
            >
              Our <span className="text-accent">Services</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-xl md:text-2xl text-primary-foreground font-medium leading-relaxed drop-shadow-md"
            >
              Comprehensive B2B solutions for immigration, business growth, IT
              development, and legal support across global markets.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive immigration solutions tailored to your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <Link key={service.title} to={service.link}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="group relative bg-card rounded-3xl overflow-hidden card-elevated border border-border hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer h-full"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute top-6 right-6">
                      <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                        <service.icon size={32} className="text-white" />
                      </div>
                    </div>
                    
                    {/* Title at Bottom */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-heading font-bold text-3xl text-white drop-shadow-2xl group-hover:translate-x-2 transition-transform duration-500">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-8 bg-gradient-to-br from-card to-card/80">
                    <p className="text-muted-foreground text-base leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all duration-300">
                      Explore Service
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-2 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete immigration support beyond visa applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Web Development",
                desc: "Custom website development solutions tailored to your business needs. From responsive design to e-commerce platforms, we create modern, fast, and secure websites.",
                image:
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
              },
              {
                title: "Digital Marketing & SEO",
                desc: "Comprehensive digital marketing strategies to boost your online presence and drive targeted traffic. Our SEO experts optimize your website for search engines.",
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
              },
              {
                title: "App Development",
                desc: "Professional mobile app development for iOS and Android platforms. We design and develop user-friendly, feature-rich mobile applications.",
                image:
                  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
              },
              {
                title: "Graphic Design",
                desc: "Creative graphic design services for branding, marketing materials, and digital content. Our talented designers create visually stunning logos and graphics.",
                image:
                  "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
              },
              {
                title: "Business Consultation",
                desc: "Expert guidance for starting and growing your business internationally. We help you navigate market entry, business setup, and expansion strategies.",
                image:
                  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
              },
              {
                title: "Business Investment",
                desc: "Explore lucrative investment opportunities in global markets with our expert guidance. Our team provides detailed market analysis and risk assessment.",
                image:
                  "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
              },
              {
                title: "Stock Investment",
                desc: "Professional stock market advisory and portfolio management services tailored to your financial goals. Get expert insights on market trends.",
                image:
                  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-2xl overflow-hidden card-elevated border border-border group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.desc}
                  </p>
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
              Ready to Get Started?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg"
            >
              Contact us today to discuss how we can help your business expand
              globally with our expert services.
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

export default Services;
