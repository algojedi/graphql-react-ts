import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

interface HeaderProps  { 
	user : string;
}
export const Header: React.FC<HeaderProps> = ({ user } : HeaderProps ) => {
	return (
		<header>
			<nav className="nav">
				{ user && <h4 className='username'>Hello, {user} </h4>}
				<ul className="list">
					<li className="list_item">
						<NavLink className="nav_link" to='/'>Home</NavLink>
					</li>
					<li className="list_item">
						<NavLink className="nav_link" to='/about'>About</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}