import ItemsList from "../components/ItemsList";
import BackButton from "../components/BackButton";


export function FlightSearchResult() {
    return (
        <>  
            <div className="center">
                <h1>Flight List</h1>
                <ItemsList endpoint = "flights/" mode="book"/>
            </div>
        </>
        
    );
}