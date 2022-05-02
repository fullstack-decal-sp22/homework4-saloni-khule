import React from "react";
import './styles/Board.css';

import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div className="board">


    {/* {squares.map((square, i) => (
      
      <Square key={i} value={square} onClick={() => onClick(i)} /> */}
      
      <div className="board-row">
      <Square key={0} value={squares[0]} onClick={() => onClick(0)} />
      <Square key={1} value={squares[1]} onClick={() => onClick(1)} />
      <Square key={2} value={squares[2]} onClick={() => onClick(2)} />

        
        
        
        </div>
      <div className="board-row">
      <Square key={3} value={squares[3]} onClick={() => onClick(3)} />
      <Square key={4} value={squares[4]} onClick={() => onClick(4)} />
      <Square key={5} value={squares[5]} onClick={() => onClick(5)} />




      </div>

      <div className="board-row">
      <Square key={6} value={squares[6]} onClick={() => onClick(6)} />
      <Square key={7} value={squares[7]} onClick={() => onClick(7)} />
      <Square key={8} value={squares[8]} onClick={() => onClick(8)} />
      </div>






    
  </div>
);

export default Board;

