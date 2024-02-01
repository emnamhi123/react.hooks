import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Rating from "@mui/material/Rating";
const AddMovie = ({ Adding }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({
    titre: "",
    description: "",
    posterURL: "",
    rating: 0,
  });
  const changeHandler = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const saveMovieHandler = () => {
    Adding();
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie titre</Form.Label>
              <Form.Control
                type="Text"
                name="titre"
                placeholder="Enter Movie Titre"
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="Text"
                name="description"
                placeholder="Enter your Description"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>ImageURL</Form.Label>
              <Form.Control
                type="Text"
                name="posterURL"
                placeholder="Enter your imageURl"
                onChange={changeHandler}
              />
            </Form.Group>
            <Rating
              name="simple-controlled"
              max={10}
              value={null}
              onChange={(event, newValue) => {
                setNewMovie({ ...newMovie, rating: newValue });
              }}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveMovieHandler}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
