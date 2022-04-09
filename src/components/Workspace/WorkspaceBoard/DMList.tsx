import React, { useState } from 'react';
import { DMListContainer } from './styles';
import { BsCaretRightFill, BsCaretDownFill } from 'react-icons/bs';

interface ListProp {
  list: string[];
}

export const DMList = ({ list }: ListProp) => {
  const [showItem, setShowItem] = useState(true);

  return (
    <DMListContainer>
      <p onClick={() => setShowItem((prev) => !prev)}>
        {showItem ? <BsCaretDownFill /> : <BsCaretRightFill />}
        Direct Messages
      </p>
      {showItem && (
        <ul className='dm-list'>
          {list.map((item, i) => (
            <li key={i}>o {item}</li>
          ))}
        </ul>
      )}
    </DMListContainer>
  );
};
