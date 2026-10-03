'use client';

import Reveal from './Reveal';

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="sec-head">01 // SOBRE</div>
      <Reveal>
        <h2>Prazer, sou o João.</h2>
      </Reveal>
      <div className="about-grid">
        <Reveal className="idcard">
          <div className="photo">
            {/* Salve sua foto como public/avatar.jpg para ativar o retrato */}
            <img
              src="/avatar.jpg"
              alt="Foto de João Facundes"
              onError={(e) => {
                e.currentTarget.remove();
                document.getElementById('avatar-fb')?.style.setProperty('display', 'block');
              }}
            />
            <div id="avatar-fb" className="fallback" style={{ display: 'none' }}>
              JF
            </div>
          </div>
          <div className="idrows">
            NOME: <b>João Facundes</b>
            <br />
            BASE: <b>Salvador, BA</b>
            <br />
            CURSO: <b>Eng. Software · UCSAL</b>
            <br />
            ATUAÇÃO: <b>Sites e sistemas web</b>
            <br />
            STATUS: <b style={{ color: 'var(--ok)' }}>● ABERTO A OPORTUNIDADES</b>
          </div>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '.7rem', color: 'var(--mut)' }}>
            ↓ salve sua foto como <b style={{ color: 'var(--acc)' }}>public/avatar.jpg</b> p/ ativar o retrato.
          </p>
        </Reveal>
        <Reveal className="about-txt">
          <p>
            Sou estudante de <b>Engenharia de Software na UCSAL</b>, moro em Salvador e trabalho com{' '}
            <b>desenvolvimento web</b>. Gosto de tirar ideias do papel: desde uma página bem feita até um
            sistema com login, banco de dados e painel administrativo.
          </p>
          <p>
            Me considero <b>versátil</b>: cuido da interface, da experiência de uso e também da parte de dados
            e publicação. Já passei por diferentes ferramentas e aprendo rápido o que cada projeto pede.
          </p>
          <p>
            Hoje busco uma <b>vaga de estágio ou júnior</b> para ajudar de verdade no dia a dia, aprender com
            o time e evoluir a cada entrega.
          </p>
          <div className="timeline">
            <div>
              <b>Base →</b> lógica, HTML, CSS, JavaScript e boas práticas
            </div>
            <div>
              <b>Projetos →</b> interfaces, formulários, APIs e bancos de dados
            </div>
            <div>
              <b>Agora →</b> portfólio, estudos e em busca de oportunidade
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
