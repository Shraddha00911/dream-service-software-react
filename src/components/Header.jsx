import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { menu } from "../data/siteData.js";
import ImageSlot from "./ImageSlot.jsx";

export default function Header() {
  const [open, setOpen] = useState(false); // mobile menu
  const [openItem, setOpenItem] = useState(null); // mobile submenu

  const close = () => {
    setOpen(false);
    setOpenItem(null);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={close}>
          <ImageSlot name="logo" label="Logo" alt="Dream Service Software" />
        </Link>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main">
          <ul>
            {menu.map((item) => (
              <li
                key={item.label}
                className={`nav-item ${item.columns || item.links ? "has-sub" : ""} ${openItem === item.label ? "sub-open" : ""}`}
              >
                {item.to ? (
                  <NavLink to={item.to} onClick={close}>
                    {item.label}
                  </NavLink>
                ) : (
                  <button
                    type="button"
                    className="nav-btn"
                    aria-expanded={openItem === item.label}
                    onClick={() => setOpenItem(openItem === item.label ? null : item.label)}
                  >
                    <span className="nav-label">{item.label}</span>
                    <span className="caret" aria-hidden="true" />
                  </button>
                )}

                {item.columns && (
                  <div className="mega">
                    {item.columns.map((col) => (
                      <div className="mega-col" key={col.title}>
                        <h4>{col.titleLink ? <Link to={col.titleLink} onClick={close}>{col.title}</Link> : col.title}</h4>
                        <ul>
                          {col.links.map(([t, to]) => (
                            <li key={t}>
                              <Link to={to} onClick={close}>{t}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {item.links && (
                  <ul className="dropdown">
                    {item.links.map(([t, to]) => (
                      <li key={t}>
                        <Link to={to} onClick={close}>{t}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-cta">
          <a className="btn btn-ghost btn-sm" href="https://www.pestream.com/" target="_blank" rel="noreferrer">Login</a>
          <Link className="btn btn-primary btn-sm" to="/contact" onClick={close}>Schedule A Demo</Link>
        </div>

        <button
          type="button"
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => {
            setOpen(!open);
            setOpenItem(null);
          }}
        >
          <span className="menu-toggle-icon" aria-hidden="true">{open ? "✖" : "☰"}</span> Menu
        </button>
      </div>
    </header>
  );
}
