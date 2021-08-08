import React from 'react'
import { Todo } from '../../models/todo'
import './todo-item.css'

interface TodoItemProps {
	todo: Todo
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }: TodoItemProps) => {
	return (
		<section className="todo">
			<h5>{todo.title}</h5>
		</section>
	)
}