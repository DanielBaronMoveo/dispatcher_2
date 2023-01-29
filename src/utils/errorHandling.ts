import {showMessage} from 'react-native-flash-message';
import {authErrors} from '../constants/authErrors';
const errorMessage = (error: any) => {
  switch (error.code) {
    case authErrors.EMAIL_ALREADY_IN_USE:
      return showMessage({
        message: 'That email address is already in use!',
        type: 'danger',
      });
    case authErrors.INVALID_EMAIL:
      return showMessage({
        message: 'That email address is invalid!',
        type: 'danger',
      });
    case authErrors.USER_NOT_FOUND:
      return showMessage({
        message: 'User not found!',
        type: 'danger',
      });
    case authErrors.WRONG_PASSWORD:
      return showMessage({
        message: 'Wrong password!',
        type: 'danger',
      });

    default:
      return showMessage({
        message: 'Something went wrong!',
        type: 'danger',
      });
  }
};

export const errorHandlingService = {
  errorMessage,
};
