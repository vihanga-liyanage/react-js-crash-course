import React, {Component} from 'react';

class AddTodo extends Component {

    state = {
        title: ''
    };

    onAddTodoSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        })
    };

    onChangeInput = (e) => {
        this.setState( {[e.target.name]: e.target.value});
    };

    render() {
        return (
            <form style={{ display: 'flex'}} onSubmit={this.onAddTodoSubmit}>
                <input type="text" name="title" placeholder="Add your todo..." onChange={this.onChangeInput}
                value={this.state.title}/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default AddTodo;