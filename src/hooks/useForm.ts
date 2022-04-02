import { useState } from 'react';
import { Auth } from 'types';
import validate from 'utils/validate';

function useForm(initialValues: Auth, type?: string) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({} as Auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const error = await validate(values, type);
    setErrors(error);
  };

  return { values, errors, handleChange, handleClick };
}

export default useForm;
