import React from 'react';
import './InputContainer.css'

class InputContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        return this.props.onChange(event.target.value);
    }

    render() {
        return (
            <section id="inputContainer">
                <input  id="inputField" className="inputField" type='text' 
                        autoComplete="off"
                        value={this.props.inputValue} onChange={this.handleInputChange}
                        placeholder="Enter a new task here..."></input>
                <div id="buttonContainer">
                    <button id="toDoButton" className="submitButton" onClick={this.props.onToDoButtonClick}>
                        Add to TO DO list
                    </button>
                    <button id="notToDoButton" className="submitButton" onClick={this.props.onNotToDoButtonClick}>
                        Add to TO NOT DO list
                    </button>
                </div>
            </section>
        );
    }
}

export default InputContainer;