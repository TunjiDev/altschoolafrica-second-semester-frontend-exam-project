import React from "react";

function ErrorComp() {
	throw new Error("=====ERROR======");

	return (
		<section style={{ minHeight: "85vh" }}>
			<h1 style={{ textAlign: "center" }}>Testing Error Boundary!</h1>
		</section>
	);
}

export default ErrorComp;
