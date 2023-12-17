import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Modal from "react-modal";

/*Main component with a modal implementation */

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
