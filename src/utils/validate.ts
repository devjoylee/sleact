import { Auth } from 'types';

export const validate = (values: Auth, type?: string) => {
  let errors = {} as Auth;

  // email
  if (!values.email) {
    errors.email = 'Please enter your email.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email address is not vaild. Please try again.';
  }

  // password
  if (!values.password) {
    errors.password = 'Please enter your password.';
  } else if (values.password.length < 6 || values.userId.length > 20) {
    errors.password = 'Password must be between 6 and 20 characters.';
  }

  if (type === 'signup') {
    // nickname
    if (!values.nickname) {
      errors.nickname = 'Please enter your nickname.';
    }

    // confirm password
    if (values.password && !values.passwordCheck) {
      errors.passwordCheck = 'Please enter your password.';
    } else if (values.passwordCheck !== values.password) {
      errors.passwordCheck = 'Passwords do not match. Please try again.';
    }
  }

  return errors;
};
