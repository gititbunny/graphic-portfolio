import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function CaseStudy() {
  const { slug } = useParams();
  const proj = projects.find((p) => p.slug === slug);
  if (!proj)
    return (
      <main className="section">
        <div className="container">
          <p>Project not found.</p>
        </div>
      </main>
    );

  return (
    <main className="section">
      <div className="container">
        <h1 className="h1">{proj.title}</h1>
        <p className="muted">
          {proj.year} · {proj.tags.join(" · ")}
        </p>
        <p className="lead">{proj.summary}</p>
      </div>
    </main>
  );
}
