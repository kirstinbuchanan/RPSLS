import { useState } from 'react';
import { play } from '../../helpers/pages/game.ts';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Game.module.css';

export default () => {
  const [result, setResult] = useState(null);
  const [computerGesture, setComputerGesture] = useState(null);
  const [playerGesture, setPlayerGesture] = useState(null);

  const playGame = async (gesture) => {
    const data = await play(gesture);
    const winner = data.result.result;
    setPlayerGesture(gesture);
    setComputerGesture(data.result.computerGesture);
    setResult(winner);
  };

  return (
    <>
      <Head>
        <title> ⛰️ - 🧻 - ✂️ - 🦎 - 🖖</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.heading}>Rock Paper Scissors Lizard Spock!</h1>
        <button className={styles.button} onClick={() => playGame('rock')}>
          ⛰️
        </button>
        <button className={styles.button} onClick={() => playGame('paper')}>
          🧻
        </button>
        <button className={styles.button} onClick={() => playGame('scissors')}>
          ✂️
        </button>
        <button className={styles.button} onClick={() => playGame('lizard')}>
          🦎
        </button>
        <button className={styles.button} onClick={() => playGame('spock')}>
          🖖
        </button>
        <Image src="/RPSLS.png" alt="RPSLS Rules" width="200px" height="200px" />
        <div>
          {playerGesture && <h2>{playerGesture}</h2>}
          {computerGesture && <h2>{computerGesture}</h2>}
          {result && <h1 className={styles.result}>{result}</h1>}
        </div>
      </div>
    </>
  );
};
