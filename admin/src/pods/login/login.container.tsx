import React from 'react';

//Router
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';

//Api
import { isValidLogin } from './api/login-api';

//Vm
import { Login } from './login.vm';

//Component
import { LoginComponent } from './login.component';

export const LoginContainer: React.FunctionComponent = () => {
  const history = useHistory();

  const loginSucceeded = (userName: string, isValid: boolean): void => {
    if (isValid) {
      // Need to save user in session

      //User is superadmin
      if (false) {
        history.push(routes.barInfoList);
      } else {
        history.push(routes.dashboard);
      }
    } else {
      // Snackbar error
      alert('Invalid login');
    }
  };

  const handleLogin = (login: Login) => {
    isValidLogin(login.email, login.password).then((result) => {
      loginSucceeded(login.email, result);
    });
  };

  return (
    <>
      <LoginComponent onLogin={handleLogin} />
    </>
  );
};
