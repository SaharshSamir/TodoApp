import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actionsCreators'

class AddTodo extends Component {
    
    
    render(){
        const handleSubmit = (e) => {
            e.preventDefault();
            const todo = e.target.children[0].value;
            this.props.addTodo(todo);
            e.target.children[0].value = '';
        }
        return (
            <form className="input-group mb-3" 
                onSubmit={handleSubmit}
            >
                <input type="text" className="form-control" placeholder="Add Task" aria-label="Add Task" aria-describedby="button-addon2" id="todoInput" />

                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add</button>
            </form>
        );
    }
};


export default connect(null, actions)(AddTodo);
 