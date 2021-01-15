import React from 'react';
import { connect } from 'react-redux';  


const todo = ({task, id, tasks}) => {
   const completed = {
       textDecoration: "line-through",
       fontStyle: "italic",
       fontWeight: "lighter"
   }

   var done = tasks[id].done

   var applyStyles = done => {
       if(done){
           return completed
       }
   }

    return(
        <li className="list-group-item border border-dark w-100 " id={id} style={applyStyles(done)}>
            <strong>{task}</strong>
        </li>
        // <div className="list-group-item border border-dark w-100 ">
        //     <div className="input-group">
        //         <div className="input-group-text">
        //             <input className="form-check-input" type="radio" value="" aria-label="Radio button for following text input">
        //         </div>
        //         <input type="text" className="form-control" aria-label="Text input with radio button">
        //     </div>
        // </div>
        // <li className="list-group-item border border-dark w-100">
        //     <div className="input-group">
        //         <div className="input-group-text">
        //             <input className="form-check-input" type="radio" value=""/>
        //         </div>
        //         {task}
        //     </div>
        // </li>
        
    );
}
    
function mapStateToProps(state){
    return{
        tasks: state.tasks.tasks
    }
}

export default connect(mapStateToProps)(todo);