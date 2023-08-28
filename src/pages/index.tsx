import { useEffect, useState } from 'react';
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

  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  

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
  const yuubaku = () => {
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        if (bombMap[y][x] === 1) {
          board[y][x] = 11;
        }
      }
    }
  };
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (userInputs[y][x] === 1) {
        if (bombMap[y][x] === 1) {
          board[y][x] = 11;
          yuubaku();
        } else {
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
  const onClickR = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, x: number, y: number) => {
    event.preventDefault();
    if (board[y][x] === 11 || board[y][x] === 10 || board[y][x] === 9 || board[y][x] === -1) {
      switch (userInputs[y][x]) {
        case 0:
          updatedUserInput[y][x] = 2;
          board[y][x] = 9;
          break;
        case 1:
          break;
        case 2:
          updatedUserInput[y][x] = 3;
          board[y][x] = 10;
          break;
        case 3:
          updatedUserInput[y][x] = 0;
          board[y][x] = -1;
          break;
      }
      setUserInputs(updatedUserInput);
    }
  };
  const isPlayed = userInputs.flat().filter((input) => input === 1).length === 0;
  const isFailure = userInputs.some((row, y) =>
    row.some((input, x) => input === 1 && bombMap[y][x] === 1)
  );

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    if(isFailure) {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying]);


  const onClick = (x: number, y: number) => {
    console.log(x, y);
    updatedUserInput[y][x] = 1;
    setUserInputs(updatedUserInput);

    if (!isPlaying) {
      setIsPlaying(true);
    }

    if (isPlayed) {
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
  const reset = () => {
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        updatedUserInput[y][x] = 0;
        newBombMap[y][x] = 0;
        board[y][x] = -1;
      }
    }
    setUserInputs(updatedUserInput);
    setBombMap(newBombMap);
  };
  return (
    <div className={styles.container}>
      <button
        className={styles.smile}
        style={{ backgroundPositionX: -12 * 30 + 30 }}
        onClick={() => reset()}
      />
      <div className={styles.timer}>{timer}</div>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div
              className={styles.cell}
              key={`${x}-${y}`}
              onClick={() => onClick(x, y)}
              onContextMenu={(e) => onClickR(e, x, y)}
            >
              {color === 11 && <div className={styles.bom} />}
              {color === -1 && <div className={styles.cell1} />}
              {color > 0 && color < 11 && (
                <div className={styles.icon} style={{ backgroundPositionX: 30 * -color + 30 }} />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Home;
