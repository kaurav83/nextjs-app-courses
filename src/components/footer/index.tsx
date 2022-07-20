import { FC } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

export const FooterComponent: FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          <Image
            src="/images/sign_logo.png"
            alt=""
            layout="fixed"
            width={25}
            height={24}
          />
          © 2020 <strong>{t("footer:copyRight")}</strong>.{" "}
        </p>
      </div>
    </footer>
  );
};
