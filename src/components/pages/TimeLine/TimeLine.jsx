import { motion } from "framer-motion";
import { CardTimeLine } from "../../layouts/CardTimeLine/CardTimeLine";

export const TimeLine = () => {
  return (
    <section className="section" id="Experiencia">
      <div className="container container--narrow">
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
            De datos y automatización a asistentes conversacionales en
            producción con WhatsApp, RAG y cloud.
          </p>
        </motion.div>
        <CardTimeLine />
      </div>
    </section>
  );
};
