import React, {Component} from 'react';
import Todo from './todo';
import { connect } from 'react-redux';
import styles from '../styling/todoList.module.css'
import * as actions from '../redux/actionsCreators'

class TodoList extends Component {



    isDone = (e) => {
        var todoId = e.target.parentElement.nextSibling.id;
        this.props.isDone(todoId);
        
    }

    deleteTask = (id) => {
        this.props.deleteTodo(id);
    }


    renderTodo(){
        console.log(this.props.state)
        return this.props.tasks.map(todo => {
            return( 
                
                <div className={styles.todoItem} key={todo.id}>
                    <div className="input-group-text">
                     <input className="form-check-input" type="checkbox" onChange={this.isDone}/>
                    </div>
                    <Todo task={todo.text} className={styles.todo} id={todo.id}/>
                    <button type="button" className="btn btn-outline-danger" onClick={() => this.deleteTask(todo.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>
                </div>
                
            );
            
        });
    };

    render(){
        
        return(
            <div className="list-group gap-3 bg-light p-3">
                {this.renderTodo()}
              
            </div>
        );
    };
};


function mapStateToProps(state){
    return{
        tasks: state.tasks.tasks,
        state
    }
}

export default connect(mapStateToProps, actions)(TodoList);