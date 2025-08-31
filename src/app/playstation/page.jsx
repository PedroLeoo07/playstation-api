"use client";

import { useState } from "react";
import axios from "axios";
import styles from "./Ps.module.css";

export default function Page() {
  const [playstations, setPlaystations] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarPlaystations = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.sampleapis.com/playstation/games");
      setPlaystations(response.data);
    } catch (error) {
      console.error("Erro ao buscar PlayStations:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.title}>PlayStation</h1>

        {loading && (
          <div className={styles.loaderWrap}>
            <div className={styles.loadingSpinner} />
            <p>Carregando jogos...</p>
          </div>
        )}

        {!loading && playstations.length > 0 && (
          <div className={styles.count}>
            {playstations.length} jogo(s) encontrados
          </div>
        )}

        <div className={styles.actions}>
          <button
            onClick={buscarPlaystations}
            className={styles.fetchButton}
            disabled={loading}
          >
            {loading ? "Carregando..." : "Buscar Jogos 🎮"}
          </button>
        </div>

        <div className={styles.grid}>
          {playstations.map((playstation, idx) => {
            const genres = Array.isArray(playstation.genre)
              ? playstation.genre
              : (playstation.genre ? String(playstation.genre).split(/[,/]/).map(g => g.trim()) : []);
            return (
              <div
                key={`${playstation.id}-${idx}`}
                className={styles.card}
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                <h2 className={styles.cardTitle}>
                  {playstation.name || playstation.title || "Sem título"}
                </h2>
                {genres.length > 0 && (
                  <div className={styles.pillsWrap}>
                    {genres.slice(0,8).map(g => (
                      <span key={g} className={styles.pill}>{g}</span>
                    ))}
                  </div>
                )}

                <p className={styles.meta}>
                  <strong>Gênero:</strong>{" "}
                  {Array.isArray(playstation.genre)
                    ? playstation.genre.join(", ")
                    : playstation.genre || "N/A"}
                </p>

                <p className={styles.meta}>
                  <strong>Desenvolvedores:</strong>{" "}
                  {Array.isArray(playstation.developers)
                    ? playstation.developers.join(", ")
                    : playstation.developers || "N/A"}
                </p>

                <p className={styles.meta}>
                  <strong>Editora(s):</strong>{" "}
                  {Array.isArray(playstation.publishers)
                    ? playstation.publishers.join(", ")
                    : playstation.publishers || "N/A"}
                </p>

                {playstation.releaseDates && typeof playstation.releaseDates === "object" && (
                  <div className={styles.releaseBlock}>
                    <strong>Datas de Lançamento:</strong>
                    <ul className={styles.releaseList}>
                      {Object.entries(playstation.releaseDates).map(([region, date]) => (
                        <li key={region}>
                          {region}: {date || "N/A"}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}