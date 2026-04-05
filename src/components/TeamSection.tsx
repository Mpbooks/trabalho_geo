import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ADICIONE OU REMOVA OS NOMES AQUI:
  const teamMembers = [
    "Paulo Wittor",
    "Caroline Xavier",
    "Rebeca Medeiros",
    "Geovanna Pereira",
    "Manuella Jacomo",
    "Gustavo Barbosa",
    "Daniel Barros",
  ];


  return (
    <section id="equipe" ref={ref} className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm tracking-widest uppercase text-primary mb-4 block">/equipe</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nosso Grupo</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Nome dos integrantes
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {teamMembers.map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="rounded-xl border border-border bg-card/50 p-6 flex items-center justify-center flex-col text-center shadow-sm hover:border-primary/50 transition-colors"
                
              >
                
                <span className="font-medium text-foreground">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );4
};

export default TeamSection;
