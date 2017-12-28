import React, { Component } from 'react';

import Input from '../Input/Input';

import './CreateList.css';

class CreateList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            addList: false,
            listName: ''
        }

        this.handleClick = this.handleClick.bind(this)
        this.cancelAddList = this.cancelAddList.bind(this)
        this.inputChange = this.inputChange.bind(this)
        this.addList = this.addList.bind(this)
        this.inputKey = this.inputKey.bind(this)
    }

    handleClick() {
        this.setState((prevState) => ({
            addList: !prevState.addList
        }))
    }

    cancelAddList() {
        this.setState({
            addList: false
        })
    }

    inputChange(e) {
        this.setState({
            listName: e.target.value
        })
    }

    addList() {
        this.props.addNewList(this.state.listName)
        this.setState({
            addList: false,
            listName: ''
        })
    }

    inputKey(e) {
        if (e.key === 'Enter') {
            this.addList()
        }
    }

    render () {
        const {addList, listName} = this.state;
        const { className } = this.props;
        const buttonClass = addList ? `CreateList__button CreateList__button_active` : `CreateList__button`
        return (
            <div className={`CreateList ${className}`}>
                <button className={buttonClass} onClick={this.handleClick}>Create List</button>
                {addList && 
                    <div className="CreateList__new-board">
                        Enter list name
                        <Input value={listName} onChange={this.inputChange} onKeyPress={this.inputKey} className="CreateList__input"/>
                        <div className="CreateList__buttons-wrapper">
                            <button className="CreateList__button-cancel" onClick={this.cancelAddList}>CANCEL</button>
                            <button className="CreateList__button-create" onClick={this.addList}>CREATE</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default CreateList;