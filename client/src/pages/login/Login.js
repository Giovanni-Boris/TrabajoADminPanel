import { useState, useContext } from 'react';
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";
import "./login.css"

const initialForm ={
	username:"",
	password:"",
}
const Login = () => {
	const [form, setForm] = useState(initialForm);
	const { isFetching, dispatch } = useContext(AuthContext);
	const handleChange = (e) => {
		let {name,value } = e.target;
		setForm({
			...form,
			[name]: value
		})
	}
	const handleSubmit = (e)=>{
		e.preventDefault();
		login(form, dispatch);
	}
	return (
		<div className="login">
			<form className="loginForm" onSubmit={handleSubmit}>
				<input 
					text="text"
					placeholder="username" 
					className="loginInput"
					name="username"
					onChange={handleChange}
				/>
				<input 
					type="text" 
					placeholder="password"
					className="loginInput"
					name="password"
					onChange={handleChange}
				/>
				<button type="submit" className="loginButton" disabled={isFetching}>Login</button>
			</form>
		</div>
	)
}

export default Login