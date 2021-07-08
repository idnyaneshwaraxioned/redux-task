import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions';

const Login = (props) => {
	const [user, setUser] = useState({ username: '', password: '' });
	const { username, password } = user;

	const inputHandler = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const formhandler = (e) => {
		e.preventDefault()
		if (username === "abc" && password === "abc") {
			props.login_user()
			props.history.push("/")
		} else {
			alert("wrong inputs")
		}
	}
	
	return (
		<>
			<form onSubmit={formhandler}>
				<input type="text" name="username" value={username} placeholder="username" onChange={inputHandler} />
				<input type="text" name="password" value={password} placeholder="password" onChange={inputHandler} />
				<input type="submit" value="Login" />
			</form>
		</>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		login_user: () => dispatch(loginUser())
	}
}

export default connect(null, mapDispatchToProps)(Login);