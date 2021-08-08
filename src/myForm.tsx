import { Button, TextField } from '@material-ui/core'
import { Form, Formik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'

interface MyFormProps {
	onSumbit: (values: Values) => void;
	name: string
}

export interface Values {
	email: string;
	password: string;
}
export const MyForm: React.FC<MyFormProps> = ({ name, onSumbit }) => {
	console.log({ name })
	return (
		<>
			<Formik initialValues={{ email: '', password: '' }}
				onSubmit={values => onSumbit(values)} >
				{({ handleBlur, values, handleChange }) => (
					<Form>
						<h2>{name}</h2>
						<section>
							<TextField name="email" value={values.email}
								onChange={handleChange} onBlur={handleBlur} placeholder="email" />
						</section>
						<section>
							<TextField
								name="password" placeholder="password" value={values.password}
								onChange={handleChange} onBlur={handleBlur} />
						</section>
						<Button color="primary" variant="contained" type="submit">Submit</Button>
					</Form>
				)}
			</Formik>
			<section>
				{name === 'REGISTER' && <Link to='/login'>Already registered? Log in here </Link>}
			</section>
		</>
	)

}