import React, { Component } from "react";
import BoardItem from "./BoardItem";

export default ({
  board,
  boardIndex,
  onMoveRight,
  onMoveLeft,
  onAddBoardItem,
  deleteBoardItem
}) => (
  <div className="board">
    <h1>{board.name}</h1>
    {board.boardItems.map((boardItem, boardItemIndex) => (
      <BoardItem
        key={boardItemIndex}
        boardItem={boardItem}
        boardItemIndex={boardItemIndex}
        canMoveLeft={boardIndex !== 0}
        canMoveRight={boardIndex !== 2}
        onMoveLeft={() => onMoveLeft(boardItemIndex)}
        onMoveRight={() => onMoveRight(boardItemIndex)}
        deleteBoardItem={deleteBoardItem}
      />
    ))}
    <button onClick={onAddBoardItem}>+</button>
  </div>
);
