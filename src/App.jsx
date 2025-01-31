import { useState } from "react";
import "./App.css";

function App() {
	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");

	const [isRegister, setIsRegister] = useState(false);

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div>
			{isLoggedIn ? (
				<div>
					<h2>Welcome, {email}</h2>
					<br />
					<button>Log Out</button>
				</div>
			) : (
				<div>
					<h1>{isRegister ? "Login" : "Register"}</h1>
					<form
						action="#"
						onSubmit={(e) => {
							e.preventDefault();
							if (!email.trim() && !password.trim()) {
								alert("Both Email and Password are required!");
								return;
							}
							alert(
								`Your are ${
									isRegister ? "registered" : "logged in"
								} successfully!`
							);
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
						<button disabled={!email || !password}>
							{isRegister ? "Register" : "Login"}
						</button>
					</form>
					<br />
					<hr />
					<p>
						{isRegister
							? "Already have an account? Log in."
							: "Don't have an account? Register."}
					</p>
					<button onClick={() => setIsRegister(!isRegister)}>
						{isRegister ? "Login" : "Register"}
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
