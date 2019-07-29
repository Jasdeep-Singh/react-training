import React from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import validator, {maxlength} from '../utilities/validator';

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
            <div className="form-group col-md-6 col-md-offset-3">
                <LocalForm
                    onSubmit={this.handleSubmit}
                    model="user"
                >
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



                    <Control.text model=".password" placeholder="Password" type="password" className="form-control" />

                    {/* <Control.select model=".role" className="form-control">
                <option value="user">User</option>
                <option value="admin">Admin</option>
                </Control.select> */}
                    <button type="submit">Signup</button>
                </LocalForm>
            </div>

        );
    }
}