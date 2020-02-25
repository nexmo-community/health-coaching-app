// Publisher.js

import React from "react";
import { OTPublisher } from "opentok-react";
import CheckBox from "./CheckBox";

class Publisher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            audio: true,
            video: true,
            videoSource: "camera"
        };
    }

    setAudio = audio => {
        this.setState({ audio });
    };

    setVideo = video => {
        this.setState({ video });
    };

    changeVideoSource = videoSource => {
        this.state.videoSource !== "camera"
            ? this.setState({ videoSource: "camera" })
            : this.setState({ videoSource: "screen" });
    };

    onError = err => {
        this.setState({ error: `Failed to publish: ${err.message}` });
    };

    render() {
        return (
            <div className="publisher">
                Publisher
        {this.state.error ? <div id="error">{this.state.error}</div> : null}
                <OTPublisher
                    properties={{
                        publishAudio: this.state.audio,
                        publishVideo: this.state.video,
                        videoSource:
                            this.state.videoSource === "screen" ? "screen" : undefined
                    }}
                    onError={this.onError}
                />
                <CheckBox label="Share Screen" onChange={this.changeVideoSource} />
                <CheckBox
                    label="Publish Audio"
                    initialChecked={this.state.audio}
                    onChange={this.setAudio}
                />
                <CheckBox label="Publish Video" initialChecked={this.state.video} onChange={this.setVideo} />
            </div>
        );
    }
}
export default Publisher;
