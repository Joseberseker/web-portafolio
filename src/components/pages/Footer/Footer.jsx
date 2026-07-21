import { profile } from "../../../data/portfolio";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>
          {profile.name} — {new Date().getFullYear()}
        </span>
        <div style={{ display: "flex", gap: "0.85rem" }}>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}
          >
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
