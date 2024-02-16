import { Link } from "react-router-dom";

function HomePage() {

    return (
        <div>
            <h1>Phones page</h1>
            <Link to="/phones">See phones</Link>
        </div>
    );
}

export default HomePage;