import { useState } from "react";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import "../styles/styles.css";
import BackButton from "../components/BackButton";
import ItemsList from "../components/ItemsList";

export function FlightSearch() {

    const initialFormData = {
        origin: "",
        destination: "",
        departure_date: new Date(),
        arrival_date: new Date(),
    };

    const [formData, setFormData] = useState(initialFormData);
    const [submited, setSubmited] = useState(false);
    const [errorForm, setErrorForm] = useState(null);


    const handleChange = (e) => {
        console.log(e)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setSubmited(false);
    };
    const handleChangeDate = (field, date) => {
        setFormData({
            ...formData,
            [field]: date,
        });
        setSubmited(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        if (formData.origin == "" || formData.destination == "") {
            setErrorForm("¡You did not fill out all the fields!");
            return;
        }
        // Clean ErrorForm if no validation issues
        setErrorForm("");

        setSubmited(true);

    };

    const handleReset = (e) => {
        setFormData(initialFormData);
    };

    return (
        <>
            <BackButton/>
            <div className="center">
                <h1>Flight Search</h1>
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
                    <input type="button" value="Search" onClick={handleSubmit} />
                    <input type="reset" value="Clear" onClick={handleReset} />
                </form>
                {errorForm && <p style={{ color: "red" }}>{errorForm}</p>}
            </div>

            {submited && (
                <div className="center">
                    <h1>Flight List</h1>
                    <ItemsList endpoint = "flights/search_flight/" mode="book" dataToSend={formData}/>
                </div>
                
            )}
        </>
    );
}
