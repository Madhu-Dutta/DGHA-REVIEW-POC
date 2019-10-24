import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap';

export default class confirmRegistration extends Component {
    render() {
        return (
            <Container>
                <div className="signup-wrapper flex justify-center flex-wrap">
                    <h2>Confirmation of DGHA Membership</h2>
                    <div className="info-item">
                        Thank you for submitting your membership application form to join Dog Guide Handlers Australia.
                        Your application has been forwarded to the DGHA Secretary
                </div>
                    <div className="info-item">
                        Once your membership application has been considered by the DGHA Committee, we will be in touch.
        </div>

                    <div className="info-item">
                        Thankyou<br />
                        Secretary<br />
                        Dog Guide Handlers Australia<br />
                    </div>

                    <div className="info-item">
                        <Link
                            to="/Review"
                            alt="ReviewPage"
                            aria-label="re-direct to review page"
                            className="btn btn-link"
                            style={{ color: "black", fontWeight: "bold" }}
                        >
                            Continue to Review Page
                    </Link>
                    </div>
                </div>

            </Container>
        )
    }
}
