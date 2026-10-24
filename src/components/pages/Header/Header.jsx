import { useEffect, useState } from "react";
import { navItems, profile } from "../../../data/portfolio";

export const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="top-nav">
      <div className="top-nav__inner">
        <a href="#inicio" className="brand">
          {profile.name.split(" ")[0]}.dev
        </a>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <i className={open ? "bx bx-x text-2xl" : "bx bx-menu text-2xl"} />
        </button>
      </div>
      {open && (
        <nav className="mobile-drawer" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
