import { IFormValues } from "../components/signUp/config";

export type ISignUp = Omit<IFormValues, "confirmPassword">;

export interface IToken {
  data: string;
}
