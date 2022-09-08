import React, { useEffect, useState } from 'react';

import Checkbox from '@mui/material/Checkbox';

import classes from './AuthForm.module.scss';

type Props = {
  type: string;
  setEmail: (value: string | ((prevVal: string) => string)) => void;
  setPassword: (value: string | ((prevVal: string) => string)) => void;
  handleAction: () => void;
};

const AuthForm: React.FC<Props> = ({
  type,
  setEmail,
  setPassword,
  handleAction,
}) => {
  const [emailValue, setEmailValue] = useState<string | null>(null);
  const [passwordValue, setPasswordValue] = useState<string | null>(null);
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
  const [checkboxIsActive, setCheckboxIsActive] = useState<boolean>(
    type === 'Sign In'
  );

  useEffect(() => {
    setCheckboxIsActive(type === 'Sign In');
  }, [type]);

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('action');

    handleAction();
  };

  const emailInputHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FocusEvent<HTMLInputElement>
  ) => {
    const email = event.target.value;
    setEmailValue(email);
    setEmail(email);
    setEmailIsValid(emailValue!.includes('@') && emailValue!.length > 0);
  };

  const passwordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPasswordValue(password);
    setPassword(password);
    setPasswordIsValid(password.length > 6);
  };

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckboxIsActive(true);
    } else setCheckboxIsActive(false);
  };

  const buttonClass = checkboxIsActive ? '' : `${classes['button--disabled']}`;

  return (
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
      {type === 'Register' && (
        <div>
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
        </div>
      )}

      <button className={buttonClass}>{type}</button>
    </form>
  );
};

export default AuthForm;
