import { h, Component } from 'preact';

class ConnectionStatus extends Component {
    render() {
        let status = this.props.connected ? "Connected" : "Disconnected";
        return (
            <div className="connectionStatus">
                <strong>Status:</strong> {status}
            </div>
        );
    }
}
export default ConnectionStatus;
