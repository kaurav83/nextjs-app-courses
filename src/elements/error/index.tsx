import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { ErrorProps } from "../../types";

export const ErrorElement: FC<ErrorProps> = ({ statusCode, title }) => {
  const { t } = useTranslation();

  return (
    <div className="error">
      <div className="container error__container">
        <a href="#" className="error__logo">
          <Image
            src="/images/logo-light.svg"
            alt=""
            width={155}
            height={36.72}
          />
        </a>
        <div className="error__text-container">
          <h1 className="error__title">{statusCode}</h1>
          <h4 className="error__subtitle">{title}</h4>
          <div>
            <Link href="/" className="error__btn">
              <a>{t("common:goHome")}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
