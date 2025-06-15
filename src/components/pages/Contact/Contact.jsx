import { useState } from "react";
import emailjs from "@emailjs/browser";

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
        setStatus("Mensaje enviado correctamente");
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
    <section
      className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900"
      id="Contacto"
    >
      <div className="py-8 lg:py-16 px-7 lg:px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contactame
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Tienes alguna duda? Envia un correito y cuadramos una reunión
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm dont-medium text-gray-900 dark:text-gray-300"
            >
              Tu Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primar-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Naruto Uzumaki"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm dont-medium text-gray-900 dark:text-gray-300"
            >
              Tu correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primar-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="ejemplo@mail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              required
            >
              Asunto
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={form.subject}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Escribe el asunto acá"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Tu Mensaje
            </label>
            <textarea
              name="message"
              rows="6"
              id="message"
              value={form.message}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Deja tu comentario aquí..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:gb-primary-700 dark:focus:ring-primary-800 border ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>

        {
          //Mensaje Enviado
          success && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 border border-green-300 rounded">
              {status}
            </div>
          )
        }

        {
          //Mensaje de Error
          !success && status && (
            <div className="mt-4 p-3 bg-red-100 text-red-800 border border-red-300 rounded">
              {status}
            </div>
          )
        }
      </div>
    </section>
  );
};
