import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "next-i18next";

import { IFormLogin, schema } from "./config";
import { Form } from "../../elements/form";
import { Label } from "../../elements/label";
import { Input } from "../../elements/input";
import { Button } from "../../elements/button";
import { api } from "../../api";

export const Login: React.FC = () => {
  const { t } = useTranslation();

  const { handleSubmit, reset, register, formState } = useForm<IFormLogin>({
    mode: "onTouched",
    resolver: yupResolver(schema(t)),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<IFormLogin> = async (data) => {
    const result = await api.login(data);
    if (result?.status === 200) {
      reset();
      router.push("/");
    }
  };

  return (
    <Form className="form centered" submit={handleSubmit(onSubmit)}>
      <div className="wrapper centered">
        <h2 className="form__title">{t("form:auth")}</h2>
        <div>
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
          <Button className="signupSubmit" type="submit">
            {t("form:enter")}
          </Button>
        </div>
        <p className="options">
          <span>{t("form:notRegistered")}</span>
          <Link className="" href="/registration">
            <a>{t("form:regiser")}</a>
          </Link>
        </p>
      </div>
    </Form>
  );
};
