/* モジュール分割時の変更点
 *  1．import * as React from "react"
 *  2．import Board from "./square"
 *  3．import * as Calc from "../util/calculate-winner"
 *  4. Gameクラスを export default に指定
 */
import * as React from "react"
import Board from "./board"
import * as Calc from "../util/calculate-winner"

// GameのPropsを定義
interface GameProps {
}
// GameのStateを定義
/* tips.
 * history: [
 *   { square: Array<string> }
 * ]
 * のような場合の型定義は以下のようになる
 */
interface GameState {
  history: {squares: Array<string>}[],
  stepNumber: number,
  xIsNext: boolean,
}
export default class Game extends React.Component<GameProps, GameState> {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: (!(step % 2)), // (step % 2) ? false : true
    });
  }

  // このhandleClick(i)をGame->Board->SquareへとPropsで渡していく
  // 関数の型は (i: number) => void
  handleClick(i: number) {
    // historyから現在のstepまでの盤面を取り出す
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    // 表示する最新の盤面を取り出す
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // ゲームが終了している場合は処理をせずreturn
    if(Calc.calculateWinner(squares) || squares[i]) {
      return;
    }
    // 押されたsquareに、現在の手番のマーク(X|O)を入力する
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    // this.stateを更新
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = Calc.calculateWinner(current.squares);

    let status;
    if(winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const moves = history.map((step:{squares: Array<string>}, move:number) => {
      const desc = move ?
        'Move #' + move :
        'Game Start';
      return (
        <li key={move}><a href="#" onClick={() => this.jumpTo(move)}>{desc}</a></li>
      );
    });
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i:number) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
