import dayjs from 'dayjs';
import { IDM } from 'types';

export const makeDateSection = (chatList: IDM[] | undefined) => {
  const section: { [key: string]: IDM[] } = {};
  chatList?.forEach((chat) => {
    const date = dayjs(chat.createdAt).format('YYYY-MM-DD');
    section[date] ? section[date].push(chat) : (section[date] = [chat]);
  });
  return section;
};
