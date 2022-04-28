import React from 'react';
import { HeaderContainer, Title } from './styles';
import { GoChevronDown } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import gravatar from 'gravatar';
import { IUser } from 'types';

interface DMHeaderProp {
  member: IUser | undefined;
}

export const DMHeader = ({ member }: DMHeaderProp) => {
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
