import { FC } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import { getLocaleDateString } from "../../helpers/date";
import { Course } from "../../types";

type Props = {
  course: Course;
};

export const CourseComponent: FC<Props> = ({ course }) => {
  const {
    badge,
    createdBy,
    description,
    info: { benefits, descriptionSummary, descriptions, requirements } = {},
    poster,
    rating,
    technologies,
    updated,
  } = course;

  const { t } = useTranslation();

  return (
    <main className="courses-detail-layout course-detail">
      <header className="header">
        <div className="container">
          <div className="course-detail__header">
            <div className="course-detail__header-left">
              <div className="course-card">
                <a
                  href="#"
                  className="course-card__header course-card__header--bigger"
                >
                  <Image src={poster} alt="" layout="fill" />
                  {badge && (
                    <div className="course-card__header-overlay">
                      <div className="course-card__label-bestseller">
                        {t("course:badge")}
                      </div>
                    </div>
                  )}
                </a>
              </div>
            </div>
            <div className="course-detail__header-right">
              <h2 className="course-detail__title">{description}</h2>

              <p className="course-detail__summary">{technologies}</p>

              <div className="course-detail__rating-wrap">
                <div className="course-detail__rating">{rating}</div>
                (81,665 {t("course:ratings")})
              </div>
              <div className="course-detail__stats">
                114,521 {t("course:studentsEnrolled")}
              </div>
              <div className="course-detail__lang">English</div>
              <div className="course-detail__upd">
                {t("course:lastUpdated")} {getLocaleDateString(updated)}
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="banner banner--pd ">
        <div className="container">
          <div className="course-detail__info">
            <div className="course-detail__author">
              <div className="avatar">
                <Image
                  className="avatar__img avatar__img--bigger"
                  src="/images/courses/hd_dp.jpg"
                  alt=""
                  layout="intrinsic"
                  width={50}
                  height={50}
                />
                <span className="avatar__name"> John Dou </span>
              </div>
            </div>
            <div className="course-detail__react">
              <div className="course-detail__react-icon course-detail__react-icon--like">
                <Image
                  className="course-detail__react-img"
                  src="/images/like.svg"
                  alt=""
                  layout="fixed"
                  width={28}
                  height={28}
                />
                <span>200</span>
              </div>
              <div className="course-detail__react-icon course-detail__react-icon--dislike">
                <Image
                  className="course-detail__react-img"
                  src="/images/dislike.svg"
                  alt=""
                  layout="fixed"
                  width={28}
                  height={28}
                />
                <span>50</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {course.info && (
        <section className="description-layout">
          <div className="container">
            {requirements && !!requirements.length && (
              <>
                <h3 className="subtitle-h3">{t("course:requirements")}</h3>
                <ul className="list list--ul">
                  {requirements.map((requirement, index) => {
                    return (
                      <li key={index} className="list__item">
                        {requirement}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
            {descriptions && descriptions.length && (
              <>
                <h3 className="subtitle-h3">{t("course:requirements")}</h3>
                <ul className="list list--ul">
                  {descriptions.map((description, index) => {
                    return (
                      <li key={index} className="list__item">
                        {description}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
            {descriptionSummary && <p className="par">{descriptionSummary}</p>}
            {benefits && benefits.length && (
              <>
                <p className="par">{t("course:courseCover")}</p>
                <ul className="list list--ul">
                  {benefits.map((benefit, index) => {
                    return (
                      <li key={index} className="list__item list__item--bold">
                        {benefit}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        </section>
      )}
    </main>
  );
};
