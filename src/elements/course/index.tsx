import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { getLocaleDateString } from "../../helpers/date";
import { Course } from "../../types";

type Props = {
  hash: string;
  course: Course;
};

export const CourseElement: FC<Props> = ({ hash, course }) => {
  const {
    badge,
    updated,
    duration,
    createdBy,
    description,
    price,
    rating,
    poster,
    technologies,
    views,
  } = course;

  const { t } = useTranslation();

  return (
    <div className="course-card">
      <Link href={hash}>
        <a className="course-card__header">
          <Image src={poster} alt="" layout="fill" />
          <div className="course-card__header-overlay">
            {badge && (
              <div className="course-card__label-bestseller">
                {t("course:badge")}
              </div>
            )}
            <div className="course-card__label-reviews">{rating}</div>
            <div className="course-card__label-timer">
              {duration} {t("course:hours")}
            </div>
          </div>
        </a>
      </Link>
      <div className="course-card__footer">
        <ul className="course-card__stats">
          <li>{views}</li>
          <li>{getLocaleDateString(updated)}</li>
        </ul>
        <Link href={hash}>
          <a className="course-card__title">{description}</a>
        </Link>
        <a href="#" className="course-card__cate">
          {technologies}
        </a>
        <div className="course-card__info">
          <p className="course-card__author">
            {t("course:by")} <a href="#">{createdBy}</a>
          </p>
          <div className="course-card__price">${price}</div>
        </div>
      </div>
    </div>
  );
};
