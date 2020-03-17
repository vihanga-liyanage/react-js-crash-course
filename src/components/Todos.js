import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} completeTodo={this.props.completeTodo} deleteTodo={this.props.deleteTodo}/>
        ));
    }

}

// Validation using prop types
Todos.proptype = {
    todos: PropTypes.array.isRequired
};

export default Todos;
