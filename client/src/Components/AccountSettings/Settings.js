import React, { useContext, useState } from 'react'
import { Card, Form, Button, ListGroup } from "react-bootstrap";
import axios from "axios";
import UserContext from "../../Context/UserContext";

const Settings = () => {

    const { userData } = useContext(UserContext);
    const [checkUserChange, setCheckUserChange] = useState(false);
    const [checkPassChange, setCheckPassChange] = useState(false);

    const handleUsernameUpdate = async (e) => {
        let newUsername = document.getElementById("userInput").value;
        setCheckUserChange(true);
        try {
            await axios.put(`/api/users/${userData.userId}`,
                {
                    displayName: newUsername
                });
        } catch (err) {
            console.log(err)
        }
    }

    const handlePasswordUpdate = async (e) => {
        let newPassword = document.getElementById("userPassInput").value;
        setCheckPassChange(true);
        try {
            await axios.put(`/api/users/${userData.userId}`,
                {
                    password: newPassword
                });
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div>
                <Card style={{ width: '50rem', height: '20%' }}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Card.Title>Account Settings</Card.Title>
                        </ListGroup.Item>
                        <Card.Body>
                            <ListGroup.Item>
                                <Form>
                                    <Form.Label>
                                        Change Display Name:
                            </Form.Label>
                                    <Form.Control type="username" placeholder="Enter New Display Name" id="userInput" />
                                    <Button variant="dark" onClick={(e) => handleUsernameUpdate(e)}>Submit</Button>
                                    {checkUserChange && (<p style={{ textAlign: "center" }}>Display Name Updated!</p>)}
                                </Form>


                                <Form>
                                    <Form.Label>
                                        Change Password:
                            </Form.Label>
                                    <Form.Control type="password" placeholder="Enter New Password" id="userPassInput" />
                                    <Button variant="dark" onClick={(e) => handlePasswordUpdate(e)}>Submit</Button>
                                    {checkPassChange && (<p style={{ textAlign: "center" }}>Password Updated!</p>)}
                                </Form>

                            </ListGroup.Item>

                        </Card.Body>
                    </ListGroup>
                </Card>
            </div>
        </div>
    )
}

export default Settings
