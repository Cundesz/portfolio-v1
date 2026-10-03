'use client';

import { useEffect, useState } from 'react';

export default function Hud() {
  const [time, setTime] = useState('--:--');
  const [prog, setProg] = useState(0);

  useEffect(() => {
    const tick = () => {
      try {
        setTime(
          new Date().toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'America/Bahia',
          }) + ' BRT'
        );
      } catch {
        setTime('');
      }
    };
    tick();
    const id = window.setInterval(tick, 20000);
    const onScroll = () => {
      const h = document.documentElement;
      setProg(h.scrollTop / (h.scrollHeight - h.clientHeight || 1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.clearInterval(id);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div id="progress" style={{ width: `${prog * 100}%` }} aria-hidden="true" />
      <header>
        <div className="hud">
          <a className="logo" href="#topo">
            CUNDESZ<small>.sys</small>
          </a>
          <span className="status">
            <span className="dot" /> ONLINE · SSA {time}
          </span>
          <nav aria-label="Navegação">
            <a href="#sobre">01_sobre</a>
            <a href="#stack">02_o-que-faco</a>
            <a href="#projetos">03_trabalhos</a>
            <a href="#contato">04_contato</a>
          </nav>
        </div>
      </header>
    </>
  );
}
