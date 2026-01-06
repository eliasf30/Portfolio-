import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact">
  <div className="contact-box">
    <h2>Contacto</h2>

    <p className="contact-text">
      Estoy buscando mi primera oportunidad como desarrollador web
      junior / entry-level.
      <br />
      Si te interesa mi perfil o querés charlar, podés contactarme acá:
    </p>

    <div className="contact-links">
      <a
          href="https://github.com/eliasf30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/elias-figueroa-ab8312187/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <a href="maestrofigueroa1@gmail.com">
          <FaEnvelope /> Email
        </a>
    </div>
  </div>
</section>
  );
}


