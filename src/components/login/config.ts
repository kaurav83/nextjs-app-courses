import * as yup from "yup";

export interface IFormLogin {
  email: string;
  password: string;
}

export const schema = (t: any) => {
  return yup.object().shape({
    email: yup.string().email().required(t("form:validationEmail")),
    password: yup
      .string()
      .min(8, t("form:validationMinLength"))
      .max(16, t("form:validationMaxLength"))
      .required(t("form:validationPassword")),
  });
};
