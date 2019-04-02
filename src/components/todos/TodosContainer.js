import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
class TodoContainer extends Component {

  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  };
};

const mapStateToProps = state => {
  console.log('returning a list of these todos: ' + state.todos);
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoContainer);