import { Component } from "react";
// import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error) {
		// console.log(error);
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return (
				<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<h2 style={{ color: "red", marginBottom: "30px" }}>Something went very wrong!</h2>
					<a href="/home" style={{ color: "blue", textDecoration: "none", fontWeight: "bold" }}>
						Back to Home
					</a>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
