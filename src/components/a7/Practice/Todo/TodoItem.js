import React from 'react'
import './index.css'
const TodoItem = ({
    todo = {
        done: true,
        title: 'Buy milk',
        status: 'COMPLETED'
    }

    }) => {
    return(
        <li className="wd-todo">
            <input type="checkbox" defaultChecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </li>
    );
}
export default TodoItem;
