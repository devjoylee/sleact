import { Auth } from 'types';

export default function validate(values: Auth, type?: string) {
  let errors = {} as Auth;

  // email
  if (!values.email) {
    errors.email = '이메일을 입력하세요.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = '유효한 이메일주소를 입력하세요.';
  }

  // password
  if (!values.password) {
    errors.password = '비밀번호를 입력하세요.';
  } else if (values.password.length < 6) {
    errors.password = '6자 이상의 비밀번호를 입력하세요.';
  }

  if (type === 'signup') {
    // nickname
    if (!values.nickname) {
      errors.nickname = '닉네임을 입력하세요.';
    }

    // confirm password
    if (values.password && !values.passwordCheck) {
      errors.passwordCheck = '비밀번호를 입력하세요.';
    } else if (values.passwordCheck !== values.password) {
      errors.passwordCheck = '비밀번호가 일치하지 않습니다.';
    }
  }

  return errors;
}
