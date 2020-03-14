import { h, Component } from "preact"
import { Router } from "preact-router"

import Header from "./header"

// Code-splitting is automated for routes
import Home from "../routes/home"
import Profile from "../routes/profile"

export default function App() {
	const handleRoute = e => {
		this.currentUrl = e.url
	}

	return (
		<div id="app">
			<Header />
			<Router onChange={this.handleRoute}>
				<Home path="/" />
				<Profile path="/profile/" user="me" />
				<Profile path="/profile/:user" />
			</Router>
		</div>
	)
}
