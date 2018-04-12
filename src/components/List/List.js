import React, { Component } from 'react';

import Input from '../Input/Input';
import ListItem from './ListItem/ListItem';

import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ''
    };

    this.inputChange = this.inputChange.bind(this);
    this.inputKey = this.inputKey.bind(this);
  }

  inputChange(e) {
    this.setState({
      taskName: e.target.value
    });
  }

  inputKey(e) {
    if (e.key === 'Enter') {
      this.props.addTask(this.state.taskName, this.props.id);
      this.setState({
        taskName: ''
      });
    }
  }

  render() {
    const { taskName } = this.state;
    const { list, tasks, deleteList, id, boardId, deleteTask, changeStatus } = this.props;

    const items = tasks.map(task => (
      <ListItem
        key={task.id}
        {...task}
        deleteItem={() => deleteTask(task.id, id)}
        changeItemStatus={() => {changeStatus(task.id)}}
      />
    ));

    return (
      <div className="List">
        <div className="List__title">
          {list.name}
          <button
            className="List__delete-button"
            onClick={() => {
              deleteList(id, boardId);
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
