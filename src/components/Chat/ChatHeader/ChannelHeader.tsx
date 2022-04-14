import React from 'react';
import { useParams } from 'react-router-dom';
import { HeaderContainer, Title } from './styles';
import { GoChevronDown } from 'react-icons/go';

export const ChannelHeader = () => {
  const channel = useParams();

  return (
    <HeaderContainer>
      <Title>
        # {channel.name} <GoChevronDown />
      </Title>
    </HeaderContainer>
  );
};
