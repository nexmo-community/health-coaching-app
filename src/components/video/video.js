import { h, Component } from 'preact';
import { OTSession, OTStreams, preloadScript } from 'opentok-react';
import ConnectionStatus from './connectionStatus';
import Publisher from './publisher';
import Subscriber from './subscriber';

class VideoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            connected: false
        };
        this.sessionEvents = {
            sessionConnected: () => {
                this.setState({ connected: true });
            },
            sessionDisconnected: () => {
                this.setState({ connected: false });
            }
        };
    }
    onError = (err) => {
        this.setState({ error: `Failed to connect: ${err.message}` });
    }

    render() {
        return (
            <OTSession
                apiKey='46521572'
                sessionId='1_MX40NjUyMTU3Mn5-MTU4MjcyNTkzMTUxNn5ROGVzMjVwa2hRZUN6bWZheTc2WW1IK0V-fg'
                token='T1==cGFydG5lcl9pZD00NjUyMTU3MiZzaWc9OWRjNGFhZTdjZmQyMGEzZWEwODNiNGE2OWU3MTNmZjFjODVkMzJmYzpzZXNzaW9uX2lkPTFfTVg0ME5qVXlNVFUzTW41LU1UVTRNamN5TlRrek1UVXhObjVST0dWek1qVndhMmhSWlVONmJXWmhlVGMyV1cxSUswVi1mZyZjcmVhdGVfdGltZT0xNTgyNzI1OTQzJm5vbmNlPTAuMjQ3MzgxMDQ5NjYwNTUzMDgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU4NTMxNDM0MiZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=='
                eventHandlers={this.sessionEvents}
                onError={this.onError}
            >
                {this.state.error ? <div id="error">{this.state.error}</div> : null}

                <ConnectionStatus connected={this.state.connected} />

                <Publisher />
                <OTStreams>
                    <Subscriber />
                </OTStreams>
            </OTSession>
        );
    }
}

export default preloadScript(VideoComponent);
