import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "../styles/grid.css";

export default function Work() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="h2">Selected Work</h2>
        <div className="grid">
          {projects.map((p) => (
            <Link key={p.slug} to={`/work/${p.slug}`} className="card">
              <div className="thumb" />
              <h3 className="card-title">{p.title}</h3>
              <p className="card-meta">
                {p.year} · {p.tags.join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
