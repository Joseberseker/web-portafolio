import { profile } from "../../../data/portfolio";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>
          {profile.fullName} — {new Date().getFullYear()}
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
            <span className="sr-only"> (abre en una pestaña nueva)</span>
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            GitHub
            <span className="sr-only"> (abre en una pestaña nueva)</span>
          </a>
          <a href={profile.links.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
            <span className="sr-only"> (abre en una pestaña nueva)</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
