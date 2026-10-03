'use client';

import { useEffect, useState } from 'react';

const MSGS = ['carregando nós', 'conectando arestas', 'calibrando parallax', 'sincronizando SSA'];

export default function Boot() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);
  const [msg, setMsg] = useState(MSGS[0]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPct((p) => {
        const n = p + Math.random() * 28;
        if (n >= 100) {
          window.clearInterval(id);
          window.setTimeout(() => setDone(true), 250);
          return 100;
        }
        return n;
      });
    }, 140);
    const kill = window.setTimeout(() => setDone(true), 3500);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(kill);
    };
  }, []);

  useEffect(() => {
    setMsg(MSGS[Math.floor(pct / 28) % MSGS.length]);
  }, [pct]);

  return (
    <div id="boot" className={done ? 'done' : ''} role="status" aria-label="Carregando">
      <div className="boot-box">
        <div>&gt; boot cundesz.sys --v1.0</div>
        <div className="dim">
          &gt; montando constelação … <span>{Math.floor(pct)}%</span>
        </div>
        <div>
          &gt; <span>{msg}</span>
          <span className="dim">_</span>
        </div>
      </div>
    </div>
  );
}
