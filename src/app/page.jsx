"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 px-8">
            <div className="bg-white shadow-2xl rounded-3xl p-16 w-[50rem] transform transition duration-500 hover:scale-105 mt-16 mx-8">
                <div className="flex flex-col items-center">
                    <Image
                        className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-lg"
                        src="/images/eu.webp"
                        alt="Profile"
                        width={112}
                        height={112}
                    />
                    <h1 className="text-3xl font-extrabold mt-6 text-gray-900">Leonardo Oliveira</h1>
                    <p className="text-gray-600 mt-2">leonardo.p.oliveira12@aluno.senai.br</p>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl font-bold text-gray-900">Sobre</h2>
                    <p className="text-gray-700 mt-4 text-base leading-relaxed">
                        Um jovem apaixonado por tecnologia e programação, sempre curioso em entender como as coisas funcionam “por trás das telas”. Dedica parte do seu tempo a aprender novas linguagens, desenvolver projetos pessoais e explorar soluções criativas para problemas do dia a dia. Gosta de se desafiar com códigos, busca constantemente evolução no mundo digital e sonha em transformar suas ideias em ferramentas úteis para as pessoas.
                    </p>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl font-bold text-gray-900">Habilidades</h2>
                    <div className="flex justify-around mt-6">
                        <Image
                            src="/icons/html.png"
                            alt="HTML5"
                            width={50}
                            height={50}
                            title="HTML5"
                        />
                        <Image
                            src="/icons/js.png"
                            alt="JavaScript"
                            width={50}
                            height={50}
                            title="JavaScript"
                        />
                        <Image
                            src="/icons/next.png"
                            alt="Next.js"
                            width={50}
                            height={50}
                            title="Next.js"
                        />
                        <Image
                            src="/icons/node.png"
                            alt="Node.js"
                            width={50}
                            height={50}
                            title="Node.js"
                        />
                        <Image
                            src="/icons/css.png"
                            alt="CSS3"
                            width={50}
                            height={50}
                            title="CSS3"
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl font-bold text-gray-900">Projetos Recentes</h2>
                    <ul className="list-none list-inside text-gray-700 mt-4 text-base space-y-2">
                        <li>
                            <a href="https://lab-oliveira-leo.vercel.app/" className="text-blue-500 hover:underline">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="https://dicionario-next.vercel.app/" className="text-blue-500 hover:underline">
                                Dicionário Inteligente
                            </a>
                        </li>
                        <li>
                            <a href="https://front-end-rm-api.vercel.app/home" className="text-blue-500 hover:underline">
                                Rick and Morty API
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl font-bold text-gray-900">Educação</h2>
                    <ul className="list-none list-inside text-gray-700 mt-4 text-base space-y-2">
                        <li>
                            <strong>Curso Técnico em Desenvolvimento de Sistemas</strong> - SENAI Valinhos
                        </li>
                        <li>
                            <strong>Ensino Médio</strong> - Sesi Valinhos 299
                        </li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h2 className="text-xl font-bold text-gray-900">Contato</h2>
                    <ul className="list-none list-inside text-gray-700 mt-4 text-base space-y-2">
                        <li>
                            <strong>Telefone:</strong> (19) 98872-7143
                        </li>
                        <li>
                            <strong>LinkedIn:</strong> 
                            <a href="https://www.linkedin.com/in/leonardo-oliveira" className="text-blue-500 hover:underline">
                                linkedin.com/in/leonardo-oliveira
                            </a>
                        </li>
                        <li>
                            <strong>GitHub:</strong> 
                            <a href="https://github.com/leonardo-oliveira" className="text-blue-500 hover:underline">
                                github.com/leonardo-oliveira
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
                        Editar Perfil
                    </button>
                </div>
                <div className="mt-6">
                    <a
                        href="/api"
                        className="w-full inline-block text-center bg-gray-800 text-white py-2 px-4 rounded-md shadow-lg hover:bg-gray-600 transition duration-300"
                    >
                        Próxima Página
                    </a>
                </div>
            </div>
        </div>
    );
}