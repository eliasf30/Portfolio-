import "./featuredProject.css";
import projectImg from "../../images/miniredsocial.png";

export default function FeaturedProject() {
  return (
    <section className="featured-project">
      <h2>Proyecto Destacado</h2>

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
            <a href="https://miniredsocial.org" target="_blank">
              Ver Demo
            </a>
            <a href="https://github.com/eliasf30/MiniRedSocial" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}