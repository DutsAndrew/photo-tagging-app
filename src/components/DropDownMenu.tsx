import React, { FC } from "react";
import "../styles/DropDownMenu.css";
import type { DropDownMenuProps } from "../types/interfaces";
import uniqid from 'uniqid';
import styled from 'styled-components'

const DropDownForm = styled.form`
  position: absolute;
  display: flex;
  flex: auto;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  padding: 0.75%;
  background-color: rgb(235, 38, 32, 0.95);
  color: white;
`;

const CharacterList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
  font-size: 1.25em;
  font-weight: bold;
  letter-spacing: 0.05em;
`;

const CharacterSelection = styled.li`
  &:hover {
    background-color: white;
    color: rgb(235, 38, 32, 0.95);
    cursor: pointer;
  }
`;

const DropDownMenu: FC<DropDownMenuProps> = (props): JSX.Element => {

  const { characterList, handleDropDownMenuSelection, characterSelectionMenu } = props;

  const xLocation = characterSelectionMenu.x;
  const yLocation = characterSelectionMenu.y;

  return (
    <DropDownForm style={{left: `${xLocation}px`, top: `${yLocation}px`}} >
        <CharacterList>
          {Array.isArray(characterList) && characterList.map((character) => {
            return <CharacterSelection key={uniqid()}>{character}</CharacterSelection>
          })}
        </CharacterList>
    </DropDownForm>
  )
};

export default DropDownMenu;