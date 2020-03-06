import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Modal } from "react-bootstrap";

const LoginModal = () => {
    const [state, setShow] = useState({
        show: false,
        checkModal: true
    });

    const handleClose = () => {
        setShow({
            ...state,
            show: false,
            checkModal: true
        });
    };

    const handleShow = () =>
        setShow({
            ...state,
            show: true
        });

    const handleSave = () => {
        if (state.checkModal) {
            setShow({
                ...state,
                checkModal: false
            });
        } else
            setShow({
                ...state,
                checkModal: true
            });
    };

    return (
        <>
            <h5 onClick={handleShow}>Login / Signup</h5>
            {state.checkModal ? (
                <Modal show={state.show} onHide={handleClose} centered>
                    <Modal.Header closeButton onClick={handleClose}>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Woohoo, this is Login! */}
                        <Login handleSave={handleSave} handleClose={handleClose} />
                    </Modal.Body>
                </Modal>
            ) : (
                    <Modal show={state.show} onHide={handleClose} centered>
                        <Modal.Header closeButton onClick={handleClose}>
                            <Modal.Title>Sign Up</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Signup handleSave={handleSave} />
                        </Modal.Body>
                    </Modal>
                )}
        </>
    );
};
export default LoginModal;
