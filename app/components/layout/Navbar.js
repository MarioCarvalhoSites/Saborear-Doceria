"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css"
/*
Vinho profundo #802424
Rosa Claro Blush #FADBD8
Rosa Pastel Antigo #E6B0AA
Banco Perola #FDFEFE
Cinza Suave #D5D8DC
Fonte - Saturnus
*/
export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="fixed w-screen bg-[#FADBD8] backdrop-blur-sm z-50 shadow-md text-[#802424] font-bold font-saturnus px-6">
			<div className="container mx-auto px-4 py-5 flex justify-between items-center text-xl">
				<div className={`${styles.navbar_container} `}>
					<Image
						src="/gallery/logo.png"
						alt="Saborear Doceria"
						width={46}
						height={20}
						className="mr-4"
					/>
					<p className="text-2xl"><a href="#home" className="hover:text-[#E6B0AA]">Saborear Doceria</a></p>
				</div>
				<div className="hidden md:flex space-x-6">
					<a
						href="#galeria"
						className=" hover:text-[#E6B0AA] transition-colors"
					>
						Galeria
					</a>
					<a
						href="#eventos"
						className=" hover:text-[#E6B0AA] transition-colors"
					>
						Eventos
					</a>
					<a
						href="#videos"
						className=" hover:text-[#E6B0AA] transition-colors"
					>
						Videos
					</a>
					<a
						href="#testimonials"
						className=" hover:text-[#E6B0AA] transition-colors"
					>
						Depoimentos
					</a>
					<a
						href="#sobre"
						className=" hover:text-[#E6B0AA] transition-colors"
					>
						Sobre
					</a>
					<a
						href="#contato"
						className=" hover:text-[#E6B0AA] transition-colors"
					>
						Contato
					</a>
				</div>
				<button
					className="md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>

			{/* Menu mobile */}
			{isMenuOpen && (
				<div className="md:hidden bg-[#FADBD8]">
					<div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
						<a
							href="#galeria"
							className="text-[#802424] hover:text-[#E6B0AA]"
						>
							Galeria
						</a>
						<a
							href="#eventos"
							className="text-[#802424] hover:text-[#E6B0AA]"
						>
							Eventos
						</a>
						<a
							href="#videos"
							className=" hover:text-[#E6B0AA] transition-colors"
						>
							Videos
						</a>
						<a
							href="#testimonials"
							className=" hover:text-[#E6B0AA] transition-colors"
						>
							Depoimentos
						</a>
						<a
							href="#sobre"
							className="text-[#802424] hover:text-[#E6B0AA]"
						>
							Sobre
						</a>
						<a
							href="#contato"
							className="text-[#802424] hover:text-[#E6B0AA]"
						>
							Contato
						</a>
					</div>
				</div>
			)}
		</nav>
	);
}
