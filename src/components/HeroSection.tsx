import { motion } from "framer-motion";
import heroImage from "@/assets/hero-elder.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10" />

      {/* Hero image */}
      <div className="absolute right-0 top-0 w-full h-full md:w-3/5">
        <img
          src={heroImage}
          alt="Retrato de pessoa idosa brasileira"
          width={1024}
          height={1024}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse z-0" />

      {/* Content */}
      <div className="container relative z-20 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground mb-6">
            <span className="w-8 h-px bg-primary" />
            Estudo Social
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
            Desafios do{" "}
            <span className="text-primary">envelhe&shy;cimento</span>{" "}
            no Brasil
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
            O envelhecimento da população brasileira é um reflexo direto da transição demográfica, 
            marcada pela queda nas taxas de fecundidade e pelo aumento significativo da expectativa de vida. 
            Uma mudança estrutural profunda que afeta desde a forma como produzimos riquezas até a maneira 
            como o Estado organiza suas contas.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#trabalho"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wide hover:brightness-110 transition-all"
            >
              Explorar
            </a>
            <a
              href="#dados"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-medium text-sm tracking-wide hover:border-primary/50 hover:text-primary transition-all"
            >
              Ver Dados
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
