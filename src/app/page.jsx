"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
	return (
		<div
			className="flex flex-col items-center justify-center min-h-screen px-12"
			style={{
				backgroundImage: 'url("/images/playstation-bg.jpg")',
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div
				className="shadow-2xl rounded-3xl p-16 w-[50rem] transform transition duration-500 mt-16 mx-12
                bg-gradient-to-r from-[#002d62] via-[#003087] to-[#7b61ff] text-white border border-white/10"
			>
				{/* Dados do perfil */}
				<div className="flex flex-col items-center">
					{/* Nome da turma */}
					<span className="text-white font-semibold text-lg mb-1">Turma: 2TDS1</span>
					{/* Nome da escola */}
					<span className="text-white/90 font-medium text-base mb-2">SENAI Valinhos</span>
					{/* Foto do aluno */}
					<Image
						className="w-28 h-28 rounded-full border-4 border-white/40 shadow-lg"
						src="/images/eu.webp"
						alt="Profile"
						width={112}
						height={112}
					/>
					{/* Nome completo do aluno */}
					<h1 className="text-3xl font-extrabold mt-6 text-white">Leonardo Oliveira</h1>
					{/* Frase inspiradora */}
					<p className="italic text-white/90 mt-2 text-center max-w-xl">
						"A tecnologia move o mundo, mas a curiosidade move a tecnologia."
					</p>
					{/* Email */}
					<p className="text-white/80 mt-2">leonardo.p.oliveira12@aluno.senai.br</p>
				</div>

				<div className="mt-14">
					<h2 className="text-xl font-bold text-white">Sobre</h2>
					<p className="text-white/85 mt-4 text-base leading-relaxed">
						Um jovem apaixonado por tecnologia e programação, sempre curioso em entender como as coisas
						funcionam “por trás das telas”. Dedica parte do seu tempo a aprender novas linguagens,
						desenvolver projetos pessoais e explorar soluções criativas para problemas do dia a dia. Gosta
						de se desafiar com códigos, busca constantemente evolução no mundo digital e sonha em transformar
						suas ideias em ferramentas úteis para as pessoas.
					</p>
				</div>

				<div className="mt-14">
					<h2 className="text-xl font-bold text-white">Habilidades</h2>
					<div className="flex justify-around mt-6 flex-wrap gap-6">
						<Image src="/icons/html.png" alt="HTML5" width={50} height={50} title="HTML5" />
						<Image src="/icons/js.png" alt="JavaScript" width={50} height={50} title="JavaScript" />
						<Image src="/icons/next.png" alt="Next.js" width={50} height={50} title="Next.js" />
						<Image src="/icons/node.png" alt="Node.js" width={50} height={50} title="Node.js" />
						<Image src="/icons/css.png" alt="CSS3" width={50} height={50} title="CSS3" />
						{/* Novas habilidades */}
						<Image src="/icons/sql.png" alt="PostgreSQL" width={50} height={50} title="PostgreSQL" />
						<Image
							src="/icons/react.png"
							alt="React Native"
							width={50}
							height={50}
							title="React Native"
						/>
						<Image src="/icons/ts.png" alt="TypeScript" width={50} height={50} title="TypeScript" />
					</div>
				</div>

				<div className="mt-14">
					<h2 className="text-xl font-bold text-white">Projetos Recentes</h2>
					<ul className="list-none list-inside text-white/85 mt-4 text-base space-y-2">
						<li>
							<a href="https://lab-oliveira-leo.vercel.app/" className="text-cyan-200 hover:underline">
								Portfolio
							</a>
						</li>
						<li>
							<a href="https://dicionario-next.vercel.app/" className="text-cyan-200 hover:underline">
								Dicionário Inteligente
							</a>
						</li>
						<li>
							<a href="https://front-end-rm-api.vercel.app/home" className="text-cyan-200 hover:underline">
								Rick and Morty API
							</a>
						</li>
					</ul>
				</div>

				<div className="mt-14">
					<h2 className="text-xl font-bold text-white">Educação</h2>
					<ul className="list-none list-inside text-white/85 mt-4 text-base space-y-2">
						<li>
							<strong>Curso Técnico em Desenvolvimento de Sistemas</strong> - SENAI Valinhos
						</li>
						<li>
							<strong>Ensino Médio</strong> - Sesi Valinhos 299
						</li>
					</ul>
				</div>

				<div className="mt-14">
					<h2 className="text-xl font-bold text-white">Contato</h2>
					<ul className="list-none list-inside text-white/85 mt-4 text-base space-y-2">
						<li>
							<strong>Telefone:</strong> (19) 98872-7143
						</li>
						<li>
							<strong>LinkedIn:</strong>
							<a href="https://www.linkedin.com/in/leonardo-oliveira-38aab7321/" className="text-cyan-200 hover:underline">
								Leonardo Oliveira
							</a>
						</li>
						<li>
							<strong>GitHub:</strong>
							<a href="https://github.com/PedroLeoo07" className="text-cyan-200 hover:underline">
								PedroLeoo07
							</a>
						</li>
					</ul>
				</div>

				<div className="mt-6">
					<a
						href="/api"
						className="w-full inline-block text-center bg-white/10 border border-white/20 text-white py-2 px-4 rounded-md shadow-lg hover:bg-white/20 transition duration-300"
					>
						Próxima Página
					</a>
				</div>
			</div>
		</div>
	);
}