import React from 'react';
import { useParams } from 'react-router-dom';

export const DMPage = () => {
  const dm = useParams();

  return <div>{dm.name}</div>;
};
