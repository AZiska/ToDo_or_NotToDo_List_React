import React from 'react';
import './ListContainer.css'
import List from '../List/List'


class ListContainer extends React.Component {
    render() {
        return (
            <section id="listContainer">
                <List divId="toDoListContainer" listId="toDoList" listName="Personal TO DO list"
                    tasks={this.props.todoItems} onDeleteButtonClick={this.props.handleToDoDelete}/>
                <List divId="notToDoListContainer" listId="notToDoList" listName="Personal NOT TO DO list"
                    tasks={this.props.notTodoItems} onDeleteButtonClick={this.props.handleNotToDoDelete}/>
            </section>
        )
    }
}

export default ListContainer;