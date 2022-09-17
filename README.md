<!-- PROJECT LOGO -->
<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/11/91/25/1191250e-1b6f-bb6b-41a2-6014d060819c/electron.png/1200x630bb.png" alt="Logo" width="60" height="60">
  <h1>Slack Clone Project</h1>
  <p>
    <!-- <a href="https://sleact.netlify.app/" target="_blank">View Demo</a> -->
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details align="right">
  <summary>Table of Contents</summary>
    <div><a href="#About-The-Project">About The Project</a></div>
    <div><a href="#Built-With">Built With</a></div>
    <div><a href="#Getting-Started">Getting Started</a></div>
    <div><a href="#Main-Features">Main Features</a></div>
    <div><a href="#Commit-Convention">Commit Convention</a></div>
</details>

## About The Project

> It is a clone project that implements Slack's workspace. You can create a workspace, channels annd chat in real time with other users! It communicates using a bidirectional channel between the Socket.io client (React) and the Socket.io server (Node.js).

- Production Period : 2022.03.30 - 2022.05.08

### Managing Databases with MySQL

- Create a database using [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
- Manage (Edit/Delete) data from MySQL by queries (_`sleact.users`, `sleact.channels`…_)

<div align="center">
<img src="https://user-images.githubusercontent.com/68415905/221135664-4e89094d-82b2-48ff-b14b-d7a9b45ef68f.JPG" alt="img" width="60%" >
</div><br/>

<br/>

## Built With

<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">&nbsp;&nbsp;<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">&nbsp;&nbsp;<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/>

<br/>

## Getting Started

⛔ **The server and all REST APIs are made by ZeroCho. Yet the server is not deployed, please install the project and execute in your local by typing the following in the command line.**

1. Clone the project

```bash
git clone https://github.com/devjoylee/sleact.git
npm install
```

2. Run Client

```bash
npm start
```

3. Run Server

```bash
cd back
npm run dev
```

<br/>

## Main Features

### 1. Authentication

- Sign-up form includes **validation inputs with error message** and a submit button.
- Created **a custom `useForm` & `useValidate` hook** to re-use in the login form and the join form.
- Used `gravatar` to provide an unique avatar for new member’s profile.

<div align="center">
<img src="https://user-images.githubusercontent.com/68415905/221135674-1fe34391-dfe8-463c-9338-2a7a0107e93f.JPG" alt="img" width="80%" >
</div><br/>

- Code Preview

```tsx
// components/Auth/SignUpForm.tsx
// 👉 handling form errors by a useValidate hook.
const { errors, handleFormCheck } = useValidate(values, validate, 'signup');

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // 👉 request signup to SERVER when all inputs are correctly filled.
  if (!Object.keys(errors).length) {
    console.log('Request Sign-up loading...');
    axios
      .post('/api/users', { email, nickname, password })
      .then((res) => {
        console.log(res);
        alert('You have successfully signed up.');
        resetForm();
        navigate('/login');
      })
      .catch((error) => {
        console.log(error.response);
        alert(error.response.data);
      });
  }
};

// 👉 block entering in the join page when logged in
useEffect(() => {
  if (data) navigate('/workspace/sleact/channel/일반');
}, [data, navigate]);
```

<br/>

### 2. Create Workspaces & Channels

- How to create New Workspace → Click the **‘+’ button** in the left side bar.
- How to create New Channel → Click the **workspace name** at the top.
- Built **a reusable Modal layout components** for workspace and channel modal.

<div align="center">
<img src="https://user-images.githubusercontent.com/68415905/221135681-9439c5de-f3f8-418e-b05f-056415372ca3.JPG" alt="img" width="80%" >
</div><br/>

- Code Preview

```tsx
// components/Layout/ModalLayout
// 👉 reusable modal component
export const ModalLayout: FC<Props> = ({ children, handleClose }) => {
  return (
    <ModalOverlay className='modal-overlay' onClick={handleClose}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <MdClose onClick={handleClose} />
        {children}
      </div>
    </ModalOverlay>
  );
};
```

<br/>

### 3. Chatting

- **Real-time bidirectional chat service.**
- Created `scrollRef` and adjusted the scroll height when a chat is sent.
- Grouped chat list **by date** (Utilized a custom function called `makeDateSection`)
- Implemented **infinite scrolling** using `useSWRInfinite` library.
- It communicates using **a bidirectional channel** between **the Socket.io client (React)** and **the Socket.io server (Node.js)**. **_[📝 Read More in my blog](https://devjoylee.github.io/series/Web-Socket)_**

<div align="center">
<img src="https://user-images.githubusercontent.com/68415905/221135704-f24a4e8d-929a-4b51-8232-4da08358c532.gif" alt="img" width="80%" >
</div><br/>

- Code Preview

```tsx
// pages/DMPage.tsx
export const DMPage = () => {
  // ...
  // 👉 infinite scroll by useSWRInfinite
  const {
    data: chats,
    setSize,
    mutate,
  } = useSWRInfinite<IDM[]>((idx: number) => `${postURL}?perPage=20&page=${idx + 1}`, fetcher);

  return (
    // ...
    <ChatList chats={chats as IDM[][]} ref={scrollRef} setSize={setSize} />
  );
};
```

```tsx
// components/Chat/ChatList.tsx
export const ChatList = forwardRef<Scrollbars, ChatListProps>(({ chats, setSize }, scrollRef) => {
  // ...
  // 👉 keep the scroll position when scrolling infinite
  const handleScroll = (values: positionValues) => {
    if (values.scrollTop === 0 && !isReachingEnd) {
      setSize((prevSize) => prevSize + 1).then(() => {
        const current = (scrollRef as RefObject<Scrollbars>)?.current;
        if (current) {
          current.scrollTop(current.getScrollHeight() - values.scrollHeight);
          console.log(current.getScrollHeight(), values.scrollHeight);
        }
      });
    }
  };

  // 👉 move scroll at the bottom when chats are sent or loaded
  useEffect(() => {
    const current = (scrollRef as RefObject<Scrollbars>)?.current;
    if (chats?.length) current?.scrollToBottom();
  }, [chats]);

  return (
    <ChatListContainer>
      <Scrollbars autoHide ref={scrollRef} onScrollFrame={handleScroll}>
        {Object.keys(dateSection).map((date) => (
          <DateSection key={date}>
            <p className='date'>{date}</p>
            {dateSection[date]?.map((chat) => (
              <ChatItem key={chat.id} chatData={chat} />
            ))}
          </DateSection>
        ))}
      </Scrollbars>
    </ChatListContainer>
  );
});
```

```tsx
// utils/makeDateSection.ts
// 👉 Group chat list by DATE
export const makeDateSection = (chatList: ChatType[]) => {
  const section: { [key: string]: ChatType[] } = {};
  chatList?.forEach((chat) => {
    const date = dayjs(chat.createdAt).format('YYYY-MM-DD');
    section[date] ? section[date].push(chat) : (section[date] = [chat]);
  });
  return section;
};
```

<br/>

## Commit Convention

The commit message is written with the GITMOJI icons in order to make commit messages more intuitive.

| Gitmoji | Meaning                     |
| ------- | --------------------------- |
| 🎉      | Init or begin a project.    |
| 🚚      | Move or rename resources    |
| ✨      | Introduce new features      |
| 💄      | Add the UI and style files  |
| ♻️      | Refactor code               |
| 📝      | Add or update documentation |
| ➕      | Add a dependency            |
| 🐛      | Fix a bug                   |
| 🚀      | Deploy stuff                |

REFERENCE : Gitmoji (http://gitmoji.dev/)

<br/>

<p align="right">(<a href="#top">back to top</a>)</p>
