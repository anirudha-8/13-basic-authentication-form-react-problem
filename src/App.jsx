import { useState } from "react";
import "./App.css";

function App() {
	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");

	const [isRegister, setIsRegister] = useState(false);

	return (
		<div>
			<form action="#">
				<input type="email" name="email" id="email" />
				<br />
				<br />
				<input type="password" name="password" id="password" />
				<br />
				<br />
				<button> Login / Register</button>
			</form>
		</div>
	);
}

export default App;
