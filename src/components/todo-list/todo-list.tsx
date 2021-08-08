import React from 'react'
import { Todo } from '../../models/todo'
import { TodoItem } from '../todo-item/TodoItem'
import './todo-list.css'

interface TodoListProps {
	todos: Todo[]
}

export const TodoList: React.FC<TodoListProps> = ({ todos } : TodoListProps) => {
		return (
			<section className="todo-list-container">
				<ul className="todo-list">
					{todos.map(todo => <TodoItem key={todo.id} todo={todo}/>) }
				</ul>
			</section>
		)
}

