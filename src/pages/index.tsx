import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  // 0 -> 未クリック
  // 1 -> 左クリック
  // 2 -> はてな
  // 3 -> 旗

  const [userInputs, setUserInputs] = useState<(0 | 1 | 2 | 3)[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const directions = [
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
  ];

  const bombCount = 10;
  // 0 -> ボムなし
  // 1 -> ボムあり

  const [bombMap, setBombMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  //const board: number[][] = [];
  //let zeroList: { x: number; y: number }[]
  //for () {
  //zeroList = // board + directions + userInputs + bombMap
  //}
  //let openedCount: number
  //for () {
  //openedCount = // board
  //}
  //const isSuccess = // openedCount + bombCount
  //let isFailure: boolean
  //for () {
  //isFailure = // userInputs + bombMap
  //}
  //let isStarted: boolean
  //for () {
  //isStarted = // userInputs
  //}

  const onClick = (x: number, y: number) => {
    console.log(x, y);
    const newMap: number[][] = JSON.parse(JSON.stringify(userInputs));

    const updatedUserInput = [...userInputs];
    updatedUserInput[y][x] = 1;
    setUserInputs(updatedUserInput);

    if (isPlayed) {
      // 爆弾の設置
      for (let i = 0; i < bombCount; i++) {
        let placed = false;
        while (!placed) {
          const newY = Math.floor(Math.random() * 9);
          const newX = Math.floor(Math.random() * 9);
          if (bombMap[newY][newX] === 0) {
            bombMap[newY][newX] = 1;
            placed = true;
          }
        }
      }
    }
    console.log('bombMap');
    console.table(bombMap);
    console.log('boardMap');
    console.table(board);
  };
  //再帰関数
  //const addZeroAroundZero = (hoge: fuga) => ... // 再帰関数
  //const clickStone = (x: number, y: number) => ...
  //const reset = () => ...

  const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));
  const isPlayed = userInputs.flat().filter((input) => input === 1).length === 1;
  const isFailure = userInputs.some((row, y) =>
    row.some((input, x) => input === 1 && bombMap[y][x] === 1)
  );
  // -1 -> 石
  // 0 -> 画像なしセル
  // 1~8 -> 数字セル
  // 9 -> 石＋はてな
  // 10 -> 石＋旗
  // 11 -> ボムセル
  const board: number[][] = [];

  // ボードを初期化（-1）する
  for (let y = 0; y < 9; y++) {
    const row: number[] = [];
    for (let x = 0; x < 9; x++) {
      if (userInputs[y][x] === 1) {
        //クリックされている場合は0に変更する
        row.push(0);
      } else {
        row.push(-1);
      }
    }
    board.push(row);
  }

  // ボムの位置情報をもとにボードを更新する
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (userInputs[y][x] === 1) {
        // ユーザーがクリックしたセル
        if (bombMap[y][x] === 1) {
          // ボムがあるセル
          board[y][x] = 11;
        } else {
          // ボムがないセル
          let count = 0;
          for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < 9 && ny >= 0 && ny < 9 && bombMap[ny][nx] === 1) {
              count++;
            }
          }
          board[y][x] = count;
        }
      } else if (userInputs[y][x] === 2) {
        board[y][x] = 9;
      } else if (userInputs[y][x] === 3) {
        board[y][x] = 10;
      } else {
        //userInputs[y][x] === 0
        // ユーザーがクリックしていないセル
        if (bombMap[y][x] === 0) {
          // ボムがあるセル
          board[y][x] = -1;
        } //else {
        //   // ボムがないセル
        //   board[y][x] = 0;
        // }
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {userInputs.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => onClick(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone}
                  //style={{ background: color === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Home;
