import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

import PropTypes from "prop-types";

//create your first component
export function SecondsCounter(props) {
	return (
		<div className="text-center d-flex justify-content-around bg-dark text-white p-4">
			<h1>
				<i className="far fa-clock"></i>
			</h1>
			<h1>{Math.floor(props.seconds / 100000) % 10}</h1>
			<h1>{Math.floor(props.seconds / 10000) % 10}</h1>
			<h1>{Math.floor(props.seconds / 1000) % 10}</h1>
			<h1>{Math.floor(props.seconds / 100) % 10}</h1>
			<h1>{Math.floor(props.seconds / 10) % 10}</h1>
			<h1>{props.seconds % 10}</h1>
		</div>
	);
}

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};
