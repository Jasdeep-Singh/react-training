import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import List from '../components/list';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Todo Demo App',
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
                <div className="row">
                    <div className="col-12">
                        <h1>{this.state.name}</h1>
                        <input 
                            type="text"
                            ref="demo"
                            //onChange={(event) =>  this.setState({value: event.target.value })}
                            //value={this.state.value}
                            />
                            <button onClick={this.onSave}>{this.state.button}</button>
                            <br/>
                            <List 
                                list={this.state.list} 
                                _delete={this.delete}
                            />
                    </div>
                </div>
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
