import { FC } from "react";
import { CourseElement } from "../../elements/course";
import { Course } from "../../types";

type Props = {
  courses: Course[];
};

export const CoursesComponent: FC<Props> = ({ courses }) => {
  const coursesJSX =
    Array.isArray(courses) &&
    courses.map((course, index) => {
      const key = `id-${index}`;

      return (
        <div key={key}>
          <CourseElement course={course} hash={`/courses/${course.hash}`} />
        </div>
      );
    });

  return <>{coursesJSX}</>;
};
