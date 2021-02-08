import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
        }
    }

    handleChange = evt => {
        this.setState({
            inputValue: evt.target.value
        })
    }

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.handleTaskAdd(this.state.inputValue);
        this.setState({
            inputValue: '',
        })
    }

    handleClick = () => {
        this.props.handleTaskCompleted();
    }

    render() {
        return (
            <div class='container'>
                <form onSubmit={this.handleSubmit} className='main-form'>
                    <input
                        type='text'
                        name='task'
                        placeholder='todo...'
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    ></input>
                    <button>Add todo</button>
                </form>
                <button onClick={this.handleClick} className='clear-button'>
                Clear Completed
                </button>
            </div>
        )
    }
}

export default TodoForm;