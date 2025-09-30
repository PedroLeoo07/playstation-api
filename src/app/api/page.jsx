"use client";

import styles from './Api.module.css';
import { useRouter } from 'next/navigation'; 
import PageLayout from "@/components/PageLayout";

export default function Api() {
  const router = useRouter();

  return (
    <PageLayout>
      <div className={`${styles.container} ${styles.hero}`}>
      <div className={styles.backgroundEffect}></div>
      
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span className={styles.titleGlow}>🎮 API da PlayStation</span>
        </h1>
        <p className={styles.description}>
        Bem-vindo à API da PlayStation!
        Aqui você encontra informações sobre jogos, consoles e muito mais para integrar em suas aplicações de forma simples e rápida.
        </p>
      </header>

      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h2>🎮 Explore jogos, imagens e avaliações</h2>
          <p>⚡ Dados fornecidos via RAWG — rápido, visual e pronto para consumo por sua aplicação.</p>
        </div>
        <div className={styles.bannerGlow}></div>
      </div>

      <section className={styles.apiInfo}>
        <h2 className={styles.apiInfoTitle}>📊 Informações da API</h2>

        <div className={styles.apiItem}>
          <strong>🔥 Nome da API escolhida: RAWG Video Games API</strong>
          <div className={styles.highlightText}>📚 Documentação oficial: https://rawg.io/apidocs</div>
        </div>

        <div className={styles.apiItem}>
          <strong>🔗 URL base (axios/fetch):</strong>
          <div className={styles.mono}>https://api.rawg.io/api</div>
        </div>

        <div className={styles.apiItem}>
          <strong>🎯 Endpoint escolhido:</strong>
          <div className={styles.mono}>/games</div>
        </div>

        <div className={styles.apiItem}>
          <strong>⭐ Atributos retornados (exemplo):</strong>
          <ul className={styles.list}>
            <li>🆔 id</li>
            <li>🎮 name</li>
            <li>📅 released</li>
            <li>🖼️ background_image</li>
            <li>⭐ rating</li>
            <li>🎲 platforms</li>
            <li>🎨 genres</li>
          </ul>
        </div>

        <div className={styles.apiItem}>
          <strong>📝 Descrição breve:</strong>
          <p>
          A RAWG Video Games API fornece dados completos sobre jogos, lançamentos, imagens e metadados relacionados ao universo gamer.
Com ela, é possível:

Recuperar listas de jogos organizadas por popularidade ou data de lançamento.

Obter detalhes de cada título (nome, data, plataformas, gêneros e avaliações).

Acessar imagens oficiais e classificações da comunidade.
          </p>
        </div>
      </section>
     
      <section className={styles.features}>
        <h2>🚀 Recursos</h2>
        <ul>
          <li>🎮 Obtenha detalhes sobre jogos populares.</li>
          <li>🎯 Explore informações sobre consoles da PlayStation.</li>
          <li>✨ Descubra novidades e lançamentos.</li>
        </ul>
      </section>

      <button className={styles.nextButton} onClick={() => router.push('/playstation')}>
        <span className={styles.buttonText}>🎮 Jogos Playstation</span>
        <div className={styles.buttonGlow}></div>
      </button>
    </div>
    </PageLayout>
  );
}