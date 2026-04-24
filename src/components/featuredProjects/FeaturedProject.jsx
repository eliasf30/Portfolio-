import "./featuredProject.css";
import projectImg from "../../images/miniredsocial.png";
import metanoiaImg from "../../images/metanoia.png";

export default function FeaturedProject() {
  return (
    <section className="featured-project">
      <h2>Proyectos Destacados</h2>

      {/* 🔹 METANOIA */}
      <div className="project-content">
        <img
          src={metanoiaImg}
          alt="Metanoia - red social para psicólogos y pacientes"
        />

        <div className="project-info">
          <h3>Metanoia</h3>

          <p>
            Red social orientada a psicólogos y pacientes. Permite que los usuarios
            encuentren profesionales, interactúen mediante publicaciones y mantengan
            conversaciones privadas. Incluye moderación automática de contenido
            mediante modelos de inteligencia artificial.
          </p>

          <ul>
            <li>Búsqueda y filtrado de profesionales</li>
            <li>Publicaciones con sistema de comentarios</li>
            <li>Chat entre usuarios y profesionales</li>
            <li>Moderación de contenido con IA (Hugging Face)</li>
            <li>Validación automática de matrículas profesionales mediante Puppeteer</li>
          </ul>

          <p className="stack">
            React · Node.js · Express · PostgreSQL · Prisma · Socket.IO <br />
            JWT · Axios · Puppeteer · Hugging Face
          </p>

          <div className="project-links">
            <a href="https://metanoia-utn.vercel.app/" target="_blank" rel="noopener noreferrer">
              Ingresar
            </a>
            <a href="https://github.com/eliasf30/Metanoia" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 MINI RED SOCIAL */}
      <div className="project-content">
        <img
          src={projectImg}
          alt="Mini red social full-stack"
        />

        <div className="project-info">
          <h3>Mini Red Social Full-Stack</h3>

          <p>
            Aplicación web full-stack desarrollada desde cero, con autenticación
            segura, sistema de usuarios, publicaciones con imágenes y chat en
            tiempo real. Pensada y desplegada como un producto real.
          </p>

          <ul>
            <li>Registro y login con JWT (cookies httpOnly)</li>
            <li>Perfiles de usuario con avatar y descripción</li>
            <li>Publicaciones con imágenes (Cloudinary)</li>
            <li>Sistema de amigos</li>
            <li>Chat en tiempo real con Socket.IO</li>
            <li>Mensajes persistidos en base de datos</li>
            <li>Manejo correcto de CORS y cookies en producción</li>
          </ul>

          <p className="stack">
            React · Node.js · Express · PostgreSQL · Prisma · Socket.IO <br />
            JWT · Cloudinary · Axios · Vercel · Render
          </p>

          <div className="project-links">
            <a href="https://miniredsocial.org" target="_blank" rel="noopener noreferrer">
              Ingresar
            </a>
            <a href="https://github.com/eliasf30/MiniRedSocial" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}