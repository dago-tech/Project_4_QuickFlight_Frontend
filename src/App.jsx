import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home";
import { FlightCreate } from "./flights/FlightCreate";
import { FlightList } from "./flights/FlightList";
import { FlightSearchResult } from "./flights/FlightSearchResult";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { UserRegistration } from "./components/UserRegistration";
import { FlightSearch } from "./flights/FlightSearch";

function App() {
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
                            element={<FlightList />}
                        />
                        <Route
                            path="/search"
                            element={<FlightSearch />}
                        />
                        <Route
                            path="/user/:flightId"
                            element={<UserRegistration />}
                        />
                        <Route
                            path="/flight_search"
                            element={<FlightSearchResult />}
                        />
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="*" element={<Navigate to="/home" />} />
                    </Routes>
                </BrowserRouter>
            </LocalizationProvider>
        </>
    );
}

export default App;
