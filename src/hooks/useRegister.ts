import { gql, useMutation } from '@apollo/client'

interface RegisterUserInput {
	variables : {
		email: string;
		password: string;
	}
}

const REGISTER_USER = gql`
		mutation registerUser($email: String!,  $password: String!) {
			register(email: $email, password: $password)
		} `

// useRegister is a function that returns a function that accepts RegisterUserInput
export const useRegister = () : (( registerUserInput : RegisterUserInput ) => any) => {
	// const [registerUser, {error} ] = useMutation(REGISTER_USER) 
	const [registerUser] = useMutation(REGISTER_USER)
  return registerUser
}
