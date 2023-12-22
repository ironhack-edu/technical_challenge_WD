import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="HomePage">
      <h1>Welcome to Lisa's Phone Store</h1>
      <button>
        <Link to="/phones">Show all phones</Link>
      </button>
    </div>
  );
}
