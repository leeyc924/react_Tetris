import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import usePlayer from '../hooks/usePlayer';
import useStage from '../hooks/useStage';

const Main: NextPage = () => {
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);

  const handlePlay = () => {

  };

  return (
    <Grid>
      <GameBoard />
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
  display: grid;
  grid-template-columns: 320px 200px;
  grid-template-rows: 500px;
`;

const GameBoard = styled.div`

  border: solid 2px;
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
  margin-top: auto;
  cursor: pointer;
`;

export default Main;
