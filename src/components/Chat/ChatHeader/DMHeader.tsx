import React from 'react';
import { useParams } from 'react-router-dom';
import { HeaderContainer, Title } from 'components/Channel/styles';
import { GoChevronDown } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';

export const DMHeader = () => {
  const dm = useParams();

  return (
    <HeaderContainer>
      <Title>
        <img
          src='https://s3-ap-northeast-1.amazonaws.com/ojuz-attach/profile/images/GioChkhaidze'
          alt='profile'
        />
        {dm.name}
        <GoChevronDown />
      </Title>
      <BsTelephone />
    </HeaderContainer>
  );
};
