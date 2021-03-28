import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
class AllInfo extends Component {
   
    render(){
        const { firstname, lastname, phone, address,prevStep} = this.props;
        return(
          
                  <div className="container">
             <div className="row">
         <div className="col-6">
                First Name: <b>{firstname}</b><br />
                Last Name: <b>{lastname}</b><br />
                Phone: <b>{phone}</b><br />
                address: <b>{address}</b><br />
               
                <Button variant="primary" type="submit" onClick={prevStep}>
                    prev
                </Button>
            </div>
            </div>
            </div>
            
        );
    }
}

export default AllInfo;