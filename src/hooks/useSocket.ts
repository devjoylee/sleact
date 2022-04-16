import { io } from 'socket.io-client';

const backUrl = 'http://localhost:3095';

function useSocket(workspace?: string) {
  if (!workspace) return;

  const socket = io(`${backUrl}/ws-${workspace}`);
  // emit :  client -> server
  // on : server -> client
  // disconnect : client에서 소켓 연결을 종료

  socket.emit('login', 'hello');
  socket.on('message', (data) => {
    console.log(data);
  });
  socket.disconnect();
}

export default useSocket;
