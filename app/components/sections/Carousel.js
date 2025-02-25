import { motion } from "framer-motion";
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"


export default function MyCarousel() {
	return (
		<motion.section
			id="eventos"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="py-28 scroll-mt-4 px-6 bg-gradient-to-r from-[#893535] to-[#a55454]"
		>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-saturnus text-[#FADBD8]">
					Nossos Eventos
				</h2>
				<Carousel
					showArrows={true}
					showStatus={false}
					showThumbs={false}
					infiniteLoop={true}
					autoPlay={true}
					interval={3000}
					className="max-w-xl mx-auto"
				>
					{[1, 2, 3, 4].map((index) => (
						<div key={index} className="relative aspect-video">
							<Image
								src={`/gallery/carousel-${index}.jpg`}
								alt={`Evento Carrossel ${index}`}
								width={800}
								height={600}
								className="rounded-lg"
								priority
								quality={75} // Ajuste conforme necessidade
							/>
						</div>
					))}
				</Carousel>
			</div>
		</motion.section>
	);
}
