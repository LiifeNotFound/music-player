import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import MusicPlayer from "./components/MusicPlayer";
import "./index.css";

ReactDOM.render(
	<MusicPlayer
		device="iPhone"
		musicTitle="Space Cadet (feat. Gunna)"
		musicAlbum="Metro Boomin — NOT ALL HEAROES WEAR CAPE (Deluxe)"
	/>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
