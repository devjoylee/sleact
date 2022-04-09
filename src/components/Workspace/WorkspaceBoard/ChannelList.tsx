import React, { useState } from 'react';
import { ChannelListContainer } from './styles';
import { BsCaretRightFill, BsCaretDownFill } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';

interface ListProp {
  channels: string[];
}

export const ChannelList = ({ channels }: ListProp) => {
  const [showItem, setShowItem] = useState(true);
  const navigate = useNavigate();
  const current = useParams();

  const handleClick = (item: string) => {
    navigate(`channel/${item}`);
  };

  return (
    <ChannelListContainer>
      <p onClick={() => setShowItem((prev) => !prev)}>
        {showItem ? <BsCaretDownFill /> : <BsCaretRightFill />}
        Channels
      </p>
      {showItem && (
        <ul className='channel-list'>
          {channels.map((item, i) => (
            <li
              key={i}
              onClick={() => handleClick(item)}
              className={item === current.name ? 'active' : ''}
            >
              # {item}
            </li>
          ))}
        </ul>
      )}
    </ChannelListContainer>
  );
};
