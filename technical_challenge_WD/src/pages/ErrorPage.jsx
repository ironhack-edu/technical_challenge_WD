import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className="error-container">
            <div className="error-video-container">
                

            </div>
            <div className="error-text-container">
                <h1>500</h1>
                <h2>Sorry, an unexpected error has occurred. Please try again later.</h2>
                <button>
                    <Link to={"/"}>Back Home</Link>
                </button>          
            </div>
        </div>
    )

}

export default ErrorPage;