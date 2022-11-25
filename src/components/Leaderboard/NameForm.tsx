import React, { FC } from "react";
import { NameFormProps } from '../../types/interfaces';

const NameForm: FC<NameFormProps> = (props): JSX.Element => {

  const { saveNameToDb } = props;

  return (
    <form className="name-form" onSubmit={saveNameToDb}>
      <legend className="name-legend">Want to join our leaderboard? Enter your name:</legend>
      <input id="name-input" placeholder="Waldo" className="name-form-input" ></input>
      <button type="submit" className="name-form-submit-button">Submit</button>
    </form>
  )
};

export default NameForm;