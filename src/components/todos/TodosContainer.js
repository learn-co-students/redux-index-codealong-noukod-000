import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

    renderTodos = () => (
        this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
    )
    render(){
        return(
            <div>
                <ul>{this.renderTodos()}</ul>
            </div>)
    }
}

const mapStateToProps =({todos}) => ({ todos })
export default connect(mapStateToProps)(TodosContainer)