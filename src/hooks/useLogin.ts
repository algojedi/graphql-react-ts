import { gql, useMutation } from '@apollo/client'

interface LoginUserInput {
	variables : {
		email: string;
		password: string;
	}
}

const LOGIN_USER = gql`
		mutation loginUser($email: String!,  $password: String!) {
			login(email: $email, password: $password) { email }
		} `

export const useLogin = () : (( loginUserInput : LoginUserInput ) => any) => {
	const [loginUser] = useMutation(LOGIN_USER)
  return loginUser
}
