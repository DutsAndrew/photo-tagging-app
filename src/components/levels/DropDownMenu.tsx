import React, { FC } from "react";
import type { DropDownMenuProps } from "../../types/interfaces";
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

  const { characterList, dropDownMenu, charactersFound } = props;

  const xLocation = dropDownMenu.mouseX;
  const yLocation = dropDownMenu.mouseY;

  return (
    <DropDownForm style={{left: `${xLocation}px`, top: `${yLocation}px`}} >
        <CharacterList>
          {Array.isArray(characterList) && characterList.map((character) => {
            if (!charactersFound.includes(character)) {
              return <CharacterSelection id={character} key={uniqid()}>{character}</CharacterSelection>
            }
          })}
        </CharacterList>
    </DropDownForm>
  )
};

export default DropDownMenu;