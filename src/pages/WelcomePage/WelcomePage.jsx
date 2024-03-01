import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
const WelcomePage = () => {
  return (
    <div>
      <h1>PowerPulse</h1>
      <ul>
        <li>
          <Link to="/signup">SignUp page</Link>
        </li>
        <li>
          <svg>
            <use href={`${sprite}#icon-pause-square`}></use>
          </svg>
          <img src="../../assets/sprite.svg#icon-pause-square" alt="" />
          <Link to="/signin">SignIn page</Link>
        </li>
      </ul>
    </div>
  );
};

export default WelcomePage;
