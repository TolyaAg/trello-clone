import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import List from './List/List';
import CreateList from './CreateList/CreateList';

import './ActiveBoard.css';

class ActiveBoard extends Component {
  constructor(props) {
    super(props);

    this.addTask = this.addTask.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeItemStatus = this.changeItemStatus.bind(this);
  }

  addTask(listName, taskName) {}

  deleteItem(listName, itemName) {}

  changeItemStatus(listName, itemName) {}

  render() {
    const { lists, addList, deleteList, tasks, boardId } = this.props;

    const listsItem = lists.map(list => (
      <List
        {...list}
        key={list.id}
        tasks={tasks}
        addTask={this.addTask}
        deleteList={deleteList}
        deleteItem={this.deleteItem}
        changeItemStatus={this.changeItemStatus}
      />
    ));

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
