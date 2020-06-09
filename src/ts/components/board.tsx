/* モジュール分割時の変更点
 *  1．import * as React from "react"
 *  2．import Square from "./square"
 *  3. Boardクラスを export default に指定
 */
import * as React from "react"
import Square from "./square"

// BoardのPropsを定義
interface BoardProps {
  squares: Array<string>,
  onClick: (i:number) => void,
}
// BoardのStateを定義
interface BoardState {
}
export default class Board extends React.Component<BoardProps, BoardState> {
  renderSquare(i:number) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}