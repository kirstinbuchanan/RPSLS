import { useState } from 'react';
import { play } from '../../helpers/pages/game.ts';
import Head from 'next/head';
import Image from 'next/image';
import '../../styles/Game.module.css';

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
      <div className="container">
        <h1>Rock Paper Scissors Lizard Spock!</h1>
        <button className="button" onClick={() => playGame('rock')}>
          ⛰️
        </button>
        <button onClick={() => playGame('paper')}>🧻</button>
        <button onClick={() => playGame('scissors')}>✂️</button>
        <button onClick={() => playGame('lizard')}>🦎</button>
        <button onClick={() => playGame('spock')}>🖖</button>
      </div>
      <Image src="/RPSLS.png" alt="Rock Paper Scissors Lizard Spock Rules" width="200px" height="200px" />
      {playerGesture && <h2>{playerGesture}</h2>}
      {computerGesture && <h2>{computerGesture}</h2>}
      {result && <h1 className="result">{result}</h1>}
    </>
  );
};
