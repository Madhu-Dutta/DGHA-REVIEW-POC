import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Label, Form, FormGroup, FormText, Input, Button } from 'reactstrap';

export default class RegisterHooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            membershipType: '',
            title: '',
            dob: '',
            streetAddress: '',
            suburb: '',
            state: '',
            dogHistory: '',
            //Need some extra fields in the backend
            postcode: '',
            phone: '',
            breed: '',
            organization: '',
            dogGuideProv: '',
            position: '',
            trainedFor: '',
            workFor: '',
            otherTraining: '',
            //Validation
            formErrors: {
                firstName: '',
                lastName: '',
                email: ''
            }
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();
        // //Handle change events on input fields
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleTrainedForOptionChange = (e) => {
        this.setState({
            trainedFor: e.target.value
        });
        console.log(this.state);
    }
      
    handleWorkForOptionChange = (e) => {
        this.setState({
            workFor: e.target.value
        });
        console.log(this.state);
    }

    handleMemTypeOptionChange = (e) => {
        this.setState({
            membershipType: e.target.value
        });
        console.log(this.state);
    }

    register = (e) => {
        //prevent browser from auto-submitting
        e.preventDefault();
        console.log(this.state);

            // fetch('http://dgha-backend-aus-east.azurewebsites.net/api/members', {
            //Typicode post test
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,   
                    membershipType: '',
                    title: this.state.title,
                    dob: this.state.dob,
                    streetAddress: this.state.streetAddress,
                    suburb: this.state.suburb,
                    state: this.state.state,
                    dogHistory: this.state.dogHistory,
                    //Need some extra fields in the backend
                    postcode: this.state.postcode,
                    phone: this.state.phone,
                    breed: this.state.breed,
                    organization: this.state.organization,
                    dogGuideProv: this.state.dogGuideProv,
                    position: this.state.position,
                    trainedFor: this.state.trainedFor,
                    workFor: this.state.workFor, 
                    otherTraining: this.state.otherTraining,        
                })
            })
            .then(response => {
                console.log(response);
                this.props.history.push("/Review");
            })
            .catch(error => {
                console.log(error);
            })
            console.info('valid form')
        }       

    render() {
               
        return (

            <Container>
                <div className="signup-wrapper flex justify-center flex-wrap" >
                    <div className="header" style={{ paddingBottom: "2%" }}>
                        <h2 className="text-left">Membership</h2>
                    </div>

                    <Form name="form" onSubmit={this.register} noValidate>

                         <FormGroup> 
                        <Label className="header-label" htmlFor="MembershipType">Membership Type:<span className="impt">*</span></Label> 
                        <p>Please choose Full or Associate Member</p>

                         <FormGroup check>
                            <Label htmlFor="FullMember" check>
                                <Input type="radio" 
                                    name="membershipType" value="Full Membership"
                                    checked={this.state.membershipType === "Full Membership"} 
                                    onChange={this.handleMemTypeOptionChange} />{' '}
                                Full Member
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <FormGroup check>
                                <Label htmlFor="AssociateMember" check>
                                    <Input type="radio" 
                                        name="membershipType" value="Assosiate Member" 
                                        checked={this.state.membershipType === "Assosiate Member"} 
                                        onChange={this.handleMemTypeOptionChange} />{' '}
                                    Associate Member
                            </Label>
                            </FormGroup>
                        </FormGroup> 

                      </FormGroup>  

                            <FormGroup>
                                <Label className="header-label" htmlFor="Title">Title: <span className="impt">*</span></Label>
                                <p>Mr, Mrs, Ms, Dr, Other:</p>
                                <Input type="text" className="form-control" 
                                    onChange={this.handleInputChange} 
                                    name="title"
                                    value={this.state.title} required="required" />
                                <FormText color="muted">
                                    0-10 max characters
                            </FormText>
                            </FormGroup>  

                            <FormGroup>                                
                                <Label className="header-label" htmlFor="FirstName">First Name: <span className="impt">*</span></Label>
                                <Input type="text"                                                            
                                onChange={this.handleInputChange} 
                                name="firstName" 
                                value={this.state.firstName}
                                noValidate />
                                
                                <FormText color="muted">
                                    0-10 max characters
                            </FormText>

                            </FormGroup>
                            <FormGroup>
                                <Label className="header-label" htmlFor="LastName">Last Name: <span className="impt">*</span></Label>
                                <Input type="text"                                 
                                onChange={this.handleInputChange} 
                                name="lastName" 
                                value={this.state.lastName} 
                                noValidate />
                                <FormText color="muted">
                                    0-10 max characters
                            </FormText>
                            </FormGroup>

                            <FormGroup>
                                <Label className="header-label" htmlFor="DateOfBirth">Date Of Birth(optional)</Label>
                                <p>dd/mm/yyyy</p>
                                <Input type="text" className="form-control"
                                    onChange={this.handleInputChange} 
                                    value={this.state.dob} name="dob" />
                                <FormText color="muted">
                                    0-10 max characters
                            </FormText>
                            </FormGroup>

                            <FormGroup>
                                <Label className="header-label" htmlFor="StreetOrPostalAddress">Street or Postal Address: <span className="impt">*</span></Label>
                                <Input type="text" className="form-control" 
                                    onChange={this.handleInputChange} 
                                    name="streetAddress" value={this.state.streetAddress} required /> 
                                <FormText color="muted">
                                    0-70 max characters
                            </FormText>
                            </FormGroup>

                            <FormGroup>
                                <Label className="header-label" htmlFor="Suburb">Suburb: <span className="impt">*</span></Label>
                                <Input type="text" className="form-control" 
                                    onChange={this.handleInputChange} 
                                    name="suburb" 
                                    value={this.state.suburb} required />
                                <FormText color="muted">
                                    0-70 max characters
                            </FormText>
                            </FormGroup>

                            <FormGroup>
                                <Label className="header-label" htmlFor="StateOrTerritory">State or Territory: <span className="impt">*</span></Label>
                                <Input type="text" className="form-control" 
                                    onChange={this.handleInputChange} 
                                    name="state" value={this.state.state} required />
                                <FormText color="muted">
                                    0-40 max characters
                            </FormText>
                            </FormGroup>

                            <FormGroup>
                                <Label className="header-label" htmlFor="Postcode">Postcode: <span className="impt">*</span></Label>
                                <Input type="text" className="form-control"
                                    onChange={this.handleInputChange} 
                                    name="postcode"
                                    value={this.state.postcode} required />
                                <FormText color="muted">
                                    0-4 max characters
                            </FormText>
                            </FormGroup>

                            <FormGroup> 
                                <Label className="header-label" htmlFor="PhoneNumber">Phone Number: <span className="impt">*</span></Label>
                                <p>Your best contact phone number.</p>
                                <Input type="text" className="form-control"
                                    onChange={this.handleInputChange} 
                                    name="phone"
                                    value={this.state.phone} required />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label className="header-label" htmlFor="email">Email Address:<span className="impt">*</span></Label>
                                <Input type="email"                                    
                                    onChange={this.handleInputChange} 
                                    name="email" 
                                    value={this.state.email} 
                                    noValidate />                                   
                            </FormGroup>

                            <FormGroup>
                                <Label className="header-label" htmlFor="YourDogTrainedFor">Your dog is trained for:<span className="impt">*</span></Label>
                                <FormGroup check>
                                    <Label htmlFor="visionImpaired" check>
                                        <Input type="radio" 
                                            value="vision Impaired" 
                                            checked={this.state.trainedFor === "vision Impaired"} 
                                            onChange={this.handleTrainedForOptionChange}/>{' '}
                                        Dog Guide used for mobility by people who are blind or vision impaired
                            </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <FormGroup check>
                                    <Label htmlFor="puppyRaiser" check>
                                        <Input type="radio"
                                            value="puppy Raiser" 
                                            checked={this.state.trainedFor === "puppy Raiser"}
                                            onChange={this.handleTrainedForOptionChange}/>{' '}
                                        Puppy Raiser involved in a training program
                            </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <FormGroup check>
                                    <Label htmlFor="NA" check>
                                        <Input type="radio" 
                                            value="NA" 
                                            checked={this.state.trainedFor === "NA"}
                                            onChange={this.handleTrainedForOptionChange} />{' '}
                                        Not applicable
                                    </Label>
                                </FormGroup>
                            </FormGroup>

                            <FormGroup>
                                <Label className="header-label" htmlFor="DogGuideNameorPuppyName">Name of dog guide or puppy:</Label>
                                <p>(if applicable)</p>
                                <Input type="text"
                                    name="dogHistory" 
                                    className="form-control" 
                                    onChange={this.handleInputChange} required />
                                <FormText color="muted">
                                    0-40 max characters
                            </FormText>
                            </FormGroup>

                            <FormGroup>
                                <Label className="header-label" htmlFor="DogBreed">Breed of dog:</Label>
                                <Input type="text" className="form-control" 
                                    onChange={this.handleInputChange} 
                                    name="breed"
                                    value={this.state.breed} required />
                                <FormText color="muted">
                                    0-40 max characters
                            </FormText>
                            </FormGroup>                            

                            <FormGroup>
                                <Label className="header-label" htmlFor="TrainingProvider">Training provider or organisation: </Label>
                                <p>(if applicable)</p>
                                <Input type="text" className="form-control"
                                     onChange={this.handleInputChange}
                                     name="organization"
                                     value={this.state.organization} required />
                                <FormText color="muted">
                                    0-100 max characters
                            </FormText>
                            </FormGroup>

                            <FormGroup>
                                <Label className="header-label" htmlFor="DogsTrainedforDisabilityOtherthanVisual">If your dog is also trained to assist you with a disability other than blindness or vision impairment. </Label>
                                Please indicate what the dog is trained for? 
                                
                                <Input type="textarea" className="form-control"
                                     style={{paddingBottom: '10%'}}
                                     onChange={this.handleInputChange}
                                     name="otherTraining"
                                     value={this.state.otherTraining} required />
                                <FormText color="muted">
                                    0-100 max characters
                            </FormText>
                            </FormGroup>

                            <FormGroup>
                            <Label className="header-label" htmlFor="exampleText">Do you work for a Dog Guide or other blindness organisation?</Label>                         

                                <FormGroup check>
                                    <Label htmlFor="yes" check>
                                        <Input type="radio"
                                        value="yes" 
                                        checked={this.state.workFor === "yes"} 
                                        onChange={this.handleWorkForOptionChange}/>{' '}
                                        Yes
                            </Label>
                                </FormGroup>
                            </FormGroup>
                            <FormGroup>
                                <FormGroup check>
                                    <Label htmlFor="no" check>
                                        <Input type="radio" 
                                            value="no" 
                                            checked={this.state.workFor === "no"} 
                                            onChange={this.handleWorkForOptionChange}/>{' '}
                                        No
                                    </Label>
                                </FormGroup>
                            </FormGroup>

                            <FormGroup>
                                <Label className="header-label" htmlFor="NameoftheDogGuideProvider">If Yes, Name of Dog Guide or Assistance dog provider, or other blindness organisation:</Label>
                                <Input type="text" 
                                    name="dogGuideProv" 
                                    value={this.state.dogGuideProv}
                                    onChange={this.handleInputChange} 
                                    id="dogGuideProvider" />
                                <FormText color="muted">
                                    0-100 max characters
                            </FormText>
                            </FormGroup>

                            <FormGroup>
                                <Label className="header-label" htmlFor="PositionOrTitle">Position or Title:</Label>
                                <Input type="text" className="form-control" 
                                    onChange={this.handleInputChange} 
                                    name="position"
                                    value={this.state.position} required />
                                <FormText color="muted">
                                    0-100 max characters
                            </FormText>
                            </FormGroup> 

                            <p>Please use the Submit button below. You should be provided with a Confirmation page. If you are not provided with a Confirmation page, there is an error in your form. Errors will be highlighted.</p>

                            <FormGroup>
                                <Input type="submit" onClick={this.register} value="SUBMIT YOUR FORM" id="button" />
                            </FormGroup>

                            <hr />
                            <FormGroup className="text-center">
                                <div className="acctInfo">Already have an account?</div>
                                <Link to="/" alt="Login Link" aria-label="re-direct to log-in page" className="btn btn-link" style={{ color: "black" }}>Log In</Link>
                            </ FormGroup>
                    </Form>

                        <h4>Pay with PayPal</h4>
                        Pay online using your PayPal account, or using your credit card, with secure PayPal, use the Donate button below.
    
                        <div>
                            <Button id="paypal" >Donate</Button>
                        </div>

                </div >
            </Container >

                )
            }
        }
