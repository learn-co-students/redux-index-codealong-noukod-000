import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'
 
class TodosContainer extends Component {
    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
          text: '',
        })
    }
    
  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
 
  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};
 
const mapStateToProps = state => {
    return {
      todos: state.todos
    }
}
   
export default connect(mapStateToProps)(TodosContainer);s
// export default connect()(TodosContainer);