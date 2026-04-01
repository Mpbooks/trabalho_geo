import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import handsImage from "@/assets/section-hands.jpg";

const ChallengesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trabalho" ref={ref} className="py-24 md:py-32">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-primary mb-4 block">/seção 01</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Nova Dinâmica do Trabalho<br />
            <span className="text-primary">e a Economia Prateada</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image + intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl overflow-hidden mb-8">
              <img
                src={handsImage}
                alt="Mãos de gerações diferentes entrelaçadas"
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A primeira grande transformação ocorre na nossa capacidade produtiva. Com menos jovens 
                nascendo, a base da pirâmide encolhe e, consequentemente, a População Economicamente 
                Ativa (PEA) diminui. Se as taxas de participação no mercado se mantiverem no mesmo 
                patamar de 2022, o Brasil poderá sofrer uma <strong className="text-foreground">retração 
                de 6,3% na sua força de trabalho total</strong> até o ano de 2060.
              </p>
              <p>
                Em contrapartida, os trabalhadores estão envelhecendo: a idade média da força de 
                trabalho brasileira, que era de 36,9 anos em 2012, já subiu para 38,8 anos em 2022, 
                com projeção de chegar a 42,1 anos em 2060. Estima-se que a parcela de profissionais 
                com 50 anos ou mais saltará de 22,4% (em 2022) para cerca de 32% em 2060.
              </p>
            </div>
          </motion.div>

          {/* Key points */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">⚙️</span>
                <h3 className="text-xl font-semibold">Combater o Etarismo</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Para evitar uma crise de produtividade, o mercado precisará combater o etarismo — o 
                preconceito de idade que exclui profissionais experientes — e criar programas de 
                mentoria para aproveitar o conhecimento acumulado por esses trabalhadores.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📚</span>
                <h3 className="text-xl font-semibold">Lifelong Learning</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Torna-se indispensável a cultura do lifelong learning (aprendizado ao longo da vida), 
                garantindo que os indivíduos se requalifiquem continuamente para acompanhar os rápidos 
                avanços tecnológicos.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/30 bg-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💰</span>
                <h3 className="text-xl font-semibold text-primary">Economia Prateada</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Com uma população idosa crescente, surge uma demanda altíssima por produtos e serviços 
                específicos. Setores como turismo focado na terceira idade, construção civil com 
                acessibilidade, indústria de alimentos funcionais e suplementos nutricionais, e o 
                mercado de tecnologias assistivas (monitores de saúde, aparelhos auditivos avançados e 
                aplicativos de bem-estar) têm potencial gigantesco de expansão e lucratividade.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
