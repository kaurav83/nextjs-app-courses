import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export const Menu: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <a href="#" className="nav__btn">
        {t("header:createNewCourse")}
      </a>
      <Link href={"/profile"}>
        <a className="nav__avatar avatar">
          <span className="avatar__name"> John Dou </span>
          <Image
            className="avatar__img"
            src="/images/courses/hd_dp.jpg"
            alt=""
            width={36}
            height={36}
          />
        </a>
      </Link>
      <a href="#" className="nav__logout">
        {t("header:logout")}
      </a>
    </>
  );
};
