import React, { useEffect, useState } from 'react';
import { DMListContainer } from './styles';
import { BsCaretRightFill, BsCaretDownFill } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { fetcher } from 'utils';
import useSWR from 'swr';
import { IUser, IUserWithOnline } from 'types';
import { useSocket } from 'hooks';

export const DMList = () => {
  const { workspace, id } = useParams();
  const { data: userData } = useSWR<IUser>('/api/users', fetcher);
  const { data: memberData } = useSWR<IUserWithOnline[]>(
    `/api/workspaces/${workspace}/members`,
    fetcher
  );

  const [showItem, setShowItem] = useState(true);
  const [onlineList, setOnlineList] = useState<number[]>([]);

  const [socket] = useSocket(workspace);
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`dm/${id}`);
  };

  const isOnline = (id: number) => onlineList.includes(id);

  useEffect(() => {
    setOnlineList([]);
  }, [workspace]);

  useEffect(() => {
    // online 접속중인 유저값 불러오기
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
          {memberData?.map((member) => (
            <li
              key={member.id}
              onClick={() => handleClick(member.id)}
              className={`user-state ${member.id === Number(id) ? 'active' : ''}`}
            >
              <i className={isOnline(member.id) ? 'online' : 'offline'}></i>
              <span>{member.nickname}</span>
              {member.id === userData?.id && <span> (나)</span>}
            </li>
          ))}
        </ul>
      )}
    </DMListContainer>
  );
};
