import { useState } from "react";
import "./App.css";

function App() {
	const [userName, setUserName] = useState("");

	const [password, setPassword] = useState("");

	const [isRegistered, setIsRegistered] = useState(false);

	const handleForm = () => {};

	return (
		<div>
			<h1>{isRegistered ? "Login" : "Register"}</h1>
			<form action="#">
				<input
					type="text"
					name="username"
					id="username"
					value={userName}
					placeholder="enter username"
					onChange={(e) => setUserName(e.target.value)}
				/>
				<br />
				<br />
				<input
					type="password"
					name="password"
					id="password"
					value={password}
					placeholder="enter password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<br />
				<button onClick={handleForm}>
					{isRegistered ? "Login" : "Register"}
				</button>
			</form>
			<br />
			<hr />
			<br />
			<h2>
				{isRegistered
					? `Already have an account, please ${(
							<button onClick={setIsRegistered(!isRegistered)}>Login</button>
					  )}`
					: "Please Register"}
			</h2>
		</div>
	);
}

export default App;
