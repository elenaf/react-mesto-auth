import React from "react";
import Popup from "./Popup";
import Tooltip from "./Tooltip";

class ErrorTooltip extends React.Component {

    render() {
        return (
            <Popup isOpen={ this.props.isOpen } name={ this.props.name } onClose={ this.props.onClose }>
                <Tooltip message={this.props.registrationResult}/>
           </Popup>
        )
    }
}

export default ErrorTooltip;