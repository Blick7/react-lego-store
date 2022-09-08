import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { app } from '../../firebase-config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { setUser } from '../../store/user/userSlice';

interface UserData {
  user: string;
  prevState: null;
}

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState<any | null>(null);
  const authentification = getAuth(app);

  onAuthStateChanged(authentification, (currentUser) => {
    const email = currentUser?.email;
    setUserEmail(email);
    dispatch(setUser(email));
    console.log(email);
  });

  if (!userEmail) {
    navigate('/');
  }

  return <div>{userEmail}</div>;
};

export default Profile;
