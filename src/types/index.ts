type ZeroOrOne = 0  | 1;

type UserDetails = {
  cellphone: string;
  isValidCellphone: ZeroOrOne;
  isValidMail: ZeroOrOne;
  mail: string;
  mrcCode: string,
  residentCode: number;
  userStatus: number;
  userType: ZeroOrOne;
}

export type UserSchema = {
  id: string;
  details: UserDetails;
}