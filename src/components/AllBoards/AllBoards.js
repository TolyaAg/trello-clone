import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CreateBoard from '../CreateBoard/CreateBoard';
import Board from '../Board/Board';

import { Boards } from '../../api';

import './AllBoards.css'

class AllBoard extends Component {
    constructor() {
        super()
        this.state = {
          boards: Boards().getBoards()
        }
    
        this.addBoard = this.addBoard.bind(this)
        this.deleteBoard = this.deleteBoard.bind(this)
    }

    addBoard(name) {
        Boards().addBoard(name)

        this.setState({
            boards: Boards().getBoards()
        });
    }

    deleteBoard(name) {
        Boards().deleteBoard(name)

        this.setState({
            boards: Boards().getBoards()
        });
    }

    render() {
        const {boards} = this.state;
        const boardsList = boards.map((board) => 
          <Link to={`/board/${board.name}`} key={board.name} className="AllBoards__board"><Board deleteBoard={this.deleteBoard} {...board}/></Link>
        );
    
        return (
            <div className="AllBoards">
                <CreateBoard className="AllBoards__board" boards={boards} addNewBoard={this.addBoard}/>
                {boardsList}
            </div>
        );
      }
}

export default AllBoard;