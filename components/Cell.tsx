import React from 'react';
import styled from 'styled-components';
import { TETROMINOS } from '../util/tetrominos';

interface ICellProps {
  type: any;
}

interface IStyledCell {
  type: any;
  color: any;
}

// React.memo makes sure we only re-render the changed cells
const Cell = ({ type }: ICellProps) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

const StyledCell = styled.div<IStyledCell>`
  width: auto;
  /* border-radius: 5px; */
  background: rgba(${(props) => props.color}, 0.8);
  border: ${(props) => (props.type === 0 ? '0px solid' : '4px solid')};
  border-bottom-color: rgba(${(props) => props.color}, 0.1);
  border-right-color: rgba(${(props) => props.color}, 1);
  border-top-color: rgba(${(props) => props.color}, 1);
  border-left-color: rgba(${(props) => props.color}, 0.3);
`;

export default React.memo(Cell);
