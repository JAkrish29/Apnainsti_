import React from "react";
import "./ProductDetails.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">

        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="title">
          <h1>Product Details</h1>
        </div>

        <div className="body">
            <Row>
                <Col>
                <label for="name" class="form-label">Product Name</label>
                <input type="name"  id="tname" ></input>
                <label for="category" class="form-label">Category</label>
                <select id="category" class="form-select">
                <option selected>Select Category</option>
                <option>one</option>
                <option>two</option>
                <option>two</option>
                </select>
                </Col>
                <Col>
                <input type="image"  id="productname" ></input>
                </Col>
            </Row>
            <Row>
            <label for="description" class="form-label">Description</label>
            <input type="name"  id="description" ></input>

            </Row>
          
        </div>

        <div className="footer">
          
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;