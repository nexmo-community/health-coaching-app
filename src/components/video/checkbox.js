import { h, Component } from 'preact';
import { uniqueId } from "lodash";

class CheckBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: uniqueId("Checkbox")
        };
    }

    onChange = e => {
        const checked = e.currentTarget.checked;
        if (checked !== this.props.value) {
            this.props.onChange(checked);
        }
    }

    render() {
        return <div>
            <label for={this.id}>{this.props.label}</label>
            <input id={this.id} type="checkbox" checked={this.checked} onChange={this.onChange} />
        </div>
    }
}

export default CheckBox;
