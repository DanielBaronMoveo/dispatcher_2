import {MessageType, showMessage} from 'react-native-flash-message';
import {authErrorMessages, authErrors, types} from '../constants/authErrors';

export class ErrorExeption extends Error {
  code: string;
  constructor(code: string) {
    super();
    this.code = code;
  }
}

const errorMessage = (error: any) => {
  switch (error.code) {
    case authErrors.EMAIL_ALREADY_IN_USE:
      showDynamicMessage(authErrorMessages[error.code], types.DANGER);
      break;
    case authErrors.INVALID_EMAIL:
      showDynamicMessage(authErrorMessages[error.code], types.DANGER);
      break;
    case authErrors.USER_NOT_FOUND:
      showDynamicMessage(authErrorMessages[error.code], types.DANGER);
      break;
    case authErrors.WRONG_PASSWORD:
      showDynamicMessage(authErrorMessages[error.code], types.DANGER);
      break;
    case authErrors.EMPTY_FIELDS:
      showDynamicMessage(authErrorMessages[error.code], types.DANGER);
      break;
    case authErrors.PASSWORDS_DO_NOT_MATCH:
      showDynamicMessage(authErrorMessages[error.code], types.DANGER);
      break;
    default:
      showDynamicMessage('Something went wrong!', types.DANGER);
      break;
  }
};

const showDynamicMessage = (message: string, type: MessageType) => {
  return showMessage({
    message,
    type,
  });
};

export const errorHandlingService = {
  errorMessage,
  showDynamicMessage,
};
