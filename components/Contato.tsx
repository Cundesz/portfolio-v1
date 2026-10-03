import Reveal from './Reveal';

const EMAIL = 'joao.facundes123@gmail.com';

export default function Contato() {
  return (
    <section id="contato">
      <div className="sec-head">04 // CONTATO</div>
      <Reveal>
        <h2>Vamos conversar?</h2>
      </Reveal>
      <Reveal>
        <p className="contact-big">
          <a className="mail" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
      </Reveal>
      <Reveal>
        <p className="lead">
          Me chama direto no e-mail — costumo responder rápido. Se preferir, LinkedIn também funciona.
        </p>
      </Reveal>
      <Reveal>
        <div className="contact-row">
          <a className="btn solid" href={`mailto:${EMAIL}`}>
            ✉ ENVIAR E-MAIL
          </a>
          <a className="btn ghost" href="https://linkedin.com/in/cundesz" target="_blank" rel="noopener">
            in /cundesz
          </a>
          <a className="btn ghost" href="https://github.com/Cundesz" target="_blank" rel="noopener">
            gh /Cundesz
          </a>
        </div>
      </Reveal>
    </section>
  );
}
