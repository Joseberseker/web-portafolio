import { motion } from "framer-motion";
import { CardTimeLine } from "../../layouts/CardTimeLine/CardTimeLine";

export const TimeLine = () => {
  return (
    <section className="section" id="Experiencia">
      <div className="container" style={{ maxWidth: 760 }}>
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-kicker">03 — Experiencia</p>
          <h2>Trayectoria</h2>
          <p>
            Roles donde combiné datos, infraestructura y desarrollo — la base
            para lo que viene con IA.
          </p>
        </motion.div>
        <CardTimeLine />
      </div>
    </section>
  );
};
