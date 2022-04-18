import React from 'react';
import { useParams } from 'react-router-dom';
import { HeaderContainer, Title } from './styles';
import { GoChevronDown } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import useSWR from 'swr';
import { fetcher } from 'utils';
import gravatar from 'gravatar';
import { IUser } from 'types';

export const DMHeader = () => {
  const { workspace, id } = useParams();
  const { data: member } = useSWR<IUser>(`/api/workspaces/${workspace}/users/${id}`, fetcher);

  if (!member) return null;

  return (
    <HeaderContainer>
      <Title>
        <img src={gravatar.url(member.email, { s: '24px', d: 'retro' })} alt={member.nickname} />
        {member.nickname}
        <GoChevronDown />
      </Title>
      <BsTelephone />
    </HeaderContainer>
  );
};
