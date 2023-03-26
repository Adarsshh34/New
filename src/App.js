import React from 'react';
import Navbar from "./Components/Navbar";
import { FaInstagram } from "react-icons/fa";
import Footer from './Components/Footer';
function App() {
	return (
		<React.Fragment>
			<Navbar/>
			<h2><FaInstagram/></h2>
			<Footer/>
		</React.Fragment>
	);
}

export default App;
