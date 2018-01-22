import React, { Component } from 'react';

import './ListItem.css';

class ListItem extends Component {

    constructor(props) {
        super(props)

        this.deleteItem = this.deleteItem.bind(this)
        this.changeItemStatus = this.changeItemStatus.bind(this)
    }

    deleteItem() {
        this.props.deleteItem(this.props.name)
    }

    changeItemStatus() {
        this.props.changeItemStatus(this.props.name)
    }

    render() {
        const { name, complited } = this.props;
        const className = complited ? 'ListItem ListItem_done' : 'ListItem ListItem_active'
        return (
            <div className={className} onClick={this.changeItemStatus}>
                {name}
                <button className="ListItem__delete-button" onClick={this.deleteItem}>+</button>
            </div>
        )
    }
}

export default ListItem