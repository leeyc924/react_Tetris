import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Stage from '../components/Stage';

import usePlayer from '../hooks/usePlayer';
import useStage from '../hooks/useStage';
import useGameStatus from '../hooks/useGameStatus';
import useInterval from '../hooks/useInterval';

import { checkCollision, createStage } from '../util/gameHelpers';

const Main = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);

  console.log('re-render');

  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      // Activate the interval again when user releases down arrow.
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1));
      }
    }
  };

  const startGame = () => {
    // Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      // Also increase speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over!
      if (player.pos.y < 1) {
        console.log('GAME OVER!!!');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    // We don't need to run the interval when we use the arrow down to
    // move the tetromino downwards. So deactivate it for now.
    setDropTime(null);
    drop();
  };

  // This one starts the game
  // Custom hook by Dan Abramov
  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  return (
    <Grid role="button" tabIndex="0" onKeyDown={(e) => move(e)} onKeyUp={keyUp}>
      <Stage stage={stage} />
      <RightColumn>
        {gameOver ? (
          <p>gameOver</p>
        ) : (
          <div>
            <h1>TETRIS</h1>
            <p>
              Score: <span id="score">0</span>
            </p>
            <p>
              Lines: <span id="lines">0</span>
            </p>
            <p>
              Level: <span id="level">0</span>
            </p>
          </div>
        )}
        <PlayButton onClick={() => startGame()}>Play</PlayButton>
      </RightColumn>
    </Grid>
  );
};

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PlayButton = styled.button`
  background-color: #4caf50;
  font-size: 16px;
  padding: 15px 30px;
  cursor: pointer;
`;

export default Main;
