import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ErrorComp from "../components/ErrorComp";

function TestErrorPage() {
	return (
		<>
			<Helmet>
				<title>Error Boundary Page</title>
				<meta
					name="description"
					content="This page is for testing error boundary as part of Tunji's Altschool Africa ReactJs examp project"
				/>
				<link rel="canonical" href="/test-errorboundary" />
			</Helmet>
			<Navbar />
			<ErrorComp />
			<Footer />
		</>
	);
}

export default TestErrorPage;
