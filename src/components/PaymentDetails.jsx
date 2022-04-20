import React from 'react'
import {InputGroup,FormControl,Form,Button} from "react-bootstrap";
import "../css/details.css";
const PaymentDetails = () => {
  return (
    <div className="details-form"><>
  
    <InputGroup  className='input-grp'>
    <Form.Label htmlFor="basic-url">UPI</Form.Label>
      <InputGroup.Radio aria-label="Radio button for following text input "  className="sm" />
      <FormControl aria-label="Text input with radio button input-area "  />
      
    </InputGroup>
      
    <InputGroup  className='input-grp'>
    <Form.Label htmlFor="basic-url">Credit Or Debit Card</Form.Label>
      <InputGroup.Radio aria-label="Radio button for following text input  " />
      <FormControl aria-label="Text input with radio button input-area" />
    </InputGroup>  
    <Button variant="warning ">Pay On Delivey</Button>
  </></div>
  )
}

export default PaymentDetails