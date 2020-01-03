import React, { Component } from "react";
import "./App.css";
import Board from "./Board";

const DIRECTION_LEFT = -1;
const DIRECTION_RIGHT = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [
        {
          name: "board1",
          boardItems: []
        },
        {
          name: "board2",
          boardItems: []
        },
        {
          name: "board3",
          boardItems: []
        }
      ]
    };
  }

  handleAdd = boardIndex => {
    const title = window.prompt("what's the title?");
    const desc = window.prompt("what's the description?");
    if (!title) return;
    if (!desc) return;
    const boardItem = { title, desc };
    this.setState(prevState => {
      const { boards } = this.state;
      boards[boardIndex].boardItems.push(boardItem);
      return { boards };
    });
  };

  handleMove = (boardIndex, boardItemIndex, direction) => {
    this.setState(prevState => {
      const { boards } = prevState; // object destructuring, array destructuring

      const [boardItem] = boards[boardIndex].boardItems.splice(
        boardItemIndex,
        1
      );
      boards[boardIndex + direction].boardItems.push(boardItem);
      return { boards };
    });
  };

  delete = (boardIndex, boardItemIndex) => {
    this.setState(() => {
      const { boards } = this.state;
      boards[boardIndex].boardItems.splice(boardItemIndex, 1);
      return { boards };
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.boards.map((board, boardIndex, boardItemIndex) => (
          <Board
            board={board}
            boardIndex={boardIndex}
            key={boardIndex}
            onMoveLeft={boardItemIndex =>
              this.handleMove(boardIndex, boardItemIndex, DIRECTION_LEFT)
            }
            onMoveRight={boardItemIndex =>
              this.handleMove(boardIndex, boardItemIndex, DIRECTION_RIGHT)
            }
            onAddBoardItem={() => this.handleAdd(boardIndex)}
            deleteBoardItem={() => this.delete(boardIndex, boardItemIndex)}
          />
        ))}
      </div>
    );
  }
}

export default App;
