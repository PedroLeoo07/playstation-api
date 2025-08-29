"use client";

import { useState } from "react";
import axios from "axios";

export default function page() {
  const [playstations, setPlaystations] = useState([]);
  const [loading, setLoading] = useState(false);

  const buscarPlaystations = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.sampleapis.com/playstation/games");
      const data = response.data;

      console.log("Dados recebidos da API:", data); // Log para depuração
      setPlaystations(data);
    } catch (error) {
      console.error("Erro ao buscar PlayStations:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ebf8ff", padding: "3rem" }}>
      <div style={{ maxWidth: "1024px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", marginBottom: "2rem" }}>
          PlayStation
        </h1>

        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <button
              onClick={buscarPlaystations}
              disabled={loading}
              style={{
                backgroundColor: "#4299e1",
                color: "white",
                padding: "0.75rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: "600",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "background-color 0.3s",
                border: "none",
              }}
              onMouseOver={(e) => !loading && (e.target.style.backgroundColor = "#3182ce")}
              onMouseOut={(e) => !loading && (e.target.style.backgroundColor = "#4299e1")}
            >
              {loading ? "Carregando..." : "Buscar Jogos 🎮"}
            </button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
          {playstations.map((playstation) => (
            <div
              key={playstation.id}
              style={{
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                {playstation.name || playstation.title || "Sem título"}
              </h2>

              <p style={{ color: "#4a5568", margin: "0.5rem 0" }}>
                <strong>Gênero:</strong>{" "}
                {Array.isArray(playstation.genre)
                  ? playstation.genre.join(", ")
                  : playstation.genre || "N/A"}
              </p>

              <p style={{ color: "#4a5568", margin: "0.25rem 0" }}>
                <strong>Desenvolvedores:</strong>{" "}
                {Array.isArray(playstation.developers)
                  ? playstation.developers.join(", ")
                  : playstation.developers || "N/A"}
              </p>

              <p style={{ color: "#4a5568", margin: "0.25rem 0" }}>
                <strong>Editora(s):</strong>{" "}
                {Array.isArray(playstation.publishers)
                  ? playstation.publishers.join(", ")
                  : playstation.publishers || "N/A"}
              </p>

              {playstation.releaseDates && typeof playstation.releaseDates === "object" && (
                <div style={{ color: "#4a5568", marginTop: "0.5rem" }}>
                  <strong>Datas de Lançamento:</strong>
                  <ul style={{ marginTop: "0.25rem", paddingLeft: "1.25rem", marginBottom: 0 }}>
                    {Object.entries(playstation.releaseDates).map(([region, date]) => (
                      <li key={region}>
                        {region}: {date || "N/A"}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}