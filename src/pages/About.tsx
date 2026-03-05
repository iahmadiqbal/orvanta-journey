import { motion } from "framer-motion";
import { Target, Eye, Shield, Award, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const values = [
  { icon: Shield, title: "Integrity", desc: "Transparent and honest guidance at every step." },
  { icon: Award, title: "Excellence", desc: "Committed to the highest standards of service." },
  { icon: CheckCircle, title: "Reliability", desc: "Consistent results you can count on." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-bg py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.h1 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-6">
              About Orvanta Advisory
            </motion.h1>
            <motion.p variants={fadeUp} custom={1} className="text-lg text-primary-foreground/80 leading-relaxed">
              A trusted name in immigration consultancy, helping thousands achieve their global dreams since 2014.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-6">
                Who We Are
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground leading-relaxed mb-4">
                Orvanta Advisory is a leading immigration and visa consultancy firm dedicated to helping individuals and families navigate the complex world of international migration. With over a decade of experience, we've successfully guided thousands of clients to their dream destinations.
              </motion.p>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed">
                Our team of certified consultants specializes in study visas, work permits, tourist visas, and permanent residency applications for countries across the globe. We pride ourselves on our personalized approach, ensuring every client receives tailored guidance.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { num: "10+", label: "Years Experience" },
                { num: "5000+", label: "Successful Cases" },
                { num: "98%", label: "Success Rate" },
                { num: "25+", label: "Countries Covered" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  custom={i}
                  className="bg-card rounded-xl p-6 card-elevated border border-border text-center"
                >
                  <p className="text-3xl font-heading font-bold text-secondary mb-1">{stat.num}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="bg-card rounded-xl p-10 card-elevated border border-border"
            >
              <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <Target size={28} className="text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To simplify immigration by providing expert, transparent, and personalized consultancy services that empower individuals to achieve their international goals with confidence and ease.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="bg-card rounded-xl p-10 card-elevated border border-border"
            >
              <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Eye size={28} className="text-accent" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted immigration consultancy globally, known for excellence, integrity, and a genuine commitment to every client's success and well-being.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Why Clients Trust Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={30} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
