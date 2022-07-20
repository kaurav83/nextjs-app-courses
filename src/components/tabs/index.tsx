import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const TabSet: FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { pathname } = router;
  return (
    <section className="banner banner--pt">
      <div className="container">
        <div className="course_tabs">
          <div className="tabs" id="tab" role="tablist">
            <nav>
              <div className="nav nav-tabs tab_crse">
                <Link href="/teacher/about">
                  <a
                    className={
                      pathname.match("/teacher/about")
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                  >
                    {t("courses-teacher:aboutTeacher")}
                  </a>
                </Link>
                <Link href="/teacher/courses">
                  <a
                    className={
                      pathname.match("/teacher/courses")
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                  >
                    {t("courses-teacher:coursesTeacher")}
                  </a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
