import React from 'react';
import Auth from '../Auth/Auth';

type Props = {
  type: string;
};

const AuthPage: React.FC<Props> = ({ type }) => {
  return <Auth type={type} />;
};

export default AuthPage;
