import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setSuccess(false);

    emailjs
      .send("service_06bdodc", "template_lq9b4si", form, "QR4a7AmsZ_pM6gZ40")
      .then(() => {
        setStatus("Mensaje enviado correctamente.");
        setForm({ name: "", email: "", subject: "", message: "" });
        setSuccess(true);
      })
      .catch(() => {
        setStatus("Error al enviar el mensaje. Intenta de nuevo.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="section" id="Contacto">
      <div className="container contact-wrap">
        <motion.div
          className="section-head"
          style={{ textAlign: "center" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-kicker" style={{ textAlign: "center" }}>
            04 — Contacto
          </p>
          <h2 style={{ textAlign: "center" }}>Hablemos</h2>
          <p style={{ marginInline: "auto", textAlign: "center" }}>
            ¿Tienes una idea, una vacante o un proyecto con IA? Escríbeme y lo
            vemos.
          </p>
        </motion.div>

        <motion.form
          className="card"
          style={{ padding: "1.35rem" }}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <label>
            Nombre
            <input
              className="field"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </label>
          <label>
            Correo
            <input
              className="field"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </label>
          <label>
            Asunto
            <input
              className="field"
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="¿De qué se trata?"
              required
            />
          </label>
          <label>
            Mensaje
            <textarea
              className="field"
              name="message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              placeholder="Cuéntame un poco más..."
              required
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{ opacity: loading ? 0.7 : 1 }}
          >
            {loading ? "Enviando..." : "Enviar mensaje"}
          </button>

          {status && (
            <div
              style={{
                marginTop: "0.25rem",
                padding: "0.85rem 1rem",
                borderRadius: "0.85rem",
                border: "1px solid var(--line)",
                background: success
                  ? "var(--accent-soft)"
                  : "rgba(220, 38, 38, 0.08)",
                color: "var(--ink)",
                fontSize: "0.92rem",
              }}
            >
              {status}
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
};
