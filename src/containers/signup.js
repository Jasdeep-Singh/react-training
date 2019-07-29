import React from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import validator, {maxlength} from '../utilities/validator';
import { Button, FormGroup, Label } from 'reactstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user: []
        };
    }
    handleSubmit(values) {
        console.log("values", values);
        if (values) {
            let userData = this.state.user;
            //
            if (userData.findIndex(value => (value.email === values.email)) > -1) {

                alert("Email already exist");
            } else {
                userData.push(values);
            }
            // user
            this.setState({ user: userData });

        }
    }

    render() {
        console.log("this.state", this.state.user);
        return (
            <div className="col-md-6 offset-3">
                <LocalForm
                    onSubmit={this.handleSubmit}
                    model="user"
                ><FormGroup>
                    <Label for="first_name">First Name</Label>
                    <Control.text
                        model=".first_name"
                        className="form-control"
                        placeholder="First Name"
                        validators={{ isRequired: val => validator.isRequired(val), maxlength }}
                    />
                    <Errors
                        model=".first_name"
                        messages={{
                            isRequired: 'Please provide an first_name address.',
                            maxlength : "First Name should be 10 char long"
                        }} />
                        </FormGroup>
                        <FormGroup>
                        <Label for="last_name">Last Name</Label>
                    <Control.text
                        model=".last_name"
                        placeholder="Last Name"
                        className="form-control"
                        validators={{ isRequired: val => val && val.length }}
                    />
                    <Errors
                        model=".last_name"
                        messages={{
                            isRequired: 'Please provide an last_name address.'
                        }} />
                        </FormGroup>
                        <FormGroup>
                        <Label for="email">Email</Label>
                    <Control.text
                        model=".email"
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        validators={{ isRequired: val => val && val.length }}
                    />
                    <Errors
                        model=".email"
                        messages={{
                            isRequired: 'Please provide an email address.'
                        }} />

</FormGroup>
<FormGroup><Label for="password">Password</Label>
                    <Control.text model=".password" placeholder="Password" type="password" className="form-control" />
                    </FormGroup>
                    <FormGroup>
            <Control.select model=".role" className="form-control">
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                </Control.select>
                </FormGroup>
                <FormGroup>
                    <Button type="submit">Signup</Button>
                    </FormGroup>
                </LocalForm>
            </div>

        );
    }
}