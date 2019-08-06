import React from 'react';
import './App.css';

import InputContainer from './InputContainer/InputContainer'
import ListContainer from './ListContainer/ListContainer';

// ========================================

class ToDoListApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todoItems: ['Read a book', 'Cook a recipe'],
            notTodoItems: ['Read a boring book', 'Eat meat'],
            inputValue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleToDoButtonClick = this.handleToDoButtonClick.bind(this);
        this.handleNotToDoButtonClick = this.handleNotToDoButtonClick.bind(this);
        this.handleToDoDelete = this.handleToDoDelete.bind(this);
        this.handleNotToDoDelete = this.handleNotToDoDelete.bind(this);
    }
    
    handleChange(newValue) {
        console.log('new value:', newValue)
        this.setState({ inputValue: newValue });
    }

    handleToDoButtonClick() {
        const newTask = this.state.inputValue.trim();
        if(newTask === ''){
            return
        }
        
        const tasks = this.state.todoItems;
        tasks.push(newTask);
        this.setState({
            todoItems: tasks,
            inputValue: ''
        })
    }

    handleNotToDoButtonClick() {
        const newTask = this.state.inputValue.trim();
        if(newTask === ''){
            return
        }
        
        const tasks = this.state.notTodoItems;
        tasks.push(newTask);
        this.setState({
            notTodoItems: tasks,
            inputValue: ''
        })
    }

    handleToDoDelete(index) {
        console.log('the index is' + index)
        const tasks = this.state.todoItems;
        tasks.splice(index, 1);
        this.setState({
            todoItems: tasks,
            inputValue: ''
        })
    }

    handleNotToDoDelete(index) {
        console.log('the index is' + index)
        const tasks = this.state.notTodoItems;
        tasks.splice(index, 1);
        this.setState({
            notTodoItems: tasks
        })
    }

    render() {
        return (
            <div>
                <header><h1>To Do or Not To Do List</h1></header>
                <InputContainer inputValue={this.state.inputValue} 
                                onChange={this.handleChange} 
                                onToDoButtonClick={this.handleToDoButtonClick} 
                                onNotToDoButtonClick={this.handleNotToDoButtonClick}/>
                <ListContainer todoItems={this.state.todoItems} notTodoItems={this.state.notTodoItems} 
                                handleToDoDelete={this.handleToDoDelete}
                                handleNotToDoDelete={this.handleNotToDoDelete}/>
                                
            </div>
        )
    }
}

// ========================================

export default ToDoListApp;