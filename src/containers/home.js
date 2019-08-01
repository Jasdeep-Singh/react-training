import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import List from '../components/list';
import {add_todo, update_todo, delete_todo} from '../actions/todo';
import { Card, CardImg, CardText, CardBody,
    CardTitle,  Button, FormGroup, Label, Collapse } from 'reactstrap';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Add Todo',
            value: '',
            button: 'Add',
            id : null,
            collapse: false
        };
       this.delete = this.delete.bind(this);
       this.onSave = this.onSave.bind(this);
       this.toggle = this.toggle.bind(this);
       this.update = this.update.bind(this);
    }

    onSave(){
       if(this.refs.demo.value.trim().length > 0){
        if(this.state.id){
            this.props.update_todo({id: this.state.id, text: this.refs.demo.value});
            this.setState({button: "Add", id: null});
        } else {
            this.props.add_todo(this.refs.demo.value);
        }        
       }
       this.refs.demo.value = '';
    }
    update(value){
        this.setState({button: "Update", id: value.id});
        this.refs.demo.value = value.text;
        console.log(value);
    }
    delete(id){        
        this.props.delete_todo(id);
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
    render() {
        console.log(this.props);
        return (
            <div className="container-fluid">
            <Card>
             <CardImg top width="100%" height="400px" src="./images/react-img.png" alt="Card image cap" />
                <CardBody>
                <CardTitle>React Training</CardTitle>
                <CardText>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</CardText>
                <div className="row">
                    <div className="col-sm-4">                    
                        <FormGroup>
                        <Label for="todo">{this.state.name}</Label>
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
                            <FormGroup>
                            <Label for="todo">Todo List</Label>
                            <br/>
                            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>View List</Button>
                        <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                {this.props.todo.length > 0 ?
                                 <List 
                                    list={this.props.todo} 
                                    _update={this.update}
                                    _delete={this.delete}
                                /> 
                                :
                                'Empty list!'
                                }
                           
                            </CardBody>
                        </Card>
                        </Collapse>
                        </FormGroup>   
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
        todo: state.todo
    });

const mapDispatchToProps = (dispatch) => ({
    add_todo: bindActionCreators(add_todo, dispatch),
    update_todo: bindActionCreators(update_todo, dispatch),
    delete_todo: bindActionCreators(delete_todo, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
