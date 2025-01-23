import { useState } from "react";
import "./App.css";

function App() {
	const [userName, setUserName] = useState("");

	const [password, setPassword] = useState("");

	const handleForm = () => {};

	return (
		<div>
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
				<button onClick={handleForm}>Register / Login</button>
			</form>
			<br />
			<hr />
			<br />
		</div>
	);
}

export default App;
