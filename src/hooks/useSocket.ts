import { io, Socket } from 'socket.io-client';

const backUrl = 'http://localhost:3095';
const sockets: { [key: string]: Socket } = {};

function useSocket(workspace?: string): [Socket | undefined, () => void] {
  const disconnect = () => {
    if (workspace) {
      sockets[workspace].disconnect();
      delete sockets[workspace];
    }
  };

  if (!workspace) return [undefined, disconnect];

  if (!sockets[workspace]) {
    sockets[workspace] = io(`${backUrl}/ws-${workspace}`, {
      transports: ['websocket'], // without polling http
    });
  }

  return [sockets[workspace], disconnect];
}

// emit :  client -> server
// on : server -> client
// disconnect : client에서 소켓 연결을 종료

export default useSocket;
