export class User {
  id: number;
  login: string;
  pwd: string;
  bloqued: boolean;
  nbrTentatifRestant: number;
  dateBloquage: Date;
  nvpassword: string;
  oldpassword: string;
  nvpasswordConfirmation: string;
  code: number;
}
