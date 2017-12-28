import React, { Component } from 'react';

import './Input.css'

export default class Input extends Component {

    componentDidMount() {
        this.textInput.focus()
    }

    render() {
        const {className} = this.props;
        return (
            <input 
                size="1"
                className={`Input ${className}`}
                type="text"
                ref={input => this.textInput = input}
                onBlur={this.props.onBlur}
                value={this.props.value}
                onChange={this.props.onChange}
                onKeyPress={this.props.onKeyPress}/>
        )
    }
}