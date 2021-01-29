import React, { Component } from "react";
import "./MusicPlayer.css";
import Image from "../resources/album_cover_example.jpg";
import Play from "../resources/play-solid.svg";
import Pause from "../resources/pause-solid.svg";
import Forward from "../resources/forward-solid.svg";
import Backward from "../resources/backward-solid.svg";

class MusicPlayer extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
}

export default (props) => (
	<div className="card-container">
		<div className="card">
			<div className="image-conteiner">
				<img src={Image} />
			</div>
			<div className="under-img">
				<div className="music-info-conteiner">
					<h5>{props.device}</h5>
					<h3>{props.musicTitle}</h3>
					<h4>{props.musicAlbum}</h4>
				</div>
				<div className="music-progress-bar">
					<div className="circle"></div>
				</div>
				<div className="music-controls">
					<img src={Backward} />
					<img src={Play} />
					<img src={Forward} />
				</div>
			</div>
			<h5 id='creator'>By @Liife_not_found</h5>
		</div>
	</div>
);
