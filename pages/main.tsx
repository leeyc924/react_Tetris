import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Stage from '../components/Stage';

import usePlayer from '../hooks/usePlayer';
import useStage from '../hooks/useStage';
import { IStage } from '../models/stage';
import { createStage } from '../util/gameHelpers';


const Main: NextPage = () => {
  const [stage, setStage] = useState<IStage>(createStage());
  console.log('stage', stage);
  const handlePlay = () => {

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
