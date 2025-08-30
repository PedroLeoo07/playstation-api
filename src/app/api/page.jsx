"use client";

import styles from './Api.module.css';
import { useRouter } from 'next/navigation'; 

export default function Api() {
  const router = useRouter();

  return (
    <div className={`${styles.container} ${styles.hero}`}>
      <header className={styles.header}>
        <h1 className={styles.title}>API da PlayStation</h1>
        <p className={styles.description}>
          Bem-vindo à API da PlayStation! Aqui você pode acessar informações sobre jogos, consoles e muito mais.
        </p>
      </header>

      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h2>Explore jogos, imagens e avaliações</h2>
          <p>Dados fornecidos via RAWG — rápido, visual e pronto para consumo por sua aplicação.</p>
        </div>
      </div>

    
      <section className={styles.apiInfo}>
        <h2 className={styles.apiInfoTitle}>Informações da API</h2>

        <div className={styles.apiItem}>
          <strong>Nome da API escolhida:</strong>
          <div>RAWG Video Games API</div>
        </div>

        <div className={styles.apiItem}>
          <strong>Documentação oficial:</strong>
          <div>
            <a
              href="https://rawg.io/apidocs"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.apiLink}
            >
              https://rawg.io/apidocs
            </a>
          </div>
        </div>

        <div className={styles.apiItem}>
          <strong>URL base (axios/fetch):</strong>
          <div className={styles.mono}>https://api.rawg.io/api</div>
        </div>

        <div className={styles.apiItem}>
          <strong>Endpoint escolhido:</strong>
          <div className={styles.mono}>/games</div>
        </div>

        <div className={styles.apiItem}>
          <strong>Atributos retornados (exemplo):</strong>
          <ul className={styles.list}>
            <li>id</li>
            <li>name</li>
            <li>released</li>
            <li>background_image</li>
            <li>rating</li>
            <li>platforms</li>
            <li>genres</li>
          </ul>
        </div>

        <div className={styles.apiItem}>
          <strong>Descrição breve:</strong>
          <p>
            A RAWG API fornece dados sobre jogos, lançamentos, imagens e metadados relacionados a
            videogames. Permite recuperar listas de jogos, detalhes de cada título, imagens de capa,
            classificações e informações sobre plataformas e gêneros.
          </p>
        </div>
      </section>
     

      <section className={styles.features}>
        <h2>Recursos</h2>
        <ul>
          <li>Obtenha detalhes sobre jogos populares.</li>
          <li>Explore informações sobre consoles da PlayStation.</li>
          <li>Descubra novidades e lançamentos.</li>
        </ul>
      </section>

      <button className={styles.nextButton} onClick={() => router.push('/playstation')}>
        Jogos Playstation
      </button>
    </div>
  );
}
