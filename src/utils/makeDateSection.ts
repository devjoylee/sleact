import dayjs from 'dayjs';
import { ChatType } from 'types';

export const makeDateSection = (chatList: ChatType[]) => {
  const section: { [key: string]: ChatType[] } = {};
  chatList?.forEach((chat) => {
    const date = dayjs(chat.createdAt).format('YYYY-MM-DD');
    section[date] ? section[date].push(chat) : (section[date] = [chat]);
  });
  return section;
};
