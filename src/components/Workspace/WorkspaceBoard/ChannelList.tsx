import React, { useState } from 'react';
import { ChannelListContainer } from './styles';
import { BsCaretRightFill, BsCaretDownFill } from 'react-icons/bs';

interface ListProp {
  list: string[];
}

export const ChannelList = ({ list }: ListProp) => {
  const [showItem, setShowItem] = useState(true);
  return (
    <ChannelListContainer>
      <p onClick={() => setShowItem((prev) => !prev)}>
        {showItem ? <BsCaretDownFill /> : <BsCaretRightFill />}
        Channels
      </p>
      {showItem && (
        <ul className='channel-list'>
          {list.map((item, i) => (
            <li key={i}># {item}</li>
          ))}
        </ul>
      )}
    </ChannelListContainer>
  );
};
