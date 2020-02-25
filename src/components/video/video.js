// VideoComponent.js

import React from 'react';
import { OTSession, OTStreams, preloadScript } from 'opentok-react';
import ConnectionStatus from './ConnectionStatus';
import Publisher from './Publisher';
import Subscriber from './Subscriber';

class VideoComponent extends React.Component {
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
                apiKey='46520712'
                sessionId='1_MX40NjUyMDcxMn5-MTU4MjU5OTQ5NTk3N34wSDJTK2c1SmJsZWIxRmpxczJTb2QvZXl-fg'
                token='T1==cGFydG5lcl9pZD00NjUyMDcxMiZzaWc9YzVkYTU3MjZiNjNlMzcyYTU3MGYyNDI4MjZhYTI3ZGM5NzcxZmRkYzpzZXNzaW9uX2lkPTFfTVg0ME5qVXlNRGN4TW41LU1UVTRNalU1T1RRNU5UazNOMzR3U0RKVEsyYzFTbUpzWldJeFJtcHhjekpUYjJRdlpYbC1mZyZjcmVhdGVfdGltZT0xNTgyNTk5NTA5Jm5vbmNlPTAuNjExNTYwNTQxMDg2NTEzJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE1ODI2MjExMDkmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0='
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
