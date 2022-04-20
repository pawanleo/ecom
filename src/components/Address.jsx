import React from 'react'
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "../css/details.css";
const Address = () => {
    const navigate=useNavigate()
  return (
    <div className="details-form"><Form>
    <fieldset >
      <Form.Group className="mb-3">
        <Form.Label htmlFor="">State</Form.Label>
        <Form.Control id="disabledTextInput" placeholder="State" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="">City</Form.Label>
        <Form.Select id="disabledSelect">
          <option>City</option>
        </Form.Select>
        <Form.Group className="mb-3">
        <Form.Label htmlFor="">Pincode</Form.Label>
        <Form.Control id="disabledTextInput" placeholder="Pincode" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="">Address</Form.Label>
        <Form.Control id="disabledTextInput" placeholder="Address" />
      </Form.Group>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          id="disabledFieldsetCheck"
          label="Save Address"
        />
      </Form.Group>
      <Button type="submit" onClick={()=>navigate("/Payment")}>Payment details</Button>
    </fieldset>
  </Form></div>
  )
}

export default Address