import React, { Component } from 'react';
import WizardFormFirst from './WizardFormFirst'
import WizardFormSecond from './WizardFormSecond'
import AllInfo from './AllInfo'
class WizardForm extends Component {
    state = { 
        step:1,
        firstname:'',
        lastname:'',
        phone:'',
        address:''
     }
    showStep=()=>{
        const {step,lastname,firstname,phone,address}=this.state
        if(step===1)
        return(
            <WizardFormFirst handleChange = {this.handleChange}  nextStep={this.nextStep} firstname={firstname} lastname={lastname} ></WizardFormFirst>
        )
        if(step===2)
       return(
        <WizardFormSecond handleChange = {this.handleChange}  prevStep={this.prevStep} nextStep={this.nextStep} phone={phone} address={address}></WizardFormSecond>
       )
        if(step===3)
        return(
            <AllInfo firstname={firstname}  lastname={lastname} phone={phone} address={address}  prevStep={this.prevStep}
            ></AllInfo>
        )

    }
    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    handleChange=input=>e=>{
        this.setState({[input]: e.target.value});
    }
    render() { 
        const { step } = this.state;
        return ( 
            <>
            <div className="container">
            <div className="row justify-content-center">
            <div className="col-4">
            <div className="form-wizard-header">
						
							<ul className="list-unstyled form-wizard-steps clearfix">
								<li className={step===1?"active":''}><span>1</span></li>
								<li className={step===2?"active":''}><span>2</span></li>
								<li className={step===3?"active":''}><span>3</span></li>
								
							</ul>
						</div>
            </div>
            </div>
            </div>
         
                {this.showStep()}
            
            </>
        );
    }
}
 
export default WizardForm;