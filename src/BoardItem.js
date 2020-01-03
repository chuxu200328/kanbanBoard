import React, { Component } from "react";

export default ({
  boardItem,
  canMoveLeft,
  canMoveRight,
  onMoveLeft,
  onMoveRight,
  deleteBoardItem
}) => (
  <div className="boardItem">
    {canMoveLeft && <button onClick={onMoveLeft}>{"<"}</button>}
    title is :<span className="title">{boardItem.title}</span>description is :
    <span className="title">{boardItem.desc}</span>
    {canMoveRight && <button onClick={onMoveRight}>{">"}</button>}
    <button onClick={deleteBoardItem}>X</button>
  </div>
);
