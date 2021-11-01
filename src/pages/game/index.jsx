import { useReducer, useState } from 'react';
import { play } from '../../helpers/pages/game.ts';
import '../../styles/Game.module.css';

export default () => {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  const [result, setResult] = useState(null);

  const playGame = async (gesture) => {
    const data = await play(gesture);
    const winner = data.result;
    setResult(winner);
    forceUpdate();
  };

  return (
    <>
      <div className="container">
        <button className="button" onClick={() => playGame('rock')}>
          rock
        </button>
        <button onClick={() => playGame('paper')}>paper</button>
        <button onClick={() => playGame('scissors')}>scissors</button>
      </div>
      {result && <h1 className="result">{result}</h1>}
    </>
  );
};
