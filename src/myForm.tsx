import { Button, TextField } from '@material-ui/core'
import { Form, Formik } from 'formik'
import React from 'react'

interface MyFormProps {
	onSumbit: (values: Values) => void
}

export interface Values {
	email: string;
	password: string;
}
export const MyForm: React.FC<MyFormProps> = ({ onSumbit }) => {
	return (
		<Formik initialValues={{ email: '', password: '' }}
			onSubmit={values => onSumbit(values)} >
			{({ handleBlur, values, handleChange }) => (
				<Form>
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
	)

}