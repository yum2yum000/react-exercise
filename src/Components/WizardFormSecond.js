import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
class WizardFormSecond extends Component {
    state = {  }
    render() { 
        const {nextStep,prevStep,phone,address,handleChange}=this.props
        return ( 
        <>
  <div className="container">
     <div className="row">
         <div className="col-6">
   
  <Form.Group controlId="formBasicEmail">
    <Form.Label>phone</Form.Label>
    <Form.Control type="text" placeholder="phone" defaultValue={phone} onChange={handleChange('phone')}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>address</Form.Label>
    <Form.Control type="text" placeholder="address" defaultValue={address} onChange={handleChange('address')}/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={nextStep} className="mr-2">
    Next
  </Button>
  <Button variant="primary" type="submit" onClick={prevStep}>
    prev
  </Button>

     </div>

  </div>
  </div>
        </>
         );
    }
}
 
export default WizardFormSecond;