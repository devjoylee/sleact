import { useState } from 'react';

function useValidate<T>(values: T, validate: (value: T, type?: string) => T, type?: string) {
  const [errors, setErrors] = useState({} as T);

  const handleFormCheck = async () => {
    const error = await validate(values, type);
    setErrors(error);
    console.log(await errors);
  };

  return { errors, handleFormCheck };
}

export default useValidate;
