import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Stage from '../components/Stage';

import usePlayer from '../hooks/usePlayer';
import useStage from '../hooks/useStage';
import useGameStatus from '../hooks/useGameStatus';
import useInterval from '../hooks/useInterval';

import { createStage } from '../util/gameHelpers';

const Main = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const handlePlay = () => {
      // Reset everything
      setStage(createStage());
      setDropTime(1000);
      resetPlayer();
      setScore(0);
      setLevel(0);
      setRows(0);
      setGameOver(false);
  };

  return (
    <Grid>
      <Stage stage={stage} />
      <RightColumn>
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
        <PlayButton onClick={() => handlePlay()}>Play</PlayButton>
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
