import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const countries = [
  { flag: "🇬🇧", name: "United Kingdom", desc: "Study at world-renowned universities like Oxford, Cambridge, and Imperial College. Work visa options through the Skilled Worker route." },
  { flag: "🇨🇦", name: "Canada", desc: "Immigration-friendly policies, Express Entry, and Post-Graduation Work Permits. One of the best countries for permanent residency." },
  { flag: "🇦🇺", name: "Australia", desc: "Top-tier education system, skilled migration programs, and excellent quality of life. Student and skilled worker visas available." },
  { flag: "🇩🇪", name: "Germany", desc: "Tuition-free public universities, strong STEM programs, and Europe's largest economy. Job Seeker and Blue Card visas available." },
  { flag: "🇦🇪", name: "UAE", desc: "Thriving job market in Dubai and Abu Dhabi. Work visas, investor visas, and golden visa programs for professionals." },
  { flag: "🇪🇺", name: "Schengen Europe", desc: "Access 27 European countries with a single Schengen visa. Ideal for tourism, business, and short-term stays across Europe." },
];

const Countries = () => {
  return (
    <Layout>
      <section className="hero-bg py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-6">
              Visa Destinations
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-primary-foreground/80 leading-relaxed">
              Explore the countries we serve and find the right visa pathway for your goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((c, i) => (
              <motion.div
                key={c.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-8 card-elevated border border-border flex flex-col"
              >
                <span className="text-6xl mb-5 block">{c.flag}</span>
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{c.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{c.desc}</p>
                <Link to="/contact">
                  <Button variant="outline" className="w-full group border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                    Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Countries;
