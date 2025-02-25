import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

// Definição do esquema de da data com Zod

const dateSchema = z
	.string()
	.min(1, "A data do evento é obrigatória!")
	.transform((str) => {
		const date = new Date(str);
		return date.toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		});
	});

// Definição do esquema de validação com Zod
const contactSchema = z.object({
	name: z.string().min(1, "O nome é obrigatório"),
	email: z.string().email("E-mail inválido"),
	phone: z.string().min(1, "O telefone é obrigatório"),
	eventType: z.string().min(1, "Selecione um tipo de evento"),
	qtd_convidados: z
		.string()
		.min(1, "A quantidade de convidados é obrigatória!"),
	dt_event: dateSchema,
	message: z.string().min(1, "A mensagem não pode estar vazia"),
});

export default function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm({
		resolver: zodResolver(contactSchema),
	});

	const onSubmit = async (data) => {
		try {
			console.table(data);
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				data
			);
			alert("Mensagem enviada com sucesso!");
			reset();
		} catch (error) {
			console.error(error);
			alert("Erro ao enviar mensagem. Tente novamente.");
		}
	};

	return (
		<motion.section
			id="contato"
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="py-28 scroll-mt-2 px-6 bg-gradient-to-r from-[#893535] to-[#a55454]"
		>
			<div className="container mx-auto px-4 ">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-saturnus text-[#FADBD8]">
					Faça seu Orçamento
				</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="max-w-2xl mx-auto"
				>
					<div className="grid md:grid-cols-2 gap-6">
						{/* Nome */}
						<div>
							<label htmlFor="name" className="block mb-2 text-[#FADBD8]">
								Nome
							</label>
							<input
								id="name"
								name="name"
								type="text"
								className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424] bg-[#FADBD8]"
								{...register("name")}
							/>
							{errors.name && (
								<p className="text-red-300 text-sm">
									{errors.name.message}
								</p>
							)}
						</div>

						{/* Email */}
						<div>
							<label htmlFor="email" className="block mb-2 text-[#FADBD8]">
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424] bg-[#FADBD8]"
								{...register("email")}
							/>
							{errors.email && (
								<p className="text-red-300 text-sm">
									{errors.email.message}
								</p>
							)}
						</div>

						{/* Telefone */}
						<div>
							<label htmlFor="phone" className="block mb-2 text-[#FADBD8]">
								Telefone
							</label>
							<input
								id="phone"
								name="phone"
								type="tel"
								className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424] bg-[#FADBD8]"
								{...register("phone")}
							/>
							{errors.phone && (
								<p className="text-red-300 text-sm">
									{errors.phone.message}
								</p>
							)}
						</div>

						{/* Tipo de Evento */}
						<div>
							<label htmlFor="enventType" className="block mb-2 text-[#FADBD8]">
								Tipo de Evento
							</label>
							<select
								id="eventType"
								name="eventType"
								className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424] bg-[#FADBD8]"
								{...register("eventType")}
							>
								<option value="">Selecione...</option>
								<option value="casamento">Casamento</option>
								<option value="aniversario">Aniversário</option>
								<option value="formatura">Formatura</option>
								<option value="outro">Outro</option>
							</select>
							{errors.eventType && (
								<p className="text-red-300 text-sm">
									{errors.eventType.message}
								</p>
							)}
						</div>

						{/* Qtd de Convidados */}
						<div>
							<label htmlFor="qtd_convidados" className="block mb-2 text-[#FADBD8]">
								Quantidade de convidados
							</label>
							<input
								id="qtd_convidados"
								name="qtd_convidados"
								type="text"
								className="w-full px-4 py-2 border bg-[#FADBD8] rounded-lg focus:ring-2 focus:ring-[#802424] "
								{...register("qtd_convidados")}
							/>
							{errors.qtd_convidados && (
								<p className="text-red-300 text-sm">
									{errors.qtd_convidados.message}
								</p>
							)}
						</div>

						{/* Data do Evento */}
						<div>
							<label htmlFor="dt_event" className="block mb-2 text-[#FADBD8]">
								Data do Evento
							</label>
							<input
								id="dt_event"
								name="dt_events"
								type="date"
								className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424] bg-[#FADBD8]"
								{...register("dt_event")}
							/>
							{errors.dt_event && (
								<p className="text-red-300 text-sm">
									{errors.dt_event.message}
								</p>
							)}
						</div>

						{/* Mensagem */}
						<div className="md:col-span-2">
							<label htmlFor="message" className="block mb-2 text-[#FADBD8]">
								Mensagem
							</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#802424] bg-[#FADBD8]"
								{...register("message")}
							></textarea>
							{errors.message && (
								<p className="text-red-300 text-sm">
									{errors.message.message}
								</p>
							)}
						</div>
					</div>

					{/* Botão de Enviar */}
					<button
						type="submit"
						className="mt-6 w-full bg-[#FADBD8] text-[#802424] py-3 rounded-lg hover:bg-[#E6B0AA] transition-colors btn"
						disabled={isSubmitting}
					>
						{isSubmitting ? "Enviando..." : "Enviar Pedido"}
					</button>
				</form>
			</div>
		</motion.section>
	);
}
