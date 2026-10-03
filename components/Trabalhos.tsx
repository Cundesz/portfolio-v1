import Reveal from './Reveal';

export default function Trabalhos() {
  return (
    <section id="projetos">
      <div className="sec-head">03 // TRABALHOS</div>
      <Reveal>
        <h2>
          Alguns trabalhos
        </h2>
        <p className="lead">
          Uma seleção simples do que já fiz e do que estou construindo. Sem favorito absoluto — cada um mostra
          uma parte do que sei fazer.
        </p>
      </Reveal>
      <div className="proj-grid">
        <Reveal className="card">
          <div className="sub">SISTEMA · EM PRODUÇÃO</div>
          <h3>ERP Lite</h3>
          <p>
            Sistema de gestão com clientes, produtos, pedidos e painel. Inclui login, temas claro/escuro e
            banco de dados em nuvem.
          </p>
          <div className="tags">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Prisma</span>
            <span>PostgreSQL</span>
            <span>Tailwind</span>
          </div>
          <div className="demo-box">
            Demo: <code>erplite-rho.vercel.app</code>
            <br />
            login <code>admin@erp.com</code> · <code>admin123</code>
          </div>
          <div className="proj-links">
            <a className="btn solid" href="https://erplite-rho.vercel.app" target="_blank" rel="noopener">
              ↗ ABRIR
            </a>
            <a className="btn ghost" href="https://github.com/Cundesz/erp-lite" target="_blank" rel="noopener">
              ⌁ CÓDIGO
            </a>
          </div>
        </Reveal>
        <Reveal className="card">
          <div className="sub">SITE PESSOAL · CÓDIGO ABERTO</div>
          <h3>Portfólio v1 — este site</h3>
          <p>
            A página que você está vendo: one-page em Next.js com fundo 3D em three.js, nós de habilidade
            clicáveis e deploy contínuo na Vercel.
          </p>
          <div className="tags">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Tailwind</span>
            <span>three.js</span>
          </div>
          <div className="proj-links">
            <a className="btn solid" href="/">
              ↗ VOCÊ ESTÁ AQUI
            </a>
            <a className="btn ghost" href="https://github.com/Cundesz/portfolio-v1" target="_blank" rel="noopener">
              ⌁ CÓDIGO
            </a>
          </div>
        </Reveal>
        <Reveal className="card soon">
          <div className="sub">EM ANDAMENTO</div>
          <b>Próximo projeto</b>
          Estou planejando um sistema novo, com foco em experiência de uso e dados reais. Em breve publico
          aqui com link e código.
        </Reveal>
        <Reveal className="card soon">
          <div className="sub">ESTUDOS</div>
          <b>Experimentos e estudos</b>
          Testes de interface, clones e pequenos desafios para praticar. Acompanhe em github.com/Cundesz.
        </Reveal>
      </div>
    </section>
  );
}
