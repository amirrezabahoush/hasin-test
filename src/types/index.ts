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

export type TicketTypes = {
    mrcIdentify: string;
    appUserSuggestionId: number;
    action: number;
    messageStatus: number;
    messageType: number;
    message: string;
    addressLink: string;
    creationDate: number;
    lastUpdate: number;
} 