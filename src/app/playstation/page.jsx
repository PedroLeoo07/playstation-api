"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import styles from "./Ps.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Hook utilitário simples
function useMounted() {
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => { mountedRef.current = false; };
  }, []);
  return mountedRef;
}

// Hook de jogos usando os estados locais (mantém useState no componente)
function usePlaystationGames({ setPlaystations, setLoading }) {
  const [fetchedAt, setFetchedAt] = useState(null);
  const controllerRef = useRef(null);
  const cacheRef = useRef(null);

  const fetchGames = useCallback(async (force = false) => {
    if (controllerRef.current) controllerRef.current.abort();
    if (cacheRef.current && !force) {
      toast.info("Usando cache ✅", { autoClose: 1600 });
      setPlaystations(cacheRef.current);
      return;
    }
    controllerRef.current = new AbortController();
    try {
      setLoading(true);
      toast.dismiss();
      toast.info("Buscando jogos...", { autoClose: 1200 });
      const res = await axios.get("https://api.sampleapis.com/playstation/games", {
        signal: controllerRef.current.signal
      });
      cacheRef.current = res.data;
      setPlaystations(res.data);
      setFetchedAt(new Date());
      toast.success(`Encontrados ${res.data.length} jogos 🎮`, { autoClose: 2400 });
    } catch (err) {
      if (axios.isCancel(err)) {
        toast.warning("Busca cancelada", { autoClose: 1500 });
      } else {
        console.error(err);
        toast.error("Erro ao buscar jogos", { autoClose: 2500 });
      }
    } finally {
      setLoading(false);
    }
  }, [setPlaystations, setLoading]);

  const clear = useCallback(() => {
    setPlaystations([]);
    cacheRef.current = null;
    setFetchedAt(null);
    toast.info("Lista limpa", { autoClose: 1400 });
  }, [setPlaystations]);

  return { fetchGames, clear, fetchedAt, hasCache: !!cacheRef.current };
}

export default function Page() {
  // Estados locais mantidos conforme pedido
  const [playstations, setPlaystations] = useState([]);
  const [loading, setLoading] = useState(false);

  const { fetchGames, clear, fetchedAt, hasCache } = usePlaystationGames({
    setPlaystations,
    setLoading
  });
  useMounted();

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.title}>PlayStation</h1>
        {fetchedAt && !loading && (
          <p className={styles.count}>
            Atualizado em {fetchedAt.toLocaleTimeString()} {hasCache && "• cache"}
          </p>
        )}

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
            onClick={() => fetchGames()}
            className={styles.fetchButton}
            disabled={loading}
          >
            {loading ? "Carregando..." : "Buscar Jogos 🎮"}
          </button>
          {playstations.length > 0 && !loading && (
            <button
              onClick={clear}
              style={{
                marginLeft: "0.75rem",
                background: "#e53e3e",
                color: "#fff",
                padding: ".75rem 1.5rem",
                borderRadius: "0.5rem",
                fontWeight: 600,
                cursor: "pointer",
                border: "none",
                boxShadow: "0 6px 16px -4px rgba(229,62,62,.4)"
              }}
            >
              Limpar
            </button>
          )}
          {playstations.length === 0 && !loading && hasCache && (
            <button
              onClick={() => fetchGames(true)}
              style={{
                marginLeft: "0.75rem",
                background: "#805ad5",
                color: "#fff",
                padding: ".75rem 1.5rem",
                borderRadius: "0.5rem",
                fontWeight: 600,
                cursor: "pointer",
                border: "none",
                boxShadow: "0 6px 16px -4px rgba(128,90,213,.4)"
              }}
            >
              Recarregar (forçar)
            </button>
          )}
        </div>

        <div className={styles.grid}>
          {playstations.map((playstation, idx) => {
            const genres = Array.isArray(playstation.genre)
              ? playstation.genre
              : (playstation.genre ? String(playstation.genre).split(/[,/]/).map(g => g.trim()) : []);
            return (
              <div
                key={`${playstation.id ?? "noid"}-${idx}`}
                className={styles.card}
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                <h2 className={styles.cardTitle}>
                  {playstation.name || playstation.title || "Sem título"}
                </h2>

                {genres.length > 0 && (
                  <div className={styles.pillsWrap}>
                    {genres.slice(0, 8).map(g => (
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
      <ToastContainer position="bottom-right" theme="dark" newestOnTop pauseOnFocusLoss={false} />
    </div>
  );
}