import React, { Component } from 'react';

import Input from '../../Input/Input';
import ListItem from './ListItem/ListItem';

import './List.css';

class List extends Component {
  constructor() {
    super();
    this.state = {
      taskName: ''
    };

    this.inputChange = this.inputChange.bind(this);
    this.inputKey = this.inputKey.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.changeItemStatus = this.changeItemStatus.bind(this);
  }

  inputChange(e) {
    this.setState({
      taskName: e.target.value
    });
  }

  inputKey(e) {
    if (e.key === 'Enter') {
      this.props.addTask(this.props.name, this.state.taskName);
      this.setState({
        taskName: ''
      });
    }
  }

  deleteItem(itemName) {
    this.props.deleteItem(this.props.name, itemName);
  }

  changeItemStatus(itemName) {
    this.props.changeItemStatus(this.props.name, itemName);
  }

  render() {
    const { taskName } = this.state;
    const { name, tasks, deleteList, id } = this.props;
    const items = tasks.map(task => (
      <ListItem
        key={task.id}
        {...task}
        deleteItem={this.deleteItem}
        changeItemStatus={this.changeItemStatus}
      />
    ));
    return (
      <div className="List">
        <div className="List__title">
          {name}
          <button
            className="List__delete-button"
            onClick={e => {
              deleteList(id);
            }}
          >
            +
          </button>
        </div>
        <hr width="100%" />
        <Input
          className="List__input"
          value={taskName}
          onChange={this.inputChange}
          onKeyPress={this.inputKey}
        />
        {items}
      </div>
    );
  }
}

export default List;
