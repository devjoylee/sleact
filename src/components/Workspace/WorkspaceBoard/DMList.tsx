import React, { useState } from 'react';
import { DMListContainer } from './styles';
import { BsCaretRightFill, BsCaretDownFill } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';

export const DMList = () => {
  const [dm, setDM] = useState(['Joylee', 'ZeroCho', 'NomadCoder']);
  const [showItem, setShowItem] = useState(true);
  const navigate = useNavigate();
  const current = useParams();

  const handleClick = (name: string) => {
    navigate(`dm/${name}`);
  };

  return (
    <DMListContainer>
      <p onClick={() => setShowItem((prev) => !prev)}>
        {showItem ? <BsCaretDownFill /> : <BsCaretRightFill />}
        Direct Messages
      </p>
      {showItem && (
        <ul className='dm-list'>
          {dm.map((item, i) => (
            <li
              key={i}
              onClick={() => handleClick(item)}
              className={item === current.name ? 'active' : ''}
            >
              o {item}
            </li>
          ))}
        </ul>
      )}
    </DMListContainer>
  );
};
