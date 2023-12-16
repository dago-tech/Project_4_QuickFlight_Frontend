import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { postData } from "../helpers/axios";
import "../styles/styles.css";
import BackButton from "./BackButton";

export function UserRegistration() {
    const endpoint = "flights/create_flight/";
    const { flightId } = useParams();
    const initialFormData = {
        user_name: '',
        email: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errorForm, setErrorForm] = useState(null);

    const handleChange = (e) => {
        console.log(e)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        if (formData.origin == "" || formData.destination == "" ) {
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
                <h1>User Registration</h1>
                <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '250px' }}>
                    <label 
                        htmlFor="user_name" 
                    >User Name:
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="user_name"
                        onChange={handleChange}
                        value={formData.user_name}
                        required
                    />
                    <br />
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="User email"
                        onChange={handleChange}
                        value={formData.email}
                        required
                    />
                    <br />
                    <input type="button" value="Send" onClick={handleSubmit} />
                    <input type="reset" value="Clear" onClick={handleReset} />
                </form>
                {errorForm && <p style={{ color: "red" }}>{errorForm}</p>}
            </div>
        </>
    );
}
