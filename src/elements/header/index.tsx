import { FC } from "react";
import Image from "next/image";

export const HeaderElement: FC = () => (
  <header className="header">
    <div className="container container--smaller">
      <div className="user-avatar">
        <div className="user-avatar__img-wrap">
          <Image
            className="user-avatar__img"
            src="/images/hd_dp.jpg"
            alt=""
            layout="intrinsic"
            width={110}
            height={110}
          />
        </div>
        <div className="user-avatar__text-wrap">
          <h2 className="user-avatar__name">Joginder Singh</h2>
          <p className="user-avatar__position">
            UI / UX Designer and Web Developer
          </p>
        </div>
      </div>
    </div>
  </header>
);
