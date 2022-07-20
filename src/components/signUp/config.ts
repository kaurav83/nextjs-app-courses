import * as yup from "yup";

export interface IFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const schema = (t: any) => {
  return yup.object().shape({
    name: yup
      .string()
      .min(5, t("form:validationMinLength"))
      .max(40, t("form:validationMaxLength"))
      .required("*"),
    email: yup.string().email().required(t("form:validationEmail")),
    password: yup
      .string()
      .min(8, t("form:validationMinLength"))
      .max(16, t("form:validationMaxLength"))
      .required(t("form:validationPassword")),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], t("form:confirmPassword"))
      .required(t("form:validationConfirmPassword")),
  });
};
