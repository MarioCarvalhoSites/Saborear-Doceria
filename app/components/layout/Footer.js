import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-[#FADBD8] text-[#802424] p-8 ">
			<div className="container mx-auto px-4 max-w-screen-lg flex flex-col items-center text-center gap-8 md:flex-row md:justify-between md:text-left">
				<div className="flex flex-col items-center md:items-start">
					<p className="text-lg font-bold mb-4">Saborear Doceria</p>
					<p>Confeitaria Criativa</p>
					<p>&copy; 2025 Todos os direitos reservados.</p>
				</div>
				<div className="flex flex-col items-center md:items-start">
					<h3 className="text-xl font-bold mb-4">Contato</h3>
					<p>Email: saboreardoceria.ssa@gmail.com</p>
					<div className="flex items-center">
						<FaWhatsapp className="mr-2" />
						<a href="https://wa.me/5571982447297" target="_blank" rel="noopener noreferrer">
							<p>Tel: (71) 98244-7297</p>

						</a>
					</div>
					<div className="flex items-center">
						<FaInstagram className="mr-2" />
						<a href="https://www.instagram.com/saboreardoceria.ssa/" target="_blank">
							<p>saboreardoceria.ssa</p>
						</a>
					</div>
				</div>
				<div className="flex flex-col items-center md:items-start">
					<h3 className="text-xl font-bold mb-4">Desenvolvido por</h3>
					<p><span>MM Systems and Solutions</span></p>
					<div className="flex items-center">
						<FaWhatsapp className="mr-2" />
						<a href="https://wa.me/5571991870586" target="_blank" rel="noopener noreferrer">
							<p>Tel: (71) 99187-0586</p>
						</a>

					</div>
				</div>
			</div>
		</footer>
	);
}
