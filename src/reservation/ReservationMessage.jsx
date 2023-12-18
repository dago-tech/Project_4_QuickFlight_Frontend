import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ReservationMessage = ({ message }) => {
    /*Renders a message when a user makes a reservation, it sends you to home
    page after 3 seconds*/
    const history = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            history("/home");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <strong>{message}</strong>
        </>
    );
};

export default ReservationMessage;
