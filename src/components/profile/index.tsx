import { FC } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import { ProfileType } from "../../types";

export const ProfileComponent: FC<ProfileType> = ({ profile }) => {
  const { t } = useTranslation();
  return (
    <section className="profile">
      <div className="profile__wrapper">
        <Image src={profile.avatar} width={256} height={256} />
        <div className="profile__content">
          {t("profile:userName")}: {profile.name}
        </div>
        <div className="profile__content">
          {t("profile:userEmail")}: {profile.email}
        </div>
        <div className="profile__content">
          {t("profile:idName")}: {profile.hash}
        </div>
      </div>
    </section>
  );
};
