import React, { useEffect } from 'react';
import Auth from '../Auth/Auth';

type Props = {
  type: string;
};

const AuthPage: React.FC<Props> = ({ type }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Auth type={type} />;
};

export default AuthPage;
