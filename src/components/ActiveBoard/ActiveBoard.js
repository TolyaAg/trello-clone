import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Boards } from '../../api'

import List from './List/List'
import CreateList from './CreateList/CreateList'

import './ActiveBoard.css'

class ActiveBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boardId: this.props.match.params.id,
      lists: Boards().getLists(this.props.match.params.id)
    }

    this.addList = this.addList.bind(this)
    this.addTask = this.addTask.bind(this)
    this.deleteList = this.deleteList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.changeItemStatus = this.changeItemStatus.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  updateState(boardId) {
    this.setState({
      lists: Boards().getLists(boardId)
    })
  }

  addList(listName) {
    const { boardId } = this.state
    Boards().addList(boardId, listName)
    this.updateState(boardId)
  }

  addTask(listName, taskName) {
    const { boardId } = this.state
    Boards().addTask(boardId, listName, taskName)
    this.updateState(boardId)
  }

  deleteList(listName) {
    const { boardId } = this.state
    Boards().deleteList(boardId, listName)
    this.updateState(boardId)
  }

  deleteItem(listName, itemName) {
    const { boardId } = this.state
    Boards().deleteItem(boardId, listName, itemName)
    this.updateState(boardId)
  }

  changeItemStatus(listName, itemName) {
    const { boardId } = this.state
    Boards().changeItemStatus(boardId, listName, itemName)
    this.updateState(boardId)
  }

  render() {
    const { lists } = this.state

    const listsItem = lists.map(list => (
      <List
        {...list}
        key={list.name}
        addTask={this.addTask}
        deleteList={this.deleteList}
        deleteItem={this.deleteItem}
        changeItemStatus={this.changeItemStatus}
      />
    ))

    return (
      <div className="ActiveBoard">
        <Link to="/">
          <button className="ActiveBoard__button-back">Back</button>
        </Link>
        {listsItem}
        <CreateList addNewList={this.addList} />
      </div>
    )
  }
}

export default ActiveBoard
