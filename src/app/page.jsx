"use client";

import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.profileCard}>
				{/* Dados do perfil */}
				<div className={styles.profileHeader}>
					{/* Nome da turma */}
					<span className={styles.classInfo}>Turma: 2TDS1</span>
					{/* Nome da escola */}
					<span className={styles.schoolInfo}>SENAI Valinhos</span>
					{/* Foto do aluno */}
					<div className={styles.profileImageWrapper}>
						<Image
							className={styles.profileImage}
							src="/images/eu.webp"
							alt="Profile"
							width={112}
							height={112}
						/>
					</div>
					{/* Nome completo do aluno */}
					<h1 className={styles.profileName}>Leonardo Oliveira</h1>
					{/* Frase inspiradora */}
					<p className={styles.inspirationalQuote}>
						"A tecnologia move o mundo, mas a curiosidade move a tecnologia."
					</p>
					{/* Email */}
					<p className={styles.email}>leonardo.p.oliveira12@aluno.senai.br</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Sobre</h2>
					<p className={styles.sectionText}>
						Um jovem apaixonado por tecnologia e programação, sempre curioso em entender como as coisas
						funcionam "por trás das telas". Dedica parte do seu tempo a aprender novas linguagens,
						desenvolver projetos pessoais e explorar soluções criativas para problemas do dia a dia. Gosta
						de se desafiar com códigos, busca constantemente evolução no mundo digital e sonha em transformar
						suas ideias em ferramentas úteis para as pessoas.
					</p>
				</div>

				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Habilidades</h2>
					<div className={styles.skillsGrid}>
						<div className={styles.skillItem}>
							<Image src="/icons/html.png" alt="HTML5" width={50} height={50} title="HTML5" />
						</div>
						<div className={styles.skillItem}>
							<Image src="/icons/js.png" alt="JavaScript" width={50} height={50} title="JavaScript" />
						</div>
						<div className={styles.skillItem}>
							<Image src="/icons/next.png" alt="Next.js" width={50} height={50} title="Next.js" />
						</div>
						<div className={styles.skillItem}>
							<Image src="/icons/node.png" alt="Node.js" width={50} height={50} title="Node.js" />
						</div>
						<div className={styles.skillItem}>
							<Image src="/icons/css.png" alt="CSS3" width={50} height={50} title="CSS3" />
						</div>
						<div className={styles.skillItem}>
							<Image src="/icons/sql.png" alt="PostgreSQL" width={50} height={50} title="PostgreSQL" />
						</div>
						<div className={styles.skillItem}>
							<Image src="/icons/react.png" alt="React Native" width={50} height={50} title="React Native" />
						</div>
						<div className={styles.skillItem}>
							<Image src="/icons/ts.png" alt="TypeScript" width={50} height={50} title="TypeScript" />
						</div>
					</div>
				</div>

				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Projetos Recentes</h2>
					<ul className={styles.projectsList}>
						<li className={styles.projectItem}>
							<a href="https://lab-oliveira-leo.vercel.app/" className={styles.projectLink}>
								Portfolio
							</a>
						</li>
						<li className={styles.projectItem}>
							<a href="https://dicionario-next.vercel.app/" className={styles.projectLink}>
								Dicionário Inteligente
							</a>
						</li>
						<li className={styles.projectItem}>
							<a href="https://front-end-rm-api.vercel.app/home" className={styles.projectLink}>
								Rick and Morty API
							</a>
						</li>
					</ul>
				</div>

				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Educação</h2>
					<ul className={styles.educationList}>
						<li className={styles.educationItem}>
							<strong>Curso Técnico em Desenvolvimento de Sistemas</strong> - SENAI Valinhos
						</li>
						<li className={styles.educationItem}>
							<strong>Ensino Médio</strong> - Sesi Valinhos 299
						</li>
					</ul>
				</div>

				<div className={styles.section}>
					<h2 className={styles.sectionTitle}>Contato</h2>
					<ul className={styles.contactList}>
						<li className={styles.contactItem}>
							<strong>Telefone:</strong> (19) 98872-7143
						</li>
						<li className={styles.contactItem}>
							<strong>LinkedIn:</strong>
							<a href="https://www.linkedin.com/in/leonardo-oliveira-38aab7321/" className={styles.contactLink}>
								Leonardo Oliveira
							</a>
						</li>
						<li className={styles.contactItem}>
							<strong>GitHub:</strong>
							<a href="https://github.com/PedroLeoo07" className={styles.contactLink}>
								PedroLeoo07
							</a>
						</li>
					</ul>
				</div>

				<div className={styles.nextPageWrapper}>
					<a href="/api" className={styles.nextPageButton}>
						Próxima Página
					</a>
				</div>
			</div>
		</div>
	);
}