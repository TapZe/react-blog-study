import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>The page you are trying to reach cannot be found</p>
            <Link to="/"> Back to the homepage ....</Link>
        </div>
    );
}

export default NotFound;