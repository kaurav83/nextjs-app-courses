import { GetServerSideProps } from "next";
import type { ReactElement } from "react";
import Head from "next/head";
import nookies, { parseCookies } from "nookies";
import Image from "next/image";
import { SSRConfig, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";

import { getLocale } from "../../helpers/getLocale";
import type { NextPageWithLayout } from "../_app";
import { TabSet } from "../../components/tabs";
import Layout from "../../components/layout";
import { HeaderElement } from "../../elements/header";
import { HeaderComponent } from "../../components/header";
import { FooterComponent } from "../../components/footer";
import { AppView } from "../../views/app";
import { api } from "../../api";

type Props = {
  token?: string;
};

const MyCoursesPage: NextPageWithLayout = ({ token = "" }: Props) => {
  const { t } = useTranslation();
  const { data } = useQuery(["coursesTeacher"], () =>
    api.getTeacherCourses(token, 1, 10)
  );

  return (
    <>
      <Head>
        <title>{t("courses-teacher:titleCoursesTeacher")}</title>
      </Head>
      {data.data.length ? (
        <div>Есть данные в БД</div>
      ) : (
        <section className="description-layout">
          <div className="container">
            <div className="tab-pane" id="tabCourse">
              <h3 className="subtitle-h3">My courses (8)</h3>

              <div className="courses-layout courses-layout--block">
                <div className="courses-layout__container">
                  <div className="course-card">
                    <a
                      href="#"
                      className="course-card__header course-card__header--bigger"
                    >
                      <Image
                        src="/images/courses/img-1.jpg"
                        alt=""
                        layout="fill"
                      />
                      <div className="course-card__header-overlay">
                        <div className="course-card__label-bestseller">
                          Bestseller
                        </div>
                        <div className="course-card__label-reviews">4.5</div>
                        <div className="course-card__label-timer">25 hours</div>
                      </div>
                    </a>
                    <div className="course-card__footer">
                      <ul className="course-card__stats">
                        <li>109k views</li>
                        <li>15 days ago</li>
                      </ul>
                      <a
                        href="course_detail_view.html"
                        className="course-card__title"
                      >
                        Complete Python Bootcamp: Go from zero to hero in Python
                        3
                      </a>
                      <a href="#" className="course-card__cate">
                        Web Development | Python
                      </a>
                      <div className="course-card__info">
                        <p className="course-card__author">
                          By <a href="#">John Doe</a>
                        </p>
                        <div className="course-card__price">$10</div>
                      </div>
                    </div>
                  </div>
                  <div className="course-card">
                    <a
                      href="#"
                      className="course-card__header course-card__header--bigger"
                    >
                      <Image
                        src="/images/courses/img-2.jpg"
                        alt=""
                        layout="fill"
                      />
                      <div className="course-card__header-overlay">
                        <div className="course-card__label-bestseller">
                          Bestseller
                        </div>
                        <div className="course-card__label-reviews">4.5</div>
                        <div className="course-card__label-timer">25 hours</div>
                      </div>
                    </a>
                    <div className="course-card__footer">
                      <ul className="course-card__stats">
                        <li>5M views</li>
                        <li>15 days ago</li>
                      </ul>
                      <a
                        href="course_detail_view.html"
                        className="course-card__title"
                      >
                        The Complete JavaScript Course 2020: Build Real
                        Projects!
                      </a>
                      <a href="#" className="course-card__cate">
                        Development | JavaScript
                      </a>
                      <div className="course-card__info">
                        <p className="course-card__author">
                          By <a href="#">Jassica William</a>
                        </p>
                        <div className="course-card__price">$5</div>
                      </div>
                    </div>
                  </div>
                  <div className="course-card">
                    <a
                      href="#"
                      className="course-card__header course-card__header--bigger"
                    >
                      <Image
                        src="/images/courses/img-3.jpg"
                        alt=""
                        layout="fill"
                      />
                      <div className="course-card__header-overlay">
                        <div className="course-card__label-bestseller">
                          Bestseller
                        </div>
                        <div className="course-card__label-reviews">4.5</div>
                        <div className="course-card__label-timer">25 hours</div>
                      </div>
                    </a>
                    <div className="course-card__footer">
                      <ul className="course-card__stats">
                        <li>1M views</li>
                        <li>18 days ago</li>
                      </ul>
                      <a
                        href="course_detail_view.html"
                        className="course-card__title"
                      >
                        Beginning C++ Programming - From Beginner to Beyond
                      </a>
                      <a href="#" className="course-card__cate">
                        Development | C++
                      </a>
                      <div className="course-card__info">
                        <p className="course-card__author">
                          By <a href="#">Joginder Singh</a>
                        </p>
                        <div className="course-card__price">$13</div>
                      </div>
                    </div>
                  </div>
                  <div className="course-card">
                    <a
                      href="#"
                      className="course-card__header course-card__header--bigger"
                    >
                      <Image
                        src="/images/courses/img-4.jpg"
                        alt=""
                        layout="fill"
                      />
                      <div className="course-card__header-overlay">
                        <div className="course-card__label-bestseller">
                          Bestseller
                        </div>
                        <div className="course-card__label-reviews">4.5</div>
                        <div className="course-card__label-timer">25 hours</div>
                      </div>
                    </a>
                    <div className="course-card__footer">
                      <ul className="course-card__stats">
                        <li>153k views</li>
                        <li>3 months ago</li>
                      </ul>
                      <a
                        href="course_detail_view.html"
                        className="course-card__title"
                      >
                        The Complete Digital Marketing Course - 12 Courses in 1
                      </a>
                      <a href="#" className="course-card__cate">
                        Digital Marketing | Marketing
                      </a>
                      <div className="course-card__info">
                        <p className="course-card__author">
                          By <a href="#">Poonam Verma</a>
                        </p>
                        <div className="course-card__price">$12</div>
                      </div>
                    </div>
                  </div>
                  <div className="course-card">
                    <a
                      href="#"
                      className="course-card__header course-card__header--bigger"
                    >
                      <Image
                        src="/images/courses/img-5.jpg"
                        alt=""
                        layout="fill"
                      />
                      <div className="course-card__header-overlay">
                        <div className="course-card__label-bestseller">
                          Bestseller
                        </div>
                        <div className="course-card__label-reviews">4.5</div>
                        <div className="course-card__label-timer">25 hours</div>
                      </div>
                    </a>
                    <div className="course-card__footer">
                      <ul className="course-card__stats">
                        <li>53k views</li>
                        <li>14 days ago</li>
                      </ul>
                      <a
                        href="course_detail_view.html"
                        className="course-card__title"
                      >
                        Microsoft Excel - Excel from Beginner to Advanced
                      </a>
                      <a href="#" className="course-card__cate">
                        Office Productivity | Excel
                      </a>
                      <div className="course-card__info">
                        <p className="course-card__author">
                          By <a href="#">Rock William</a>
                        </p>
                        <div className="course-card__price">$6</div>
                      </div>
                    </div>
                  </div>
                  <div className="course-card">
                    <a
                      href="#"
                      className="course-card__header course-card__header--bigger"
                    >
                      <Image
                        src="/images/courses/img-6.jpg"
                        alt=""
                        layout="fill"
                      />
                      <div className="course-card__header-overlay">
                        <div className="course-card__label-bestseller">
                          Bestseller
                        </div>
                        <div className="course-card__label-reviews">4.5</div>
                        <div className="course-card__label-timer">25 hours</div>
                      </div>
                    </a>
                    <div className="course-card__footer">
                      <ul className="course-card__stats">
                        <li>253k views</li>
                        <li>10 days ago</li>
                      </ul>
                      <a
                        href="course_detail_view.html"
                        className="course-card__title"
                      >
                        Angular 8 - The Complete Guide (2020 Edition)
                      </a>
                      <a href="#" className="course-card__cate">
                        Development | Angular
                      </a>
                      <div className="course-card__info">
                        <p className="course-card__author">
                          By <a href="#">John Doe</a>
                        </p>
                        <div className="course-card__price">$15</div>
                      </div>
                    </div>
                  </div>
                  <div className="course-card">
                    <a
                      href="#"
                      className="course-card__header course-card__header--bigger"
                    >
                      <Image
                        src="/images/courses/img-7.jpg"
                        alt=""
                        layout="fill"
                      />
                      <div className="course-card__header-overlay">
                        <div className="course-card__label-bestseller">
                          Bestseller
                        </div>
                        <div className="course-card__label-reviews">4.5</div>
                        <div className="course-card__label-timer">25 hours</div>
                      </div>
                    </a>
                    <div className="course-card__footer">
                      <ul className="course-card__stats">
                        <li>109k views</li>
                        <li>15 days ago</li>
                      </ul>
                      <a
                        href="course_detail_view.html"
                        className="course-card__title"
                      >
                        WordPress for Beginners: Create a Website Step by Step
                      </a>
                      <a href="#" className="course-card__cate">
                        Design | Wordpress
                      </a>
                      <div className="course-card__info">
                        <p className="course-card__author">
                          By <a href="#">Sabnam SIngh</a>
                        </p>
                        <div className="course-card__price">$18</div>
                      </div>
                    </div>
                  </div>
                  <div className="course-card">
                    <a
                      href="#"
                      className="course-card__header course-card__header--bigger"
                    >
                      <Image
                        src="/images/courses/img-1.jpg"
                        alt=""
                        layout="fill"
                      />
                      <div className="course-card__header-overlay">
                        <div className="course-card__label-bestseller">
                          Bestseller
                        </div>
                        <div className="course-card__label-reviews">4.5</div>
                        <div className="course-card__label-timer">25 hours</div>
                      </div>
                    </a>
                    <div className="course-card__footer">
                      <ul className="course-card__stats">
                        <li>196k views</li>
                        <li>1 month ago</li>
                      </ul>
                      <a
                        href="course_detail_view.html"
                        className="course-card__title"
                      >
                        CSS - The Complete Guide 2020 (incl. Flexbox, Grid &
                        Sass)
                      </a>
                      <a href="#" className="course-card__cate">
                        Design | CSS
                      </a>
                      <div className="course-card__info">
                        <p className="course-card__author">
                          By <a href="#">Jashanpreet Singh</a>
                        </p>
                        <div className="course-card__price">$10</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

MyCoursesPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppView
      header={<HeaderComponent />}
      content={
        <Layout>
          <HeaderElement />
          <TabSet />
          {page}
        </Layout>
      }
      footer={<FooterComponent />}
    />
  );
};

export const getServerSideProps: GetServerSideProps<SSRConfig> = async (
  context
) => {
  const { req, res } = context;
  const cookie = nookies.get(context);

  if (!cookie.token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const token = parseCookies({ req }).token;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("coursesTeacher", () =>
    api.getTeacherCourses(token, 1, 10)
  );

  return {
    props: {
      token,
      dehydratedState: dehydrate(queryClient),
      ...(await serverSideTranslations(getLocale(context))),
    },
  };
};

export default MyCoursesPage;
