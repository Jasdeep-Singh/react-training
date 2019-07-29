import React from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Button, FormGroup, Label } from 'reactstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values){
        console.log("values", values);
    }

  render() {
    return (
        <div className="col-md-6 offset-3">
             <LocalForm
                onSubmit={(values) => this.handleSubmit(values)}
                model="user"
            >
            <FormGroup>
            <Label for="email">Email</Label>
            <Control.text 
                model=".email" 
                type="email" 
                className="form-control"
                validators={{ isRequired: val => val && val.length}}
            />
            <Errors
            model=".email"            
            messages={{
                isRequired: 'Please provide an email address.'
            }}/>
            </FormGroup>
            <FormGroup>
            <Label for="password">Password</Label>
            <Control.text model=".password" type="password" className="form-control"/>
            <Errors
            model=".email"
            messages={{
                isRequired: 'Please provide an email address.'
            }}/>
            </FormGroup>
            <FormGroup>
            <Control.select model=".role" className="form-control">
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                </Control.select>
                </FormGroup>
                <FormGroup>
            <Button type="submit">Login</Button>
            </FormGroup>
            
        </LocalForm>
        </div>
     
    );
  }
}