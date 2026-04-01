import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Zap,
  TrendingUp,
  Heart,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaPlane,
  FaPassport,
  FaUserTie,
  FaGlobe,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

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
    link: "/services/immigration",
  },
  {
    icon: FaBriefcase,
    title: "Business",
    desc: "Investment opportunities and business expansion strategies to help your company grow internationally.",
    link: "/services/business",
  },
  {
    icon: FaUserTie,
    title: "IT Services",
    desc: "Web development, digital marketing, mobile apps, and graphic design solutions for modern businesses.",
    link: "/services/it-services",
  },
  {
    icon: FaGraduationCap,
    title: "Legal Services",
    desc: "Legal documentation, risk management, and dispute prevention for international business operations.",
    link: "/services/legal",
  },
];

const countries = [
  {
    name: "United Kingdom",
    desc: "World-class education and career opportunities.",
    details: [
      "Top-ranked universities like Oxford & Cambridge",
      "Post-study work visa up to 2 years",
      "Diverse multicultural environment",
      "Strong job market across all sectors",
      "Gateway to Europe and global careers",
    ],
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
    gradient: "from-blue-500/30 via-indigo-500/30 to-purple-500/30",
  },
  {
    name: "Canada",
    desc: "Immigration-friendly policies and high quality of life.",
    details: [
      "Express Entry & PNP immigration pathways",
      "Free healthcare and social benefits for PR",
      "One of the safest countries in the world",
      "High demand for skilled workers",
      "Clear pathway to permanent residency",
    ],
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&h=300&fit=crop",
    gradient: "from-red-500/30 via-rose-500/30 to-pink-500/30",
  },
];

const features = [
  {
    icon: Users,
    title: "Experienced Consultants",
    desc: "Over 10 years of immigration expertise.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    desc: "Streamlined procedures for quick results.",
  },
  {
    icon: TrendingUp,
    title: "High Success Rate",
    desc: "98% visa approval rate across all categories.",
  },
  {
    icon: Heart,
    title: "Personalized Guidance",
    desc: "Tailored solutions for every client.",
  },
];

