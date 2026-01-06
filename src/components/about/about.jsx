import "./about.css";
import { HiOutlineUser } from "react-icons/hi";

export default function About() {
  return (
    <section className="about">
      <div className="about-card">
        <HiOutlineUser className="about-icon" />

        <h2>Sobre mí</h2>

        <p>
          Soy estudiante avanzado de Ingeniería en Sistemas, con foco en
          desarrollo web full-stack.
        </p>

        <p>
          Me gusta construir aplicaciones reales, cuidando la arquitectura, la
          seguridad y el despliegue en producción.
        </p>

        <p>
          Trabajo principalmente con React y Node.js, y disfruto aprender y
          mejorar a partir de proyectos completos.
        </p>

        <p>
          Busco mi primera experiencia profesional donde pueda seguir creciendo y
          aportar desde el primer día.
        </p>
      </div>
    </section>
  );
}