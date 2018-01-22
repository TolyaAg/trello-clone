import React, { Component } from 'react';

import './Board.css';

class Board extends Component {
    constructor(props) {
        super(props)

        this.deleteBoard = this.deleteBoard.bind(this)
    }

    deleteBoard(e) {
        e.preventDefault();
        this.props.deleteBoard(this.props.name);
    }

    render() {
        const { name, className } = this.props
        return (
            <div className={`Board ${className}`}>
                {name}
                <button className="Board__delete-button" onClick={this.deleteBoard}>+</button>
            </div>
        )
    }
}

export default Board;