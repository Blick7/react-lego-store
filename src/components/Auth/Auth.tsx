import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/user/userSlice';

import { app } from '../../firebase-config';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import image from '../../assets/img/parentAtDeskWithComputer@4x-44768ff9f5c861e8f17500ea00afea18.png';

import classes from './Auth.module.scss';
import AuthForm from './AuthForm';

type Props = {
  type: string;
};

const Auth: React.FC<Props> = ({ type }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const authentification = getAuth(app);
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState<any>('');
  // onAuthStateChanged(authentification, (currentUser) => {

  // })

  const handleAction = async () => {
    if (type === 'Register') {
      createUserWithEmailAndPassword(authentification, email, password)
        .then((response) => {
          console.log(response);
          const userEmail = authentification.currentUser?.email;
          dispatch(setUser(userEmail));
          // console.log(authentification.currentUser?.email);
          setCurrentUser(userEmail);
          navigate('/profile');
        })
        .catch((error) => {
          console.log(error);
          // TODO add notification here React Tostify
        });
    } else if (type === 'Sign In') {
      signInWithEmailAndPassword(authentification, email, password)
        .then((response) => {
          console.log(response);
          const userEmail = authentification.currentUser?.email;
          setCurrentUser(userEmail);
          navigate('/profile');
        })
        .catch((error) => {
          console.log(error);
          // TODO add notification here React Tostify
        });
    }
  };

  return (
    <section className={classes.container}>
      <div className={classes.image}>
        <img src={image} alt="auth page image" />
      </div>
      <AuthForm
        type={type}
        setEmail={setEmail}
        setPassword={setPassword}
        handleAction={handleAction}
      />
    </section>
  );
};

export default Auth;
