import { useParams } from 'react-router-dom';
import { HeaderContainer, Title } from './styles';
import { GoChevronDown } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import gravatar from 'gravatar';
import { IUser } from 'types';

interface HeaderProp {
  member?: IUser;
}

export const ChatHeader = ({ member }: HeaderProp) => {
  const params = useParams();
  const isDM = !!member;
  const name = isDM ? member?.nickname : params.name;
  const email = member?.email as string;

  return (
    <HeaderContainer>
      <Title>
        {isDM ? <img src={gravatar.url(email, { s: '24px', d: 'retro' })} alt={name} /> : '# '}
        {name}
        <GoChevronDown />
      </Title>
      {isDM && <BsTelephone />}
    </HeaderContainer>
  );
};
