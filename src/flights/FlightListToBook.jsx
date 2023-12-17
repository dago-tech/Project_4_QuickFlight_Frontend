import ItemsList from "../components/ItemsList";
import BackButton from "../components/BackButton";
import { Link } from "react-router-dom";

export function FlightListToBook() {
    /*Renders a table of flights from an API where you can reserve flights*/
    
    return (
        <>
            <BackButton />
            <div className="center">
                <h1>Flight List</h1>
                <Link to="/home">Home</Link>
                <br />
                <ItemsList endpoint="flights/" mode="book" />
            </div>
        </>
    );
}
