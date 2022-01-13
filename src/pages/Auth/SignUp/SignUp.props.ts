type SignUpFormItems = 'nationality' | 'merchantCode' | 'phoneNumber' | 'email';

export type SignupValues = {
  [P in SignUpFormItems]: string;
}