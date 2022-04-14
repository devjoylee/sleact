import React, { useState } from 'react';
import { DMListContainer } from './styles';
import { BsCaretRightFill, BsCaretDownFill } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { fetcher } from 'utils';
import useSWR from 'swr';
import { IUserWithOnline } from 'types';

export const DMList = () => {
  const [showItem, setShowItem] = useState(true);
  const { workspace, id } = useParams();
  const navigate = useNavigate();

  const { data: memberList } = useSWR<IUserWithOnline[]>(
    `/api/workspaces/${workspace}/members`,
    fetcher
  );

  const handleClick = (id: number) => {
    navigate(`dm/${id}`);
  };

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
              className={member.id === Number(id) ? 'active' : ''}
            >
              o {member.nickname}
            </li>
          ))}
        </ul>
      )}
    </DMListContainer>
  );
};
