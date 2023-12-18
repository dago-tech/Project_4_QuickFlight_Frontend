import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home/Home";
import { FlightCreate } from "./flights/Flightcreate";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { UserRegistration } from "./Reservation/UserRegistration";
import { FlightSearch } from "./flights/FlightSearch";
import { FlightListCRUD } from "./flights/FlightListCRUD";
import { FlightListToBook } from "./flights/FlightListToBook";
import ReservationList from "./Reservation/ReservationList";
import { Stats } from "./flights/Stats";

function App() {
    /*Renders application components based on url and react router dom
    Uses a Provider to give material UI DateTimePicker to all application */
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route
                            path="/flight_creation"
                            element={<FlightCreate />}
                        />
                        <Route
                            path="/flight_list"
                            element={<FlightListCRUD />}
                        />
                        <Route path="/search" element={<FlightSearch />} />
                        <Route
                            path="/user/:flightId"
                            element={<UserRegistration />}
                        />
                        <Route
                            path="/flight_list_to_book"
                            element={<FlightListToBook />}
                        />
                        <Route
                            path="/reservation_list"
                            element={<ReservationList />}
                        />
                        <Route path="/stats" element={<Stats />} />
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="*" element={<Navigate to="/home" />} />
                    </Routes>
                </BrowserRouter>
            </LocalizationProvider>
        </>
    );
}

export default App;
