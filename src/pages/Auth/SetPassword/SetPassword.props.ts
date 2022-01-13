type SetPasswordFormItems = 'password' | 'repeatPassword';

export type SetPasswordValues = {
  [P in SetPasswordFormItems]: string;
}