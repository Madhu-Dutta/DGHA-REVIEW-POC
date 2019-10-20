import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';

export default class SuccessfulReg extends Component {

    render() {
        return (
            <div>
                <h1>Successful Registation page</h1>
                <Form>
                    <Input type="password" placeholder="password" required />
                </Form>

            </div>
        )
    }
}
