"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PageLayout from "@/components/PageLayout";
import style from "./not-found.module.css"

const NotFound = () => {
  const [glitchActive, setGlitchActive] = useState(false);
  const [currentSymbol, setCurrentSymbol] = useState(0);
  const symbols = ['△', '□', '○', '✕'];

  useEffect(() => {
    // Efeito de glitch aleatório
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    // Rotação dos símbolos
    const symbolInterval = setInterval(() => {
      setCurrentSymbol(prev => (prev + 1) % symbols.length);
    }, 800);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(symbolInterval);
    };
  }, []);

  const handleControllerClick = () => {
    // Vibração visual ao clicar no controle
    const controller = document.querySelector(`.${style.controller}`);
    controller?.classList.add(style.shake);
    setTimeout(() => {
      controller?.classList.remove(style.shake);
    }, 500);
  };

  return (
    <PageLayout>
      <div className={`${style['not-found-container']} ${glitchActive ? style.glitch : ''}`}>
      <div className={style['ps-background']}>
        <div className={style['ps-symbols']}>
          <span className={`${style.symbol} ${style.triangle} ${style.floating}`}>△</span>
          <span className={`${style.symbol} ${style.square} ${style.floating}`}>□</span>
          <span className={`${style.symbol} ${style.circle} ${style.floating}`}>○</span>
          <span className={`${style.symbol} ${style.x} ${style.floating}`}>✕</span>
          <span className={`${style.symbol} ${style.pulse}`}>△</span>
          <span className={`${style.symbol} ${style.pulse}`}>□</span>
          <span className={`${style.symbol} ${style.pulse}`}>○</span>
          <span className={`${style.symbol} ${style.pulse}`}>✕</span>
        </div>
        <div className={style['scan-lines']}></div>
      </div>
      
      <div className={style['error-content']}>
        <div className={style['ps-logo']}>
          <span className={`${style['ps-text']} ${style.neon}`}>PLAYSTATION</span>
          <div className={style['logo-glow']}></div>
        </div>
        
        <div className={style['error-code']}>
          <span className={`${style['error-number']} ${style['digital-display']}`}>
            4<span className={style.flicker}>0</span>4
          </span>
          <span className={style['error-subtitle']}>PÁGINA NÃO ENCONTRADA</span>
          <div className={style['hologram-effect']}>
            <span className={style['hologram-text']}>CONNECTION LOST</span>
          </div>
        </div>
        
        <div className={style['error-message']}>
          <p className={style.typewriter}>Ops! A página que você está procurando não foi encontrada.</p>
          <p className={style.typewriter}>Parece que você se perdeu no multiverso dos games.</p>
          <div className={style['matrix-rain']}>
            <span>{symbols[currentSymbol]}</span>
            <span>{symbols[(currentSymbol + 1) % symbols.length]}</span>
            <span>{symbols[(currentSymbol + 2) % symbols.length]}</span>
          </div>
        </div>
        
        <div className={style['controller-animation']}>
          <div 
            className={`${style.controller} ${style.interactive}`}
            onClick={handleControllerClick}
          >
            <div className={style['controller-body']}>
              <div className={style['led-indicator']}></div>
            </div>
            <div className={style['d-pad']}>
              <div className={style['d-pad-center']}></div>
            </div>
            <div className={style.buttons}>
              <div className={`${style.button} ${style.triangle} ${style.pressable}`}>△</div>
              <div className={`${style.button} ${style.square} ${style.pressable}`}>□</div>
              <div className={`${style.button} ${style.circle} ${style.pressable}`}>○</div>
              <div className={`${style.button} ${style.x} ${style.pressable}`}>✕</div>
            </div>
            <div className={style['analog-sticks']}>
              <div className={`${style.stick} ${style.left} ${style.wobble}`}></div>
              <div className={`${style.stick} ${style.right} ${style.wobble}`}></div>
            </div>
            <div className={style['energy-field']}></div>
          </div>
          <div className={style['controller-shadow']}></div>
        </div>
        
        <div className={style['action-buttons']}>
          <Link href="/playstation" className={`${style['ps-button']} ${style.primary} ${style.cyberpunk}`}>
            <span className={style['button-text']}>Voltar ao Início</span>
            <div className={style['button-glow']}></div>
            <div className={style['scan-effect']}></div>
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className={`${style['ps-button']} ${style.secondary} ${style.cyberpunk}`}
          >
            <span className={style['button-text']}>Página Anterior</span>
            <div className={style['button-glow']}></div>
            <div className={style['scan-effect']}></div>
          </button>
        </div>

        <div className={style['particle-system']}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`${style.particle} ${style[`particle-${i % 4}`]}`}>
              {symbols[i % 4]}
            </div>
          ))}
        </div>
      </div>
    </div>
    </PageLayout>
  );
};

export default NotFound;
