import React, { Component } from 'react'

import Input from '../../Input/Input'

import './CreateBoard.css'

class CreateBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addBoard: false,
      boardName: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.cancelAddBoard = this.cancelAddBoard.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.addBoard = this.addBoard.bind(this)
    this.inputKey = this.inputKey.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      addBoard: !prevState.addBoard
    }))
  }

  cancelAddBoard() {
    this.setState({
      addBoard: false
    })
  }

  inputChange(e) {
    this.setState({
      boardName: e.target.value
    })
  }

  addBoard() {
    this.props.addNewBoard(this.state.boardName)
    this.setState({
      addBoard: false,
      boardName: ''
    })
  }

  inputKey(e) {
    if (e.key === 'Enter') {
      this.addBoard()
    }
  }

  render() {
    const { addBoard, boardName } = this.state
    const { className } = this.props
    const buttonClass = addBoard
      ? `CreateBoard__button CreateBoard__button_active`
      : `CreateBoard__button`
    return (
      <div className={`CreateBoard ${className}`}>
        <button className={buttonClass} onClick={this.handleClick}>
          Create Board
        </button>
        {addBoard && (
          <div className="CreateBoard__new-board">
            Enter board name
            <Input
              value={boardName}
              onChange={this.inputChange}
              onKeyPress={this.inputKey}
              className="CreateBoard__input"
            />
            <div className="CreateBoard__buttons-wrapper">
              <button
                className="CreateBoard__button-cancel"
                onClick={this.cancelAddBoard}
              >
                CANCEL
              </button>
              <button
                className="CreateBoard__button-create"
                onClick={this.addBoard}
              >
                CREATE
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CreateBoard
