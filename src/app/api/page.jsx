"use client";

import styles from './Api.module.css';
import { useRouter } from 'next/navigation'; // Corrigido para 'next/navigation'

export default function Api() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>API da PlayStation</h1>
      <p className={styles.description}>
        Bem-vindo à API da PlayStation! Aqui você pode acessar informações sobre jogos, consoles e muito mais.
      </p>
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
