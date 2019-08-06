import React from 'react';
import './List.css'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(itemIndex) {
        console.log(itemIndex)
        return this.props.onDeleteButtonClick(itemIndex);
    }

    render() {
        const tasks = this.props.tasks;
        const listItems = tasks.map((task, itemIndex) =>
            <li key={'item_' + itemIndex}>
                <button className="deleteButton" 
                        onClick={() => this.handleDelete(itemIndex)}>
                    X
                </button>
                <p className="listItem">{task}</p>
            </li>)
            
        return (
            <div id={this.props.divId} className="toDoListContainer">
                <h2>{this.props.listName} :</h2>
                <ul id={this.props.listId} className="toDoList">
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default List;