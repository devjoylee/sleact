import styled from '@emotion/styled';

export const AuthContainer = styled.div`
  width: 400px;
  height: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding-top: 50px;
`;

export const Header = styled.h1`
  text-align: center;
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -0.75px;
  margin-bottom: 50px;
`;

export const LinkContainer = styled.p`
  font-size: 13px;
  color: #616061;
  margin-top: 10px;
  a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`;
