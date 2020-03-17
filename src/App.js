import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {v4} from 'uuid';
import axios from 'axios';
import './App.css';
import Header from "./components/layouts/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

class App extends Component {

    state = {
        todos: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => (this.setState({todos: response.data})));
    }

    completeTodo = (id) => {
        console.log("Completed: " + id);
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    };

    deleteTodo = (id) => {
        console.log("Deleted: " + id);
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});

    };

    addTodo = (title) => {
        console.log("Adding todo: " + title);
        const newTodo = {
            id: v4(),
            title: title,
            completed: false
        };
        this.setState({todos: [...this.state.todos, newTodo]});
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo}/>
                            <Todos todos={this.state.todos} completeTodo={this.completeTodo}
                                   deleteTodo={this.deleteTodo}/>
                        </React.Fragment>
                    )}
                    />
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        );
    }

}

export default App;
