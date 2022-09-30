import React from 'react';
import './menu.css';

export default function Menu() {
  return (
    <div className='container__menu'>
        <nav className='nav__menu'>
            <ul className="nav__list">
              <li className="nav__item">
                Remove Filters
              </li>

              <li className="nav__item">
                Filters
              </li>

              <li className="nav__item">
                Create Champ
              </li>
            </ul>
        </nav>
    </div>
  )
}
