import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Boards } from '../../api';

import List from './List/List';
import CreateList from './CreateList/CreateList';

import './ActiveBoard.css';

class ActiveBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardId: this.props.match.params.id
    };

    this.addTask = this.addTask.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeItemStatus = this.changeItemStatus.bind(this);
  }

  addTask(listName, taskName) {
    const { boardId } = this.state;
    Boards().addTask(boardId, listName, taskName);
  }

  deleteItem(listName, itemName) {
    const { boardId } = this.state;
    Boards().deleteItem(boardId, listName, itemName);
  }

  changeItemStatus(listName, itemName) {
    const { boardId } = this.state;
    Boards().changeItemStatus(boardId, listName, itemName);
  }

  render() {
    const { lists, addList, deleteList, tasks } = this.props;
    const { boardId } = this.state;

    const listsItem = lists.map(list => {
      if (list.boardId === boardId) {
        return (
          <List
            {...list}
            key={list.id}
            tasks={tasks}
            addTask={this.addTask}
            deleteList={deleteList}
            deleteItem={this.deleteItem}
            changeItemStatus={this.changeItemStatus}
          />
        );
      } else {
        return null;
      }
    });

    return (
      <div className="ActiveBoard">
        <Link to="/">
          <button className="ActiveBoard__button-back">Back</button>
        </Link>
        {listsItem}
        <CreateList addNewList={addList} boardId={boardId} />
      </div>
    );
  }
}

export default ActiveBoard;
