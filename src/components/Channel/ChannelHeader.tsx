import React from 'react';
import { useParams } from 'react-router-dom';
import { HeaderContainer } from './styles';

export const ChannelHeader = () => {
  const channel = useParams();

  return <HeaderContainer># {channel.name}</HeaderContainer>;
};
