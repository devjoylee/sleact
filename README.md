<!-- PROJECT LOGO -->
<div align="center">
  <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/11/91/25/1191250e-1b6f-bb6b-41a2-6014d060819c/electron.png/1200x630bb.png" alt="Logo" width="60" height="60">
  <h1>Slack Clone Project</h1>
  <p>
    <a href="https://sleact.netlify.app/">배포 주소 바로가기</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details align="right">
  <summary>Table of Contents</summary>
    <div><a href="#프로젝트-소개">프로젝트 소개</a></div>
    <div><a href="#기술-스택">기술 스택</a></div>
    <div><a href="#프로젝트-실행">프로젝트 실행</a></div>
    <div><a href="#프로젝트-구현-사항">프로젝트 구현 사항</a></div>
    <div><a href="#커밋-컨벤션">커밋 컨벤션</a></div>
</details>

## 프로젝트 소개

> 슬랙의 workspace를 그대로 클론 구현한 프로젝트입니다. NodeJS로 빌드한 서버에 socket.io로 양방향 통신하여 실시간으로 채팅이 가능합니다.

-제작 기간 : 2022.03.30 - 2022.05.08

<br/>

## 기술 스택

<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">&nbsp;&nbsp;<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

<br/>

## 프로젝트 실행

1. 클라이언트 실행

```
npm start
```

2. 서버 실행

```
cd back
npm run dev
```

## 프로젝트 구현 사항

### 회원가입 & 로그인

- axios로 서버에 회원가입 요청
- SWR로 서버에서 사용자 확인 후 로그인 처리
- gravatar로 유저의 프로필 사진 랜덤 생성

### Workspace

- 새 워크스페이스 & 새 채널 생성 시 axios로 서버에 POST 요청
- `socket.io`로 각 workspace에 웹소켓 연결
- `useSWRInfinite`로 채팅 목록 무한 스크롤 추가

<br/>

## 커밋 컨벤션

| 깃모지 | 사용 예시               |
| ------ | ----------------------- |
| 🎉     | init                    |
| 🚚     | 디렉토리 또는 파일 이동 |
| ✨     | 기능 구현               |
| 💄     | CSS 스타일링            |
| ♻️     | 리팩토링                |
| 📝     | Readme 수정             |
| ➕     | 모듈 추가               |
| 🐛     | 버그 해결               |
| 🚑️    | 치명적인 오류 해결      |

출처 : 깃모지(http://gitmoji.dev/)

<br/>

<p align="right">(<a href="#top">back to top</a>)</p>
