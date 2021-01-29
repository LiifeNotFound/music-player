import React, { Component } from "react";
import "./MusicPlayer.css";
import Image from "../resources/album_cover_example.jpg";

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
					<div className="control-back"></div>
					<div className="control-play-pause">
						<i class="fas fa-play"></i>
					</div>
					<div className="control-next"></div>
				</div>
			</div>
		</div>
	</div>
);
