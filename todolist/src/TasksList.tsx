import React from "react";
import { todo } from './models/todoModel';

interface Props {
    todosList: Array<todo>
}


const TasksList: React.FC<Props> = ({ todosList }) => {
    return (<>{todosList.map((ele, ind) => (
        <div key={ind}>
            <div>{ele.todoName}</div>
            <div>{ele.isDone}</div>
        </div>
    ))}</>);
}

export default TasksList;