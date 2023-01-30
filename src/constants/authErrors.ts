export const authErrors = {
  EMAIL_ALREADY_IN_USE: 'auth/email-already-in-use',
  INVALID_EMAIL: 'auth/invalid-email',
  USER_NOT_FOUND: 'auth/user-not-found',
  WRONG_PASSWORD: 'auth/wrong-password',
  EMAIL_NOT_FOUND: 'auth/email-not-found',
  TOO_MANY_REQUESTS: 'auth/too-many-requests',
  INVALID_PASSWORD: 'auth/invalid-password',
  EMPTY_FIELDS: 'empty-fields',
  PASSWORDS_DO_NOT_MATCH: 'passwords-do-not-match',
};

export const authErrorMessages = {
  [authErrors.EMAIL_ALREADY_IN_USE]: 'That email address is already in use!',
  [authErrors.INVALID_EMAIL]: 'That email address is invalid!',
  [authErrors.USER_NOT_FOUND]: 'User not found!',
  [authErrors.WRONG_PASSWORD]: 'Wrong password!',
  [authErrors.EMAIL_NOT_FOUND]: 'Email not found!',
  [authErrors.TOO_MANY_REQUESTS]: 'Too many requests!',
  [authErrors.INVALID_PASSWORD]: 'Invalid password!',
  [authErrors.EMPTY_FIELDS]: 'Please fill all fields!',
  [authErrors.PASSWORDS_DO_NOT_MATCH]: 'Passwords do not match!',
};

export enum types {
  DANGER = 'danger',
  SUCCESS = 'success',
}
