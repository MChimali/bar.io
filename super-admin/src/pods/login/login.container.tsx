//React
import React from 'react';

//Router
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';

//Api
import { isValidLogin } from './api/login-api';

//Vm
import { Login } from './login.vm';

//Component
import { LoginComponent } from './login.component';
import {
  AlertSnackbarComponent,
  HorizontalPosition,
  Severity,
  VerticalPosition,
} from 'common-app/components/alert-snackbar';

export const LoginContainer: React.FunctionComponent = () => {
  const history = useHistory();
  const [error, setError] = React.useState<string>(null);

  const loginSucceeded = (userName: string, isValid: boolean): void => {
    if (isValid) {
      // Need to save user in session
      history.push(linkRoutes.selectionModule);
    } else {
      setError('Invalid login');
    }
  };

  const handleLogin = (login: Login) => {
    isValidLogin(login.email, login.password).then((result) => {
      loginSucceeded(login.email, result);
    });
  };

  const onCloseErrorAlert = () => {
    setError(null);
  };

  return (
    <>
      <LoginComponent onLogin={handleLogin} />
      <AlertSnackbarComponent
        open={!!error}
        message={error}
        onClose={onCloseErrorAlert}
        severity={Severity.ERROR}
        autoHideDuration={6000}
        vertical={VerticalPosition.TOP}
        horizontal={HorizontalPosition.CENTER}
      />
    </>
  );
};
