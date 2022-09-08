import React, { MutableRefObject, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { app } from '../../firebase-config';
import { getAuth, onAuthStateChanged, updatePassword } from 'firebase/auth';
import { setUser } from '../../store/user/userSlice';

import classes from './Profile.module.scss';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userEmail, setUserEmail] = useState<any | null>(null);
  const authentification = getAuth(app);
  const inputRef = useRef<HTMLInputElement>(null);

  onAuthStateChanged(authentification, (currentUser) => {
    const email = currentUser?.email;
    setUserEmail(email);
    dispatch(setUser(email));
    console.log(email);
  });

  if (!userEmail) {
    navigate('/');
  }

  const changePasswordHandler = () => {
    const password = inputRef.current?.value;
    if (password!.length > 6) {
      const user = authentification.currentUser;
      updatePassword(user!, password!)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // TODO TOSTIFY NOTIFICATION HERE
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>LEGO® Account Details</h2>
        <p>
          The LEGO® Account is your gateway to logging into LEGO digital
          experiences, go here to edit your LEGO Account details
        </p>
        <div className={classes.detail}>
          <div>
            <input
              type="password"
              placeholder="Enter your new password"
              ref={inputRef}
            />
            <button onClick={changePasswordHandler}>Change password</button>
          </div>
          <div>
            <div>LEGO® Account Email</div>
            <div>{userEmail}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
