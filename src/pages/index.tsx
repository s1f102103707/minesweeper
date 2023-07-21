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

  const updatedUserInput: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));
  const newBombMap: number[][] = JSON.parse(JSON.stringify(bombMap));
  //爆弾の数を数える
  const count = (x: number, y: number): number => {
    let count = 0;
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < 9 && ny >= 0 && ny < 9 && bombMap[ny][nx] === 1) {
        count++;
      }
    }
    return count;
  };

  const chein = (x: number, y: number) => {
    board[y][x] = count(x, y);
    if (count(x, y) === 0) {
      for (const [dx, dy] of directions) {
        const mx = x + dx;
        const my = y + dy;
        if (mx >= 0 && mx < 9 && my >= 0 && my < 9) {
          if (board[my][mx] === -1) {
            chein(mx, my);
          }
        }
      }
    }
  };

  // const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));
  const isPlayed = userInputs.flat().filter((input) => input === 1).length === 0;
  const isFailure = userInputs.some((row, y) =>
    row.some((input, x) => input === 1 && bombMap[y][x] === 1)
  );
  //const isWon =顔が出るようにする

  // -1 -> 石
  // 0 -> 画像なしセル
  // 1~8 -> 数字セル
  // 9 -> 石＋はてな
  // 10 -> 石＋旗
  // 11 -> ボムセル
  const board: number[][] = [
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  ];

  // ボムの位置情報をもとにボードを更新する
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (userInputs[y][x] === 1) {
        // ユーザーがクリックしたセル
        if (bombMap[y][x] === 1) {
          // ボムがあるセル
          board[y][x] = 11;
        } else {
          //再帰いれる
          // ボムがないセル
          chein(x, y);
        }
      } else if (userInputs[y][x] === 2) {
        board[y][x] = 9;
      } else if (userInputs[y][x] === 3) {
        board[y][x] = 10;
      }
    }
  }
  console.log('bombMap');
  console.table(bombMap);
  console.log('board');
  console.table(board);
  const onClickR = (x: number, y: number) => {
    document.getElementsByTagName('html')[0].oncontextmenu = () => false;
    // event.preventDefault(); // デフォルトの右クリックメニューを無効にする
    switch (userInputs[y][x]) {
      case 0:
        // 未クリックからはてなへ
        updatedUserInput[y][x] = 2;
        break;
      case 1:
        // 左クリックは無視する（変更無し）
        break;
      case 2:
        // はてなから旗へ
        updatedUserInput[y][x] = 3;
        break;
      case 3:
        // 旗から未クリックへ
        updatedUserInput[y][x] = 0;
        break;
    }
    setUserInputs(updatedUserInput);
    // 右クリックしたセルのboard値を変更する
    switch (board[y][x]) {
      case -1:
        board[y][x] = 9;
        break;
      case 9:
        board[y][x] = 10;
        break;
      case 10:
        board[y][x] = -1;
        break;
    }
  };
  const onClick = (x: number, y: number) => {
    console.log(x, y);
    updatedUserInput[y][x] = 1;
    setUserInputs(updatedUserInput);

    if (isPlayed) {
      // 爆弾の設置
      for (let i = 0; i < bombCount; i++) {
        let placed = false;
        while (!placed) {
          const newY = Math.floor(Math.random() * 9);
          const newX = Math.floor(Math.random() * 9);
          if (newBombMap[newY][newX] === 0 && !(newX === x && newY === y)) {
            newBombMap[newY][newX] = 1;
            placed = true;
          }
        }
      }
      console.log('newbombmap');
      console.table(newBombMap);
      setBombMap(newBombMap);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) =>
            color === -1 || color === 9 || color === 10 ? (
              <div
                className={styles.cell1}
                key={`${x}-${y}`}
                onClick={() => onClick(x, y)}
                onContextMenu={() => onClickR(x, y)}
              />
            ) : (
              <div className={styles.cell} key={`${x}-${y}`} onClick={() => onClick(x, y)}>
                {color === 11 && <div className={styles.bom} />}

                {color > 0 && color < 11 && (
                  <div className={styles.icon} style={{ backgroundPositionX: 30 * -color + 30 }} />
                )}
                {color > -2 && color < 1 && (
                  <div className={styles.icon} style={{ backgroundPositionY: -30 }} />
                )}
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};
export default Home;
