import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Label, Form, FormGroup, FormText, Input } from 'reactstrap';

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
        }
    }

    Email = (e) => {
        this.setState({
            Email: e.target.value
        })
    }
    FirstName = (e) => {
        this.setState({
            FirstName: e.target.value
        })
    }
    LastName = (e) => {
        this.setState({
            LastName: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault();
        // debugger;
        console.log('submit button clicked');
    }


    render() {
        return (
            <Container>
                <div className="wrapper">
                    <div className="header" style={{ paddingBottom: "2%" }}>
                        <h2 className="text-left">Membership</h2>
                    </div>

                    <Form name="form" onSubmit={this.register}>

                        <FormGroup>
                            <Label className="header-label" for="MembershipType">Membership Type:<span className="impt">*</span></Label>
                            <p>Please choose Full or Associate Member</p>

                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="fullMem" />{' '}
                                    Full Member
                            </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="assoMem" />{' '}
                                    Associate Member
                            </Label>
                            </FormGroup>
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="MembershipType" for="Title">Title: <span className="impt">*</span></Label>
                            <p>Mr, Mrs, Ms, Dr, Other:</p>
                            <Input type="text" className="form-control" onChange={this.title} required />
                            <FormText color="muted">
                                0-10 max characters
                            </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="FirstName">First Name: <span className="impt">*</span></Label>
                            <Input type="text" className="form-control" onChange={this.FirstName} required />
                            <FormText color="muted">
                                0-10 max characters
                            </FormText>
                        </FormGroup>
                        <FormGroup>
                            <Label className="header-label" for="LastName">Last Name: <span className="impt">*</span></Label>
                            <Input type="text" className="form-control" onChange={this.LastName} required />
                            <FormText color="muted">
                                0-10 max characters
                            </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="DateOfBirth">Date Of Birth(optional)</Label>
                            <p>dd/mm/yyyy</p>
                            <Input type="text" className="form-control" onChange={this.dob} />
                            <FormText color="muted">
                                0-10 max characters
                            </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="StreetOrPostalAddress">Street or Postal Address: <span className="impt">*</span></Label>
                            <Input type="text" className="form-control" onChange={this.Street} required /> <FormText color="muted">
                                0-70 max characters
                            </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="Suburb">Suburb: <span className="impt">*</span></Label>
                            <Input type="text" className="form-control" onChange={this.Suburb} required />
                            <FormText color="muted">
                                0-70 max characters
                            </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="StateOrTerritory">State or Territory: <span className="impt">*</span></Label>
                            <Input type="text" className="form-control" onChange={this.territory} required />
                            <FormText color="muted">
                                0-40 max characters
                            </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="Postcode">Postcode: <span className="impt">*</span></Label>
                            <Input type="text" className="form-control" onChange={this.postcode} required />
                            <FormText color="muted">
                                0-4 max characters
                            </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="PhoneNumber">Phone Number: <span className="impt">*</span></Label>
                            <p>Your best contact phone number.</p>
                            <Input type="text" className="form-control" onChange={this.phone} required />
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="email">Email Address:<span className="impt">*</span></Label>
                            <Input type="text" className="form-control" value={this.state.Email} onChange={this.Email} required />
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="YourDogTrainedFor">Your dog is trained for:<span className="impt">*</span></Label>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="visionImp" />{' '}
                                    Dog Guide used for mobility by people who are blind or vision impaired
                            </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="puppyRaiser" />{' '}
                                    Puppy Raiser involved in a training program
                            </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="Na" />{' '}
                                    Not applicable
                            </Label>
                            </FormGroup>
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="DogGuideNameorPuppyName">Name of dog guide or puppy:<span className="impt">*</span></Label>
                            <p>(if applicable)</p>
                            <Input type="text" className="form-control" onChange={this.dogName} required />
                            <FormText color="muted">
                                0-40 max characters
                            </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="DogBreed">Breed of dog:<span className="impt">*</span></Label>
                            <Input type="text" className="form-control" onChange={this.breed} required />
                            <FormText color="muted">
                                0-40 max characters
                            </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="TrainingProvider">Training provider or organisation:<span className="impt">*</span></Label>
                            <p>(if applicable)</p>
                            <Input type="text" className="form-control" onChange={this.trainer} required />
                            <FormText color="muted">
                                0-100 max characters
                            </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="exampleText">If your dog is also trained to assist you with a disability other than blindness or vision impairment.</Label>
                            <p>Please indicate what the dog is trained for?</p>
                            <Input type="textarea" name="text" id="exampleText" />
                            <FormText color="muted">
                                0-100 max characters
                            </FormText>
                        </FormGroup>

                        <FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="yes" />{' '}
                                    Yes
                            </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="no" />{' '}
                                    No
                            </Label>
                            </FormGroup>
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="NameoftheDogGuideProvider">If Yes, Name of Dog Guide or Assistance dog provider, or other blindness organisation:</Label>
                            <Input type="text" name="text" id="exampleName" />
                            <FormText color="muted">
                                0-100 max characters
                            </FormText>
                        </FormGroup>

                        <FormGroup>
                            <Label className="header-label" for="PositionOrTitle">Position or Title:</Label>
                            <Input type="text" className="form-control" onChange={this.position} required />
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
                            <div>Already have an account?</div>
                            <Link to="/Login" alt="Login Link" aria-label="re-direct to log-in page" className="btn btn-link" style={{ color: "black" }}>Log In</Link>
                        </ FormGroup>
                    </Form>

                    {/* <h2>Pay with PayPal</h2>
                    Pay online using your PayPal account, or using your credit card, with secure PayPal, use the Donate button below.
                    <button>Donate</button> */}
                </div>
            </Container>

        )
    }
}
