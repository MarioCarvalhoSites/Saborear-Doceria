// app/layout.js
import "./globals.css";
import Script from 'next/script';

export const metadata = {
	title: "Saborear Doceria - Bolos Artesanais para Momentos Especiais",
	description: `Bem-vindo à Saborear Doceria Salvador, onde transformamos
					sonhos em realidade com bolos e doces únicos que encantam todos os sentidos.
					Somos especialistas em confeitaria criativa, inclusive bolos com efeitos especiais.
                    Nossa equipe combina técnica impecável e inovação para criar verdadeiras obras de arte comestíveis.`,
	url: "https://www.saboreardoceria.com", // Certifique-se que a URL está correta
	publisher: {
		"@type": "Organization",
		"name": "Saborear Doceria",
		"logo": {
			"@type": "ImageObject",
			"url": "https://www.saboreardoceria.com/logo.png"
		}
	},
	metadataBase: new URL("https://www.saboreardoceria.com"),
	icons: {
		icon: "/favicon.png",
	},
	keywords: `bolos confeitados, bolos de casamento, bolos de aniversário, bolos de formatura, confeitaria artesanal, doceria, bolos personalizados, bolos em Salvador, bolos deliciosos, bolo artesanal`,
	openGraph: {
		title: "Saborear Doceria - Bolos Artesanais para Momentos Especiais",
		description:
			"Especialistas em bolos confeitados para aniversários, casamentos e formaturas.",
		images: [
			"https://www.saboreardoceria.com/gallery/gallery-1.jpg",
			"https://www.saboreardoceria.com/gallery/gallery-2.jpg",
			"https://www.saboreardoceria.com/gallery/gallery-3.jpg",
			"https://www.saboreardoceria.com/gallery/gallery-4.jpg",
			"https://www.saboreardoceria.com/gallery/gallery-5.jpg",
			"https://www.saboreardoceria.com/gallery/gallery-6.jpg",
			"https://www.saboreardoceria.com/gallery/gallery-7.jpg",
			"https://www.saboreardoceria.com/gallery/gallery-8.jpg",
			"https://www.saboreardoceria.com/gallery/gallery-9.jpg",
		],
	},
	structuredData: {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Saborear Doceria",
		"description": "Bolos e doces artesanais para momentos especiais.",
		"url": "https://www.saboreardoceria.com",
		"publisher": {
			"@type": "Organization",
			"name": "Saborear Doceria",
			"logo": {
				"@type": "ImageObject",
				"url": "https://www.saboreardoceria.com/logo.png"
			}
		}
	}
};


export default function RootLayout({ children }) {
	return (
		<html lang="pt-BR">
			<head>
				<link
					href="https://fonts.cdnfonts.com/css/saturnus"
					rel="stylesheet"
				/>
				<meta name="robots" content="index,follow" />
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<meta name="keywords" content={metadata.keywords} />
				<meta property="og:title" content={metadata.openGraph.title} />
				<meta property="og:description" content={metadata.openGraph.description} />
				<meta property="og:image" content={metadata.openGraph.images[0]} />
				{/* JSON-LD para SEO */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.structuredData) }}
				/>
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=SEU_ID"
					strategy="lazyOnload"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}

