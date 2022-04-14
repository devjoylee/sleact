import React, { useState } from 'react';
import { ChannelListContainer } from './styles';
import { BsCaretRightFill, BsCaretDownFill } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { fetcher } from 'utils';
import useSWR from 'swr';
import { IChannel } from 'types';

export const ChannelList = () => {
  const [showItem, setShowItem] = useState(true);
  const { workspace, name: channelName } = useParams();
  const navigate = useNavigate();

  const { data: channelList } = useSWR<IChannel[]>(
    `/api/workspaces/${workspace}/channels`,
    fetcher
  );

  const handleClick = (name: string) => {
    navigate(`channel/${name}`);
  };

  return (
    <ChannelListContainer>
      <p onClick={() => setShowItem((prev) => !prev)}>
        {showItem ? <BsCaretDownFill /> : <BsCaretRightFill />}
        Channels
      </p>
      {showItem && (
        <ul className='channel-list'>
          {channelList?.map((channel) => (
            <li
              key={channel.id}
              onClick={() => handleClick(channel.name)}
              className={channel.name === channelName ? 'active' : ''}
            >
              # {channel.name}
            </li>
          ))}
        </ul>
      )}
    </ChannelListContainer>
  );
};
