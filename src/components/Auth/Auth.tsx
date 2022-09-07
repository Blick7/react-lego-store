import React, { useState, useEffect } from 'react';

import image from '../../assets/img/parentAtDeskWithComputer@4x-44768ff9f5c861e8f17500ea00afea18.png';
import Checkbox from '@mui/material/Checkbox';
import classes from './Auth.module.scss';

const Auth = () => {
  const [emailValue, setEmailValue] = useState<string | null>(null);
  const [passwordValue, setPasswordValue] = useState<string | null>(null);
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
  const [checkboxIsActive, setCheckboxIsActive] = useState<boolean>(false);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('action');
  };

  const emailInputHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement>
  ) => {
    const email = event.target.value;
    setEmailValue(email);
    setEmailIsValid(emailValue!.includes('@') && emailValue!.length > 0);
  };

  const passwordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPasswordValue(password);
    setPasswordIsValid(password.length > 6);
  };

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckboxIsActive(true);
    } else setCheckboxIsActive(false);
  };

  const buttonClass = checkboxIsActive ? '' : `${classes['button--disabled']}`;

  return (
    <section className={classes.container}>
      <div className={classes.image}>
        <img src={image} />
      </div>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <label htmlFor="email">Your email address</label>
        <input
          type="email"
          id="email"
          placeholder="example@domain.com"
          onChange={emailInputHandler}
          onBlur={emailInputHandler}
        ></input>
        {!emailIsValid && (
          <div className={classes.notValid}>Email is not valid</div>
        )}
        {emailValue?.length === 0 && (
          <div className={classes.notValid}>Email is required</div>
        )}
        <label htmlFor="password">Your password</label>
        <input
          type="password"
          id="password"
          placeholder="* * * * * * *"
          onChange={passwordInputHandler}
          onBlur={passwordInputHandler}
        ></input>
        {!passwordIsValid && (
          <div className={classes.notValid}>
            The password must be at least 6 characters long
          </div>
        )}
        {passwordValue?.length === 0 && (
          <div className={classes.notValid}>Password is required</div>
        )}
        <div className={classes.checkbox}>
          <Checkbox onChange={checkboxHandler} /> I accept the terms and
          conditions
        </div>
        <p>
          When you agree to the
          <a href="https://www.lego.com/en-us/page/terms-and-conditions">
            Terms and Conditions
          </a>
          you also consent to our use of your personal information to process
          and operate your LEGO® Account. To see how to control your personal
          data, please see our privacy policy.
        </p>
        <button className={buttonClass}>Register</button>
      </form>
    </section>
  );
};

export default Auth;
