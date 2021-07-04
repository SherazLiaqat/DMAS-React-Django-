import React, { useState, useEffect } from 'react';
import {Profileitem} from './Profileitem';
import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdowns() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {Profileitem.map((items, index) => {
          return (
            <li key={index}>
              <Link
                className={items.cName}
                to={items.path}
                onClick={() => setClick(false)}
              >
                {items.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdowns;