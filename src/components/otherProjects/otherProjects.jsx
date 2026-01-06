import "./otherProjects.css";

export default function OtherProjects() {
  return (
    <section className="other-projects">
      <h2>Proyectos Frontend Comerciales</h2>
      <p className="subtitle">
        Tiendas desarrolladas en React para distintos emprendimientos reales.
      </p>

      <div className="projects-grid">
        <article className="project-card">
          <h3>Shiitake Sushi 🍣</h3>
          <p>
            Sitio web para restaurante de sushi. Catálogo de productos,
            carrito de compras y contacto directo vía WhatsApp.
          </p>
          <span className="tech">React · Redux · WhatsApp API</span>
          <div className="links">
            <a
              href="https://shiitake-sushi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver sitio
            </a>
          </div>
        </article>

        <article className="project-card">
          <h3>Buhonero Vape Shop 💨</h3>
          <p>
            Tienda online para venta de vapeadores. Enfoque en organización
            del catálogo y experiencia de compra simple.
          </p>
          <span className="tech">React · Redux · WhatsApp API</span>
          <div className="links">
            <a
              href="https://buhonero.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver sitio
            </a>
          </div>
        </article>

        <article className="project-card">
          <h3>Tienda Bazán 👕</h3>
          <p>
            Tienda de indumentaria desarrollada para un emprendimiento real.
            Diseño visual, foco en mobile y flujo de compra claro.
          </p>
          <span className="tech">React · Redux · WhatsApp API</span>
          <div className="links">
            <a
              href="https://tiendabazan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver sitio
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}