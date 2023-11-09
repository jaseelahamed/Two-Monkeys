import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import "./Modalpage.css";

const Modalpage = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    interestedGender: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Send form data to the backend using axios
    axios.post("/api/submit", formData)
      .then((response) => {
        // Handle success, e.g., show a success message
        console.log("Data sent successfully!", response.data);
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error("Error sending data:", error);
      });

    // Close the modal after form submission
    handleClose();
  };

  return (
    <div>
         <div className="modal-container">
        <button className="button" variant="primary" onClick={handleShow}>
           FIND YOUR SOULMATE
    
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Self..</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="interestedGender">
              <Form.Label>Interested Gender</Form.Label>
              <Form.Control
                as="select"
                name="interestedGender"
                value={formData.interestedGender}
                onChange={handleChange}
              >
                <option value="">Select interested gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save 
          </Button>
        </Modal.Footer>
        </Modal>
        </div>
    </div>
  );
};

export default Modalpage;