const testimonials = [
  {
    name: "Michael Roberts",
    role: "Business Owner, Toronto",
    text: "Orvanta made our Canadian immigration process seamless. Their expert guidance and attention to detail helped us secure our permanent residency faster than expected. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Priya Sharma",
    role: "Software Engineer, Mumbai",
    text: "The team at Orvanta provided exceptional support for my UK work visa. They handled everything professionally and kept me informed throughout the entire process. Thank you!",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "David Chen",
    role: "Entrepreneur, Hong Kong",
    text: "Outstanding investment advisory services! Orvanta helped me diversify my portfolio and navigate international business opportunities with confidence. Their expertise is unmatched.",
    image: "https://i.pravatar.cc/150?img=68",
  },
  {
    name: "Lisa Anderson",
    role: "Retiree, Belize",
    text: "Moving to Belize was a dream come true, thanks to Orvanta. They guided us through the QRP program and made our relocation stress-free. We couldn't be happier!",
    image: "https://i.pravatar.cc/150?img=44",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] xl:min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=1080&fit=crop&q=80"
            alt="Business team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-extrabold text-white leading-tight mb-6 drop-shadow-2xl"
            >
              Your Global Partner for <span className="text-accent">Immigration</span>, <span className="text-accent">Business</span> and <span className="text-accent">IT Solutions</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-base md:text-lg lg:text-xl font-heading font-semibold text-white mb-6 leading-relaxed drop-shadow-2xl"
            >
              Expert B2B services in immigration, business, and IT solutions
              across multiple global markets. We help businesses expand with
              personalized, strategic guidance.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-[10px] md:text-xs text-white/70 mb-8 mx-auto font-normal drop-shadow-lg backdrop-blur-[2px] text-center px-4"
            >
              *We provide strategic guidance and advisory services only; we do not facilitate company setup, registration, or office acquisition.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/sign-up">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold text-base xl:text-lg px-8 xl:px-10 shadow-lg hover:shadow-xl transition-all duration-200 h-12 xl:h-14"
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-white/20 text-white hover:bg-white hover:text-primary hover:border-white font-semibold text-base xl:text-lg px-8 xl:px-10 backdrop-blur-sm transition-all duration-200 h-12 xl:h-14 shadow-lg hover:shadow-xl"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive B2B solutions for immigration, business growth, IT development, and legal support across global markets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Immigration",
                desc: "Visa services, PR applications, work permits, and study abroad programs across multiple global markets.",
                link: "/services/immigration",
                image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
                gradient: "from-blue-600/20 to-cyan-600/20",
                icon: FaPlane,
              },
              {
                title: "Business",
                desc: "Investment opportunities and business expansion strategies to help your company grow internationally.",
                link: "/services/business",
                image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
                gradient: "from-purple-600/20 to-pink-600/20",
                icon: FaBriefcase,
              },
              {
                title: "IT Services",
                desc: "Web development, digital marketing, mobile apps, and graphic design solutions for modern businesses.",
                link: "/services/it-services",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
                gradient: "from-orange-600/20 to-red-600/20",
                icon: FaUserTie,
              },
              {
                title: "Legal Services",
                desc: "Legal documentation, risk management, and dispute prevention for international business operations.",
                link: "/services/legal",
                image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600&h=400&fit=crop",
                gradient: "from-emerald-600/20 to-teal-600/20",
                icon: FaGraduationCap,
              },
            ].map((service, i) => (
              <Link key={service.title} to={service.link}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="group relative bg-card rounded-3xl overflow-hidden card-elevated border border-border hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    {/* Icon and Title */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                      <div className="h-14 w-14 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-all duration-300">
                        <service.icon size={28} className="text-white" />
                      </div>
                      <h3 className="font-heading font-bold text-3xl text-white drop-shadow-2xl group-hover:translate-x-2 transition-transform duration-500">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-card to-card/80">
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Popular Destinations
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We help you settle in some of the best countries worldwide.
            </p>
          </div>

          {/* Grid - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-auto">
              {countries.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="bg-card rounded-2xl overflow-hidden card-elevated border border-border group cursor-pointer lg:w-[calc((100vw-8rem)/3)] lg:max-w-[400px]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${c.gradient} group-hover:opacity-60 transition-opacity duration-300`}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg mb-1 text-foreground group-hover:text-secondary transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {c.desc}
                    </p>
                    <ul className="space-y-1.5">
                      {c.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-secondary font-bold mt-0.5">
                            ✓
                          </span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose Orvanta Advisory?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We combine expertise with genuine care for your success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-2xl p-8 card-elevated border border-border text-center group cursor-pointer"
              >
                <div className="h-20 w-20 rounded-2xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mx-auto mb-6 transition-all duration-200">
                  <f.icon
                    size={36}
                    className="text-accent group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground group-hover:text-secondary transition-colors">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Meet Our Clients
            </h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((t, i) => (
                  <CarouselItem
                    key={t.name}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      custom={i}
                      className="bg-card rounded-2xl p-8 card-elevated border border-border h-full flex flex-col"
                    >
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={18}
                            className="fill-accent text-accent"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-grow">
                        {t.text}
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="h-14 w-14 rounded-full object-cover border-2 border-secondary/20"
                        />
                        <div>
                          <p className="font-heading font-semibold text-foreground text-lg">
                            {t.name}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 lg:-left-12 h-10 w-10 lg:h-12 lg:w-12 border-2 hover:bg-secondary hover:text-white hover:border-secondary" />
              <CarouselNext className="-right-4 lg:-right-12 h-10 w-10 lg:h-12 lg:w-12 border-2 hover:bg-secondary hover:text-white hover:border-secondary" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Global Offices
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Visit us at one of our offices around the world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                country: "United Kingdom",
                flag: "🇬🇧",
                description: "Our UK office serves as a gateway to European markets, offering comprehensive immigration and business services. We specialize in UK visa applications, Business Expansion / Business Growth, and investment opportunities. With deep knowledge of UK immigration law and business regulations, our team provides expert guidance for individuals and companies looking to establish their presence in the United Kingdom.",
                address:
                  "167–169 Great Portland Street, 5th Floor, London, W1W 5PF",
                phone: "+44 7411 962102",
                email: "info@orvantaadvisory.com",
                image:
                  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=300&fit=crop",
                link: "/locations/uk",
              },
              {
                country: "India",
                flag: "🇮🇳",
                description: "Based in Mohali, Punjab, our India office provides comprehensive immigration and business consulting services. We assist clients with visa applications, business formation, and investment strategies tailored to the Indian market. Our experienced team understands the unique opportunities of doing business in India, offering personalized solutions for entrepreneurs and companies looking to establish their presence.",
                address:
                  "SCO 29, First Floor, New Sunny Enclave, Sector 125, Mohali – 140301",
                phone: "+91 81969 82305",
                email: "info@orvantaadvisory.com",
                image:
                  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=300&fit=crop",
                link: "/locations/india",
              },
              {
                country: "Hong Kong",
                flag: "🇭🇰",
                description: "Our Hong Kong office is strategically located in Sheung Wan, serving as a hub for Asia-Pacific business and immigration services. We provide expert guidance on visas, company formation, and investment opportunities. With extensive experience in the region's business landscape, our team helps clients navigate the dynamic market and establish their presence in this leading financial center.",
                address:
                  "Unit 1603, 16/F, The L. Plaza, 367–375 Queen's Road Central, Sheung Wan, Hong Kong",
                phone: "+852 92901601",
                email: "info@orvantaadvisory.com",
                image:
                  "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&h=300&fit=crop",
                link: "/locations/hong-kong",
              },
              {
                country: "Canada",
                flag: "🇨🇦",
                description: "Our Canada office specializes in immigration pathways, business investment strategies, and IT services for Canadian market entry. We provide expert guidance on Express Entry, Provincial Nominee Programs, and business expansion opportunities. Our team helps clients navigate Canada's immigration-friendly policies and establish successful operations in this dynamic North American market.",
                address:
                  "5th Avenue NE, Calgary, Alberta, T2A 5L7",
                phone: "+44 7411 962102",
                email: "info@orvantaadvisory.com",
                image:
                  "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600&h=300&fit=crop",
                link: "/locations/canada",
              },
              {
                country: "Belize",
                flag: "🇧🇿",
                description: "Our Belize office provides specialized immigration solutions, business consulting, and IT services for Belize and regional markets. We assist with residency programs, business formation, and investment opportunities in Central America. Our consultants offer personalized guidance for individuals and businesses looking to establish their presence in this growing market.",
                address:
                  "2118 Guava Street, Belama Phase 1, Belize City, Belize",
                phone: "+44 7411 962102",
                email: "info@orvantaadvisory.com",
                image:
                  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=300&fit=crop",
                link: "/locations/belize",
              },
            ].map((office, i) => (
              <Link key={office.country} to={office.link}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="bg-card rounded-2xl overflow-hidden card-elevated border border-border hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={office.image}
                      alt={office.country}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-4xl mb-2">{office.flag}</div>
                      <span className="text-white font-heading font-bold text-2xl drop-shadow-lg">
                        {office.country}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {office.description}
                    </p>

                    {/* Contact Info */}
                    <div className="pt-3 border-t border-border space-y-2">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Phone:</span> {office.phone}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Email:</span> {office.email}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4"
            >
              Ready to Expand Your Business Globally?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg"
            >
              Partner with us today and let our experts guide you through
              immigration, investment, and business expansion opportunities.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link to="/sign-up">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-amber-500 text-accent-foreground hover:from-accent/90 hover:to-amber-500/90 font-semibold text-base xl:text-lg px-10 xl:px-12 shadow-xl hover:shadow-2xl transition-all duration-200 h-12 xl:h-14"
                >
                  Get Started <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
