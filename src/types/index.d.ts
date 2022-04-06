export interface Auth {
  email: string;
  nickname?: string;
  password: string;
  passwordCheck?: string;
  [key: string]: string;
}

export interface NewWs {
  wsname: string;
  wsurl: string;
}
