import { h, Component } from 'preact';
import { OTPublisher } from "opentok-react";
import CheckBox from "./checkbox";

class Publisher extends Component {
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
                <CheckBox label="Share Screen" checked={this.state.videoSource === "screen"} onChange={this.changeVideoSource} />
                <CheckBox label="Enable Audio" checked={this.state.audio === "audio"} onChange={this.setAudio} />
                <CheckBox label="Enable Video" checked={this.state.videoSource === "video"} onChange={this.setVideo} />
            </div>
        );
    }
}
export default Publisher;
