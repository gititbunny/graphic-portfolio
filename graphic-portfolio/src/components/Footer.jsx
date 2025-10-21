import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Git It Bunny — Graphic Designer</p>
      </div>
    </footer>
  );
}
