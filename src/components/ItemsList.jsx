import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Loader from "./Loader";
import ItemsTable from "./ItemsTable";
import { getData, deleteData, postData } from "../helpers/axios";
import "../styles/styles.css";

const ItemsList = ({ endpoint, mode, dataToSend }) => {
    /*Component to get data from an API and render a table of undefined
    number of rows, used to show a flight list 
    - Book mode: displays a book button in last column used to reserve a flight
    - Delete mode: displays a Delete button in last column used to delete a flight
    - dataToSend: data from FlightSearch.jsx with info to seach for a flight */

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState(null);

    useEffect(() => {
        setLoading(true);
        /* */
        if (mode == "delete") {
            getData(endpoint)
                .then((response) => {
                    setData(response);
                    setError(null);
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else if (mode == "book" && dataToSend) {
            postData(endpoint, dataToSend)
                .then((response) => {
                    setData(response);
                    setError(null);
                })
                .catch((error) => {
                    setError(error.response.data.error || error.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            getData(endpoint)
                .then((response) => {
                    setData(response);
                    setError(null);
                })
                .catch((error) => {
                    setError(error.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, []);

    const deleteRegister = (id) => {
        setShowModal(true);
        setId(id);
    };

    const handleConfirmDelete = () => {
        let delete_endpoint = `${endpoint}delete_flight/${id}/`;

        deleteData(delete_endpoint)
            .then(() => {
                let newData = data.filter((el) => el.id !== id);
                setData(newData);
                setError(null);
            })
            .catch((error) => {
                setData(null);
                setError(error);
            });
        // Close modal after confirmation
        setShowModal(false);
    };

    const handleCancelDelete = () => {
        // Close modal
        setShowModal(false);
    };

    return (
        <div>
            {loading && <Loader />}
            {error && <p className="error">{`${error}`}</p>}
            {data && (
                <ItemsTable
                    data={data}
                    mode={mode}
                    deleteData={deleteRegister}
                />
            )}
            <div>
                {/*Overlay is a visual layer that is overlaid on top of the main content 
                of the page or application when the modal is displayed. */}
                <Modal
                    isOpen={showModal}
                    contentLabel="Delete Modal"
                    className="modal-content"
                    overlayClassName="modal-overlay"
                >
                    <p>¿Do you want to delete this register?</p>
                    <button onClick={handleConfirmDelete}>Delete</button>
                    <button onClick={handleCancelDelete}>Cancel</button>
                </Modal>
            </div>
        </div>
    );
};

export default ItemsList;
