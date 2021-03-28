import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';
class WizardFormFirst extends Component {
    state = {  }
    render() { 
        const {nextStep,firstname,lastname,handleChange}=this.props
        return ( 
        <>
  <div className="container">
     <div className="row">
         <div className="col-6">
   
  <Form.Group controlId="formBasicEmail">
    <Form.Label>firstname</Form.Label>
    <Form.Control type="text" placeholder="Enter name" defaultValue={firstname} onChange={handleChange('firstname')}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>lastname</Form.Label>
    <Form.Control type="text" placeholder="lastname" defaultValue={lastname} onChange={handleChange('lastname')}/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={nextStep}>
    Next
  </Button>

     </div>

  </div>
  </div>
        </>
         );
    }
}
 
export default WizardFormFirst;