import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.section
      id="sobre"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-28  scroll-mt-2 px-6 bg-gradient-to-r from-[#893535] to-[#a55454]"
    >
      <div className="container mx-auto px-4 max-w-6xl text-[#FADBD8]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-saturnus">
          A doce arte de saborear a vida
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex-1 space-y-4">
            <p className="text-base text-justify leading-relaxed">
              Era uma vez uma engenheira com um sonho no coração:
              levar ao mundo a arte de saborear a vida. Sua
              jornada começou no universo exato da engenharia,
              onde cada detalhe e cálculo eram fundamentais. Mas,
              dentro dela, havia uma chama criativa que ansiava
              por mais. Foi então que ela descobriu a confeitaria
              criativa, um mundo onde a precisão da engenharia se
              encontrava com a doçura da vida.
            </p>
            <p className="text-base text-justify leading-relaxed">
              Assim nasceu nossa empresa, um lugar onde bolos não
              são apenas sobremesas, mas verdadeiras obras de arte
              com efeitos especiais, encantando e maravilhando.
              Cada criação é uma celebração, uma lembrança de que
              a vida, com suas surpresas e desafios, pode ser
              doce. Aqui, misturamos a exatidão da engenharia com
              a magia da confeitaria, criando experiências que
              tocam o coração.
            </p>
            <p className="text-base text-justify leading-relaxed">
              Nossa missão vai além de criar doces. Queremos
              despertar nas pessoas a consciência de que a vida é
              uma jornada de sabores, onde cada momento, por mais
              amargo que possa parecer, tem sua doçura. Através de
              nossos bolos e doces, desejamos ensinar a todos a
              saborear os pratos que a vida nos oferece, com
              gratidão e alegria.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
            <Image
              src="/gallery/foto_emily2.jpg"
              alt="Nossa confeiteira"
              width={400}
              height={300}
              className="rounded-lg shadow-xl"
              quality={75}
              priority // Força o carregamento inicial
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}