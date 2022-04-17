import React, { useEffect, useState } from 'react';
import { DMListContainer } from './styles';
import { BsCaretRightFill, BsCaretDownFill } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { fetcher } from 'utils';
import useSWR from 'swr';
import { IUserWithOnline } from 'types';
import { useSocket } from 'hooks';

export const DMList = () => {
  const [showItem, setShowItem] = useState(true);
  const [onlineList, setOnlineList] = useState<number[]>([]);

  const { workspace, id } = useParams();
  const [socket] = useSocket(workspace);
  const navigate = useNavigate();

  const { data: memberList } = useSWR<IUserWithOnline[]>(
    `/api/workspaces/${workspace}/members`,
    fetcher
  );

  const handleClick = (id: number) => {
    navigate(`dm/${id}`);
  };

  const isOnline = (id: number) => onlineList.includes(id);

  useEffect(() => {
    console.log('DMList: entered workspace :', workspace);
    setOnlineList([]);
  }, [workspace]);

  useEffect(() => {
    socket?.on('onlineList', (data: number[]) => {
      setOnlineList(data);
    });
    return () => {
      socket?.off('onlineList');
    };
  }, [socket]);

  return (
    <DMListContainer>
      <p onClick={() => setShowItem((prev) => !prev)}>
        {showItem ? <BsCaretDownFill /> : <BsCaretRightFill />}
        Direct Messages
      </p>
      {showItem && (
        <ul className='dm-list'>
          {memberList?.map((member) => (
            <li
              key={member.id}
              onClick={() => handleClick(member.id)}
              className={`user-state ${member.id === Number(id) ? 'active' : ''}`}
            >
              <i className={isOnline(member.id) ? 'online' : 'offline'}></i> {member.nickname}
            </li>
          ))}
        </ul>
      )}
    </DMListContainer>
  );
};
