import { motion } from "framer-motion";
import Image from 'next/image'

export default function Gallery() {
  return (
    <motion.section
      id="galeria"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-28 bg-gradient-to-r from-[#893535] to-[#a55454] scroll-mt-2 px-6"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-saturnus text-[#FADBD8]">
          Nossos Momentos Especiais
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative w-full aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={`/gallery/gallery-${index}.jpg`}
                  alt={`Evento ${index}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transform transition-transform hover:scale-110"
                  priority
                  quality={75} // Ajuste conforme necessidade
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}