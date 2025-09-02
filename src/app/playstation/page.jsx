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

// Componente Modal
function GameModal({ game, onClose }) {
  if (!game) return null;

  const genres = Array.isArray(game.genre)
    ? game.genre
    : (game.genre ? String(game.genre).split(/[,/]/).map(g => g.trim()) : []);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>×</button>
        
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            {game.name || game.title || "Sem título"}
          </h2>
        </div>

        <div className={styles.modalBody}>
          {genres.length > 0 && (
            <div className={styles.modalSection}>
              <h3>Gêneros</h3>
              <div className={styles.modalPills}>
                {genres.map((genre, idx) => (
                  <span key={idx} className={styles.modalPill}>
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className={styles.modalSection}>
            <h3>Desenvolvedores</h3>
            <p>{Array.isArray(game.developers) ? game.developers.join(", ") : game.developers || "N/A"}</p>
          </div>

          <div className={styles.modalSection}>
            <h3>Editoras</h3>
            <p>{Array.isArray(game.publishers) ? game.publishers.join(", ") : game.publishers || "N/A"}</p>
          </div>

          {game.releaseDates && typeof game.releaseDates === "object" && (
            <div className={styles.modalSection}>
              <h3>Datas de Lançamento</h3>
              <div className={styles.modalReleaseGrid}>
                {Object.entries(game.releaseDates).map(([region, date]) => (
                  <div key={region} className={styles.modalReleaseItem}>
                    <strong>{region}:</strong> {date || "N/A"}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  // Estados locais mantidos conforme pedido
  const [playstations, setPlaystations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);

  const { fetchGames, clear, fetchedAt, hasCache } = usePlaystationGames({
    setPlaystations,
    setLoading
  });
  useMounted();

  const filteredGames = playstations.filter(game =>
    (game.name || game.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
    (Array.isArray(game.genre) ? game.genre.join(" ") : game.genre || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.particlesContainer}>
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className={styles.particle} style={{
            '--random': Math.random(),
            '--delay': Math.random() * 20 + 's',
            '--duration': (Math.random() * 10 + 10) + 's'
          }} />
        ))}
      </div>
      
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1 className={styles.title}>PlayStation Games</h1>
          <div className={styles.subtitle}>Descubra os melhores jogos do PlayStation</div>
        </div>

        {fetchedAt && !loading && (
          <p className={styles.count}>
            <span className={styles.updateTime}>Atualizado em {fetchedAt.toLocaleTimeString()}</span>
            {hasCache && <span className={styles.cacheIndicator}>• cache ativo</span>}
          </p>
        )}

        {loading && (
          <div className={styles.loaderWrap}>
            <div className={styles.loadingSpinner}>
              <div className={styles.spinnerInner}></div>
            </div>
            <p className={styles.loadingText}>Carregando jogos incríveis...</p>
          </div>
        )}

        {!loading && playstations.length > 0 && (
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Buscar jogos por nome ou gênero..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <div className={styles.gameCount}>
              {filteredGames.length} de {playstations.length} jogo(s)
            </div>
          </div>
        )}

        <div className={styles.actions}>
          <button
            onClick={() => fetchGames()}
            className={`${styles.fetchButton} ${loading ? styles.loading : ''}`}
            disabled={loading}
          >
            <span className={styles.buttonText}>
              {loading ? "Carregando..." : "Buscar Jogos"}
            </span>
            <span className={styles.buttonIcon}>🎮</span>
          </button>
          
          {playstations.length > 0 && !loading && (
            <button onClick={clear} className={styles.clearButton}>
              <span>Limpar</span>
              <span className={styles.buttonIcon}>🗑️</span>
            </button>
          )}
          
          {playstations.length === 0 && !loading && hasCache && (
            <button onClick={() => fetchGames(true)} className={styles.reloadButton}>
              <span>Recarregar</span>
              <span className={styles.buttonIcon}>🔄</span>
            </button>
          )}
        </div>

        <div className={styles.grid}>
          {filteredGames.map((playstation, idx) => {
            const genres = Array.isArray(playstation.genre)
              ? playstation.genre
              : (playstation.genre ? String(playstation.genre).split(/[,/]/).map(g => g.trim()) : []);
            return (
              <div
                key={`${playstation.id ?? "noid"}-${idx}`}
                className={styles.card}
                style={{ 
                  '--animation-delay': `${idx * 80}ms`,
                  '--card-index': idx
                }}
                onClick={() => setSelectedGame(playstation)}
              >
                <div className={styles.cardGlow}></div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>
                      {playstation.name || playstation.title || "Sem título"}
                    </h2>
                    <div className={styles.cardNumber}>#{idx + 1}</div>
                  </div>

                  {genres.length > 0 && (
                    <div className={styles.pillsWrap}>
                      {genres.slice(0, 3).map((g, genreIdx) => (
                        <span 
                          key={g} 
                          className={styles.pill}
                          style={{ '--pill-delay': `${genreIdx * 100}ms` }}
                        >
                          {g}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className={styles.metaSection}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Desenvolvedores:</span>
                      <span className={styles.metaValue}>
                        {Array.isArray(playstation.developers)
                          ? playstation.developers.join(", ")
                          : playstation.developers || "N/A"}
                      </span>
                    </div>

                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Editora(s):</span>
                      <span className={styles.metaValue}>
                        {Array.isArray(playstation.publishers)
                          ? playstation.publishers.join(", ")
                          : playstation.publishers || "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {!loading && playstations.length > 0 && filteredGames.length === 0 && (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>🔍</div>
            <h3>Nenhum jogo encontrado</h3>
            <p>Tente buscar por outro termo</p>
          </div>
        )}
      </div>
      
      <GameModal 
        game={selectedGame} 
        onClose={() => setSelectedGame(null)} 
      />
      
      <ToastContainer position="bottom-right" theme="dark" newestOnTop pauseOnFocusLoss={false} />
    </div>
  );
}