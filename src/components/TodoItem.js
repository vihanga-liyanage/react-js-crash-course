import React, {Component} from 'react';
import PropTypes from "prop-types";

class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#cbcbcb',
            textAlign: 'left',
            padding: 0,
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.completeTodo.bind(this, id)}/> {' '}
                    {title}
                    <button style={closeBtnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
                </p>
            </div>
        );
    }

}

// Validation using prop types
TodoItem.proptype = {
    todo: PropTypes.array.isRequired
};

const closeBtnStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '5px 10px',
    marginLeft: '20px',
    borderRadius: '100%',
    border: 'none'
};

export default TodoItem;
