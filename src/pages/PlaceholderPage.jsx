import { Link, useLocation } from "react-router-dom";

export default function PlaceholderPage() {
  const { pathname } = useLocation();
  const title = pathname
    .replace(/\//g, " ")
    .replace(/-/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <section className="section">
      <div className="container center">
        <h1 className="h1">{title || "Page"}</h1>
        <p className="lead">
          This page is not built yet. Add its content in <code>src/pages</code> and register the route in{" "}
          <code>src/App.jsx</code>.
        </p>
        <Link className="btn btn-primary" to="/">Back to Home</Link>
      </div>
    </section>
  );
}
