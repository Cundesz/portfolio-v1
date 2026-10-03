'use client';

import { useEffect, useState } from 'react';

const PHRASES = [
  'crio sites, interfaces e sistemas web',
  'versátil: do layout ao banco de dados',
  'vamos tirar sua ideia do papel?',
];

export default function Hero() {
  const [text, setText] = useState(PHRASES[0]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let ti = 0;
    let ci = PHRASES[0].length;
    let del = true;
    let alive = true;
    let t = 0;
    const step = () => {
      if (!alive) return;
      const full = PHRASES[ti];
      setText(full.slice(0, ci));
      let delay = del ? 28 : 55;
      if (!del) {
        ci++;
        if (ci > full.length) {
          del = true;
          delay = 1800;
        }
      } else {
        ci--;
        if (ci === 0) {
          del = false;
          ti = (ti + 1) % PHRASES.length;
        }
      }
      t = window.setTimeout(step, delay);
    };
    t = window.setTimeout(step, 1800);
    return () => {
      alive = false;
      window.clearTimeout(t);
    };
  }, []);

  return (
    <section className="hero">
      <div className="kicker">// SALVADOR, BA — DESENVOLVEDOR DE SOFTWARE</div>
      <h1>
        JOÃO
        <br />
        <span className="out">FACUNDES</span>
      </h1>
      <div className="role">
        &gt; <span>{text}</span>
        <span className="caret">_</span>
      </div>
      <p className="impact">
        Sou desenvolvedor em formação, focado em <b>construir coisas úteis para a web</b> — de páginas rápidas
        e bem desenhadas a sistemas completos com login, dados e painel. Gosto de pegar uma ideia e levar até
        o produto funcionando.
      </p>
      <div className="cta">
        <a className="btn solid" href="#projetos">
          ▶ VER TRABALHOS
        </a>
      </div>
      <div className="term" aria-label="Terminal de status">
        <div className="term-bar">
          <i />
          <i />
          <i />
          <span style={{ marginLeft: '.5rem' }}>cundesz@ssa:~</span>
        </div>
        <div className="term-body">
          <span className="p">$</span> whoami
          <br />
          joao_facundes — eng. software · salvador, bahia
          <br />
          <span className="p">$</span> status
          <br />
          aprendendo coisas novas · construindo todos os dias
        </div>
      </div>
      <div className="hero-meta">
        <span>
          ▸ <b>Interfaces</b> responsivas
        </span>
        <span>
          ▸ <b>Sistemas</b> completos
        </span>
        <span>
          ▸ <b>Deploy</b> e entrega
        </span>
      </div>
      <div className="scroll-hint">SCROLL PARA NAVEGAR NA CONSTELAÇÃO ↓</div>
    </section>
  );
}
