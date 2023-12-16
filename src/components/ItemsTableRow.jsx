import React from "react";
import { format, parseISO } from 'date-fns';
import { Link } from "react-router-dom";

const ItemsTableRow = ({ el, deleteData, mode }) => {
    let id = el["id"];
    const origin = el["origin"];
    const destination = el["destination"];
    const departureDate = el["departure_date"];
    const arrivalDate = el["arrival_date"];
    const airline = el["airline"];
    const availableSeats = el["available_seats"];
    const price = el["price"];

    const departureDateFormatted = format(parseISO(departureDate), "yyyy-MM-dd HH:mm");
    const arrivalDateFormatted = format(parseISO(arrivalDate), "yyyy-MM-dd HH:mm");

    return (
        <tr>
            <td>{origin}</td>
            <td>{destination}</td>
            <td>{departureDateFormatted}</td>
            <td>{arrivalDateFormatted}</td>
            <td>{airline}</td>
            <td>{availableSeats}</td>
            <td>{price}</td>
            {mode=="delete"? (
                <>
                    <td>
                        <button onClick={() => deleteData(id)}>Delete</button>
                    </td>
                </>
            ):(
                <td>
                    <Link to={`/user/${id}`}>
                        <button>Book</button>
                    </Link>
                </td>
            )}
            
        </tr>
    );
};

export default ItemsTableRow;
