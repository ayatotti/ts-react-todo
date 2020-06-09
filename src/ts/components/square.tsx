/* モジュール分割時の変更点
 *  1．import * as React from "react"
 *  2. Squareクラスを export default に指定
 */
import * as React from "react"

// SquareのPropsを定義
interface SquareProps {
  value: string;
  onClick: () => void;
}
// SquareのStateを定義
interface SquareState {
}
export default class Square extends React.Component<SquareProps, SquareState> {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}