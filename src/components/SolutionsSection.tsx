import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import activeImage from "@/assets/section-active.jpg";

const SolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="desafios-estado" ref={ref} className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-primary mb-4 block">/seção 02</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O Desafio para o Estado,<br />
            <span className="text-primary">a Saúde e as Cidades</span>
          </h2>
        </motion.div>

        {/* Three challenge cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🏛️",
              title: "Previdência Social",
              desc: "O sistema previdenciário enfrenta uma matemática desfavorável: há cada vez menos jovens trabalhando e pagando impostos para sustentar um volume cada vez maior de aposentadorias e pensões. Isso exige planejamento de longo prazo, reformas estruturais e incentivos para que as pessoas permaneçam ativas no mercado por mais tempo.",
            },
            {
              icon: "🏥",
              title: "Sistema de Saúde",
              desc: "O sistema de saúde precisa ser totalmente reconfigurado. O foco deixa de ser apenas doenças agudas e passa a ser o manejo de doenças crônicas não transmissíveis, como diabetes, hipertensão, problemas cardiovasculares e Alzheimer. Essas condições exigem tratamentos contínuos, caros, além de cuidados geriátricos especializados e políticas de cuidados de longa duração.",
            },
            {
              icon: "🏙️",
              title: "Cidades e Inclusão Digital",
              desc: "As cidades brasileiras não foram desenhadas para os mais velhos; é preciso investir em calçadas niveladas, transporte acessível e espaços seguros. Num mundo onde tudo acontece por aplicativos, a inclusão digital dessa população é urgente para evitar que fiquem excluídos de serviços básicos de cidadania, saúde e consumo.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-all duration-500"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="rounded-3xl overflow-hidden relative"
        >
          <img
            src={activeImage}
            alt="Idosos praticando atividades físicas ao ar livre"
            loading="lazy"
            width={1280}
            height={720}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent flex items-center">
            <div className="p-8 md:p-16 max-w-lg">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#f26c0d]">Envelhecimento ativo</h3>
              <p className="text-muted-foreground text-lg leading-relaxed text-[#d3d3d3]">
                Promover qualidade de vida na terceira idade é investir no futuro de toda a sociedade. 
                É preciso políticas públicas focadas em cuidados de longa duração para idosos que 
                perdem sua autonomia.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
