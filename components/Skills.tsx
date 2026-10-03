'use client';

import { useState } from 'react';
import Reveal from './Reveal';

type Node = { label: string; info: string };

const CATS: { title: string; nodes: Node[] }[] = [
  {
    title: 'O QUE EU ENTREGO',
    nodes: [
      { label: 'Sites e landing pages', info: 'Sites e landing pages rápidas, responsivas e bem organizadas — do layout ao formulário funcionando.' },
      { label: 'Interfaces responsivas', info: 'Telas que funcionam no celular e no desktop, com atenção a espaçamento, leitura e acessibilidade básica.' },
      { label: 'Painéis e dashboards', info: 'Painéis com números, tabelas e listagens — jeito simples de visualizar clientes, produtos e pedidos.' },
      { label: 'Sistemas com login', info: 'Fluxos com cadastro, login e áreas restritas, com validações e mensagens claras de erro.' },
      { label: 'Visual e temas', info: 'Temas claro e escuro, componentes reutilizáveis e cuidado visual sem exagero.' },
    ],
  },
  {
    title: 'COMO EU CONSTRUO',
    nodes: [
      { label: 'React / Next.js', info: 'Uso no dia a dia para interfaces e sistemas — por exemplo no ERP Lite com Next.js 14 e TypeScript.' },
      { label: 'TypeScript', info: 'Tipagem para evitar erro bobo e deixar o código mais seguro e legível.' },
      { label: 'Node + APIs', info: 'APIs simples em Node (listar, criar, editar, excluir) ligando o front ao banco.' },
      { label: 'Banco de dados', info: 'Modelagem e consulta de dados com Prisma e PostgreSQL.' },
      { label: 'Tailwind CSS', info: 'Estilização rápida e consistente com Tailwind.' },
      { label: 'Outras bases', info: 'Também tenho base em Vue/Nuxt e Angular de projetos anteriores.' },
    ],
  },
  {
    title: 'DADOS E CONFIANÇA',
    nodes: [
      { label: 'Consumo de APIs', info: 'Busco dados de APIs e mostro na tela com loading e tratamento de erro.' },
      { label: 'Autenticação', info: 'Login com senha protegida e sessão — área logada separada da pública.' },
      { label: 'CRUD completo', info: 'Cadastro, busca, edição e exclusão com confirmação.' },
      { label: 'Deploy', info: 'Publicação com deploy contínuo e banco em nuvem.' },
    ],
  },
  {
    title: 'COMO EU TRABALHO',
    nodes: [
      { label: 'Git e GitHub', info: 'Versionamento com commits claros, branches e pull requests.' },
      { label: 'Scrum / rotina', info: 'Organização por tarefas, prazos e comunicação direta.' },
      { label: 'Comunicação', info: 'Explico o que fiz de forma simples, documento e peço ajuda quando precisa.' },
      { label: 'Aprendizado rápido', info: 'Aprendo rápido a ferramenta que o projeto pedir e uso IA para acelerar com critério.' },
    ],
  },
];

export default function Skills() {
  const [sel, setSel] = useState<Node | null>(null);

  return (
    <section id="stack">
      <div className="sec-head">02 // O QUE EU FAÇO (clique nos nós)</div>
      <Reveal>
        <h2>
          Versátil de ponta a ponta.
        </h2>
        <p className="lead">
          Mais do que nomes de linguagens: o que eu consigo entregar. Clique em cada nó para ver como aplico
          na prática.
        </p>
      </Reveal>
      <div className="stack-grid">
        {CATS.map((cat) => (
          <Reveal key={cat.title} className="cat">
            <h3>
              <span>■</span> {cat.title}
            </h3>
            <div className="nodes">
              {cat.nodes.map((n) => (
                <button
                  key={n.label}
                  className={`node${sel?.label === n.label ? ' on' : ''}`}
                  onClick={() => setSel(n)}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div id="stack-out" aria-live="polite">
          <span className="ok">$ {sel ? `inspect --node ${sel.label.toLowerCase()}` : 'o-que-voce-faz?'}</span>
          <br />
          {sel ? sel.info : 'Clique em qualquer nó acima para ver na prática. Direto, sem enrolação.'}
        </div>
      </Reveal>
    </section>
  );
}
