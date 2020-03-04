import React from 'react'
import { Alert } from 'react-bootstrap'
import LoginModal from './Modal'

export default function NotLoggIn() {
    console.log(LoginModal)
    return (
        <>
            <div className="container">
                <Alert variant="danger">
                    <Alert.Link href="#">Login Please!</Alert.Link>
                </Alert>
            </div>
        </>
    )
}
