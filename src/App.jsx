import { useState } from "react";
import "./App.css";

function App() {
	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");

	const [isRegister, setIsRegister] = useState(false);

	return (
		<div>
			<form action="#">
				<input
					type="email"
					name="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<br />
				<input
					type="password"
					name="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<br />
				<button>{isRegister ? "Register" : "Login"}</button>
			</form>
			<p>
				{isRegister
					? "Already have an account? Log in."
					: "Don't have an account? Register."}
			</p>
			<button onClick={() => setIsRegister(!isRegister)}>
				{isRegister ? "Login" : "Register"}
			</button>
		</div>
	);
}

export default App;
