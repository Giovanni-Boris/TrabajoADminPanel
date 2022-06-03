import { useState } from 'react';

import "./login.css"
const initialForm = ({
	username:"",
	password:"",
})
const Login = () => {
	const [form, setForm] = useState(initialForm);
	const handleChange = (e) => {
		let {value,name} = e.target;
		setForm({
			...form,
			[name]: value,
		})
	}
	const handleSubmit = (e)=>{
		e.preventDefault();
	}
	return (
		<div className="login">
			<form className="loginForm" onSubmit={handleSubmit}>
				<input 
					text="text"
					placeholder="email" 
					className="loginInput"
					name="email"
					onChange={handleChange}
				/>
				<input 
					type="text" 
					placeholder="password"
					className="loginInput"
					name="password"
					onChange={handleChange}
				/>
				<button type="submit" className="loginButton" disabled={false}>Login</button>
			</form>
		</div>
	)
}

 export default Login