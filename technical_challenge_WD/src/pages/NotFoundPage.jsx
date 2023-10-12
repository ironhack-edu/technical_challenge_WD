import { Link } from "react-router-dom"; 

function NotFoundPage() {
    return (
        <div className="error-container">
            <div className="error-video-container">
                {/* <video autoPlay loop muted>
                    <source src={} type="video/mp4" />
                        Your browser does not support video playback.
                </video> */}

            </div>
            <div className="error-text-container">
                <h1>404</h1>
                <h2>Oops, it looks like you're lost. The page you're looking for isn't here.</h2>
                <button>
                    <Link to={"/"}>Back Home</Link>
                </button>          
            </div>
        </div>
    )
}

export default NotFoundPage;