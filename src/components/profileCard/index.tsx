import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const ProfileCard: FC = () => (
  <div className="avatar-card">
    <Image
      src="/images/hd_dp.jpg"
      className="avatar-card__img"
      alt=""
      layout="intrinsic"
      width={100}
      height={100}
    />
    <div>
      <Link href="/teacher/about" className="avatar-card__name">
        <a>Joginder Singh</a>
      </Link>
    </div>
    <p className="avatar-card__descr">Web Developer, Designer, and Teacher</p>
    <ul className="avatar-card__stats">
      <li>615K Students</li>
      <li> 12 Courses</li>
    </ul>
    <a href="./my_instructor_profile_view.html" className="avatar-card__link">
      Go To Profile
    </a>
  </div>
);
