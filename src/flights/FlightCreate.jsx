import { useState } from "react";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { postData } from "../helpers/axios";
import "../styles/styles.css";
import BackButton from "../components/BackButton";

export function FlightCreate() {
    const endpoint = "flights/create_flight/";
    const initialFormData = {
        origin: "",
        destination: "",
        departure_date: new Date(),
        arrival_date: new Date(),
        airline: "",
        available_seats: "",
        price: ""
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errorForm, setErrorForm] = useState(null);
    const [message, setMessage] = useState(null);


    const handleChange = (e) => {
        console.log(e)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleChangeDate = (field, date) => {
        setFormData({
            ...formData,
            [field]: date,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        if (formData.origin == "" || formData.destination == "" || 
            formData.airline == ""|| formData.available_seats== ""||
            formData.price== "") {
            setErrorForm("¡You did not fill out all the fields!");
            return;
        }
        // Clean ErrorForm if no validation issues
        setErrorForm("");

        postData(endpoint, formData)
            .then(()=>{
                setMessage("Flight created successfully")
            }
            ).catch((error)=>{
                setMessage(error.response.data[0])
            });

    };

    const handleReset = (e) => {
        setFormData(initialFormData);
    };

    return (
        <>
            <BackButton/>
            <div className="center">
                <h1>Flight Registration</h1>
                <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '250px' }}>
                    <label 
                        htmlFor="origin" 
                        >Origin:
                    </label>
                    <input
                        type="text"
                        name="origin"
                        placeholder="Origin"
                        onChange={handleChange}
                        value={formData.origin}
                    />
                    <br />
                    <label htmlFor="destination">Destination: </label>
                    <input
                        type="text"
                        name="destination"
                        placeholder="destination"
                        onChange={handleChange}
                        value={formData.destination}
                    />
                    <br />
                    <label>
                        Departure date and time: 
                        
                            <DateTimePicker
                                name="destination"
                                value={formData.departure_date}
                                minDateTime={new Date()}
                                //format="yyyy-MM-dd'T'HH:mm:ss"
                                onChange={(date) => handleChangeDate('departure_date', date)}
                                slotProps={{ textField: { variant: 'outlined' } }}
                            />

                    </label>
                    <br />
                    <label>
                        Arrival date and time: 

                            <DateTimePicker
                                value={formData.arrival_date}
                                minDateTime={new Date()}
                                onChange={(date) => handleChangeDate('arrival_date', date)}
                                slotProps={{ textField: { variant: 'outlined' } }}
                            />
                    </label>
                    <br />
                    <label htmlFor="airline">Airline: </label>
                    <input
                        type="text"
                        name="airline"
                        placeholder="Airline"
                        onChange={handleChange}
                        value={formData.airline}
                    />
                    <br />
                    <label htmlFor="available_seats">Available Seats: </label>
                    <input
                        type="text"
                        name="available_seats"
                        placeholder="Available seats number"
                        onChange={handleChange}
                        value={formData.available_seats || ""}
                    />
                    <br />
                    <label htmlFor="price">Ticket Price: </label>
                    <input
                        type="text"
                        name="price"
                        placeholder="Price"
                        onChange={handleChange}
                        value={formData.price || ""}
                    />
                    <br />
                    
                    <input type="button" value="Send" onClick={handleSubmit} />
                    <input type="reset" value="Clear" onClick={handleReset} />
                </form>
                {message && <p style={{fontWeight: "bold"}}>{message}</p>}
                {errorForm && <p style={{ color: "red" }}>{errorForm}</p>}
            </div>
        </>
    );
}
