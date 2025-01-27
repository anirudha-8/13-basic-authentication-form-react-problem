import { useState } from "react";
import "./App.css";

function App() {
	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");

	const [isRegister, setIsRegister] = useState(false);

	return (
		<div>
			<form
				action="#"
				onSubmit={(e) => {
					e.preventDefault();
					if (!email && !password) {
						alert("Both Email and Password are required!");
						return;
					}
				}}
			>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter your email..."
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					aria-label="Email"
				/>
				<br />
				<br />
				<input
					type="password"
					name="password"
					id="password"
					placeholder="Enter your password..."
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					aria-label="Password"
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
