import React from 'react';
import styled from 'styled-components';

import { IStage } from '../models/stage';

import Cell from './Cell';

interface IStageProps extends IStage {
}

interface IStyledStage {
  width: number;
  height: number;
}

const Stage = ({ stage }: IStage) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {/* {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))} */}
  </StyledStage>
);

const StyledStage = styled.div<IStyledStage>`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(25vw / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #111;
`;

export default Stage;
