import React from "react";

class SubmitButton extends React,Component {


    render() {
        renturn (
            <div className="submitButton">
                <button
                className="btn"
                disabled={this.props.disabled}
                onClick={ () => this.props.onClick() }
                >
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default SubmitButton;