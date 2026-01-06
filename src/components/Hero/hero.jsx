import portfolioImg from "../../images/PortfolioImg.jpg";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <h1>Elías Figueroa</h1>

      <img src={portfolioImg} alt="Foto de Elías Figueroa" />

      <h2>
        Estudiante avanzado de Ingeniería en Sistemas <br />
        Desarrollador Full-Stack Junior
      </h2>

      <p className="stack">
        React · Node.js · Express · PostgreSQL · Prisma <br />
        JWT · Socket.IO · Axios · Vercel · Render
      </p>

      <p className="description">
        Desarrollo aplicaciones web completas, desde el frontend hasta el
        backend y la base de datos, con foco en buenas prácticas y despliegue en
        producción.
      </p>
    </section>
  );
}
