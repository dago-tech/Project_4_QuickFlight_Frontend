import { Link } from "react-router-dom";
import "../styles/styles.css";

export function Home() {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1 style={{ margin: "30px" }}>Quick Flight</h1>
                <p style={{ marginBottom: "60px" }}>
                    Explore, book, fly - your journey starts here.
                </p>
                <Link to="/flight_creation">
                    <button className="principal_button">
                        Register a new flight
                    </button>
                </Link>
                <br />
                <Link to="/flight_list">
                    <button className="principal_button">Flight list</button>
                </Link>
                <br />
                <Link to="/search">
                    <button className="principal_button">
                        Search your flight
                    </button>
                </Link>
                <br />
                <Link to="/stats">
                    <button className="principal_button">Stats</button>
                </Link>
            </div>
        </>
    );
}
