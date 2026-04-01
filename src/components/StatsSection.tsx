import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "-6,3%", label: "Retração da Força de Trabalho", description: "Projeção de queda na PEA até 2060" },
  { value: "38,8", label: "Idade Média (2022)", description: "Idade média da força de trabalho brasileira, era 36,9 em 2012" },
  { value: "42,1", label: "Projeção para 2060", description: "Idade média projetada dos trabalhadores" },
  { value: "32%", label: "Trabalhadores 50+", description: "Parcela de profissionais com 50+ anos em 2060 (hoje 22,4%)" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dados" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-primary mb-4 block">/dados</span>
          <h2 className="text-4xl md:text-5xl font-bold">Números que importam</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition-all duration-500"
              style={{ boxShadow: "var(--shadow-warm)" }}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-5xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-lg font-semibold text-foreground mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
