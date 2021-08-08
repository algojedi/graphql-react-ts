import { Typography } from '@material-ui/core'
import React from 'react'
import { TodoList } from '../../components/todo-list/todo-list'
// import items from '../../data.json'
import { useGetTodos } from '../../hooks/todos/useGetTodos';


export const About: React.FC = () => {
	const todos = useGetTodos()
	console.log({ todos })

	return (
		<section>
			<header className="about">
				<Typography variant="h2">I am the about page</Typography>
			</header>
			<br />
			{
				todos && <TodoList todos={todos}></TodoList>
			}
		</section>
	)
}