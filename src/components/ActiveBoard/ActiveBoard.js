import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Boards } from '../../api';

import List from '../List/List';
import CreateList from '../CreateList/CreateList'

import './ActiveBoard.css';

class ActiveBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: Boards().getLists(props.match.params.name)
        }

        this.addList = this.addList.bind(this)
        this.addTask = this.addTask.bind(this)
        this.deleteList = this.deleteList.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.changeItemStatus = this.changeItemStatus.bind(this)
    }

    addList(listName) {
        const boardName = this.props.match.params.name;
        Boards().addList(boardName, listName)
        this.setState({
            lists: Boards().getLists(boardName)
        })
    }

    addTask(listName, taskName) {
        const boardName = this.props.match.params.name;
        Boards().addTask(boardName, listName, taskName)
        this.setState({
            lists: Boards().getLists(boardName)
        })
    }

    deleteList(listName) {
        const boardName = this.props.match.params.name;
        Boards().deleteList(boardName, listName)
        this.setState({
            lists: Boards().getLists(boardName)
        })
    }

    deleteItem(listName, itemName) {
        const boardName = this.props.match.params.name;
        Boards().deleteItem(boardName, listName, itemName)
        this.setState({
            lists: Boards().getLists(boardName)
        })
    }

    changeItemStatus(listName, itemName) {
        const boardName = this.props.match.params.name;
        Boards().changeItemStatus(boardName, listName, itemName)
        this.setState({
            lists: Boards().getLists(boardName)
        })
    }

    render() {
        const { lists } = this.state

        const listsItem = lists.map((list) => (
            <List key={list.name} {...list} addTask={this.addTask} deleteList={this.deleteList} deleteItem={this.deleteItem} changeItemStatus={this.changeItemStatus}/>
        ))

        return (
            <div className="ActiveBoard">
                <Link to='/'><button className="ActiveBoard__button-back">Back</button></Link>
                {listsItem}
                <CreateList addNewList={this.addList}/>
            </div>
        )
    }
};

export default ActiveBoard;