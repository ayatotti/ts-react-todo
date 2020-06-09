/* app.jsからの変更点
 *  1．拡張子の変更 .js -> .tsx
 *  2. import文の追加
 *      import * as React from "react";
 *      import * as ReactDOM from "react-dom";
 *  3. 各コンポーネントのProsのinterfaceを定義
 *  4. 各コンポーネントのStateのinterfaceを定義
 *  5. 引数に型を追加
 *  6. モジュール分割
 */
import * as React from "react"
import * as ReactDOM from "react-dom"
import Game from "./components/game"

ReactDOM.render(
  <Game />,
  document.getElementById('container')
);

