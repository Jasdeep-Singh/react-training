import React from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';

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
        <div className="form-group col-md-6 col-md-offset-3">
             <LocalForm
                onSubmit={(values) => this.handleSubmit(values)}
                model="user"
            >
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
            
            <Control.text model=".password" type="password" className="form-control"/>
            <Errors
            model=".email"
            messages={{
                isRequired: 'Please provide an email address.'
            }}/>
            <Control.select model=".role" className="form-control">
                <option value="user">User</option>
                <option value="admin">Admin</option>
                </Control.select>
            <button type="submit">Login</button>
        </LocalForm>
        </div>
     
    );
  }
}