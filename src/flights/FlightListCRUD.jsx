import ItemsList from "../components/ItemsList";
import BackButton from "../components/BackButton";

export function FlightListCRUD() {
    /*Renders a table of flights from an API where you can delete items*/
    
    return (
        <>
            <BackButton />
            <div className="center">
                <h1>Flight List</h1>
                <ItemsList endpoint="flights/" mode="delete" />
            </div>
        </>
    );
}
