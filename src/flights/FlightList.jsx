import ItemsList from "../components/ItemsList";
import BackButton from "../components/BackButton";


export function FlightList() {
    return (
        <>  
            <BackButton/>
            <div className="center">
                <h1>Flight List</h1>
                <ItemsList endpoint = "flights/" mode="delete"/>
            </div>
        </>
        
    );
}