//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SecondsCounter } from "./component/secondsCounter.js";

let value = 0;
//render your react application
setInterval(() => {
	value++;
	ReactDOM.render(
		<SecondsCounter seconds={value} />,
		document.querySelector("#app")
	);
}, 300);

//ReactDOM.render(<Home seconds={value} />, document.querySelector("#app"));
