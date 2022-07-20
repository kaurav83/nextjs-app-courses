import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "next-i18next";

import { IFormValues, schema } from "./config";
import { Form } from "../../elements/form";
import { Label } from "../../elements/label";
import { Input } from "../../elements/input";
import { Button } from "../../elements/button";
import { api } from "../../api";

export const SignUp: React.FC = () => {
  const { t } = useTranslation();
  const { handleSubmit, reset, register, formState } = useForm<IFormValues>({
    mode: "onTouched",
    resolver: yupResolver(schema(t)),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const { confirmPassword, ...newUser } = data;

    const result = await api.signUp(newUser);
    if (result?.status === 200) {
      reset();
      router.push("/");
    }
  };

  return (
    <Form className="form centered" submit={handleSubmit(onSubmit)}>
      <div className="wrapper centered">
        <h2 className="form__title">{t("form:registration")}</h2>
        <div>
          <Label>
            <div className="error-message-block">
              <Input
                placeholder={t("form:name")}
                type="text"
                register={register("name")}
                tag="input"
              />
              <span className="error-message">
                {formState.errors.name?.message}
              </span>
            </div>
          </Label>
          <Label>
            <div className="error-message-block">
              <Input
                placeholder={t("form:email")}
                type="text"
                register={register("email")}
                tag="input"
              />

              <span className="error-message">
                {formState.errors.email?.message}
              </span>
            </div>
          </Label>
          <Label>
            <div className="error-message-block">
              <Input
                placeholder={t("form:password")}
                type="password"
                register={register("password")}
                tag="input"
              />
              <span className="error-message">
                {formState.errors.password?.message}
              </span>
            </div>
          </Label>
          <Label>
            <div className="error-message-block">
              <Input
                placeholder={t("form:confirmation")}
                type="password"
                register={register("confirmPassword")}
                tag="input"
              />
              <span className="error-message">
                {formState.errors.confirmPassword?.message}
              </span>
            </div>
          </Label>
          <Button className="signupSubmit" type="submit">
            {t("form:createAccount")}
          </Button>
        </div>
        <p className="options">
          {t("form:haveAccount")}
          <Link className="" href="/login">
            <a>{t("form:enter")}</a>
          </Link>
        </p>
      </div>
    </Form>
  );
};
