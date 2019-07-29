import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import List from '../components/list';
import { Card, CardImg, CardText, CardBody,
    CardTitle,  Button, FormGroup, Label } from 'reactstrap';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Add Todo',
            value: '',
            button: 'Add',
            list:[]
        };
       this.delete = this.delete.bind(this);
       this.onSave = this.onSave.bind(this);
    }

    onSave(){
       const list = this.state.list;
       list.push(this.refs.demo.value);
        this.setState({list});
        this.refs.demo.value = '';
    }
    delete(i){
        console.log('delete',i);
    }
    render() {
        return (
            <div className="container-fluid">
            <Card>
             <CardImg top width="100%" height="400px" src="./images/react-img.png" alt="Card image cap" />
                <CardBody>
                <CardTitle>React Training</CardTitle>
                <CardText>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</CardText>
                <div className="row">
                    <div className="col-sm-6">
                    <Label for="email">{this.state.name}</Label>
                        <FormGroup>
                           <input 
                            type="text"
                            ref="demo"
                            className="form-control"
                            //onChange={(event) =>  this.setState({value: event.target.value })}
                            //value={this.state.value}
                            />
                              </FormGroup>
                           
                           
                           <FormGroup>
                            <Button onClick={this.onSave}>{this.state.button}</Button>
                            </FormGroup>
                            </div>
                            <div className="col-sm-6">
                            <List 
                                list={this.state.list} 
                                _delete={this.delete}
                            />
                         </div>
                    </div>
                </CardBody>
            </Card>                
            </div>
        );
    }
}

Home.propTypes = {
};

const mapStateToProps = (state) =>
    ({
    });

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
