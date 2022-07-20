import { FC, ReactElement } from "react";
import { useRouter } from "next/router";

type Props = {
  header: ReactElement;
  content: ReactElement;
  footer: ReactElement;
};

export const AppView: FC<Props> = ({ header, content, footer }) => {
  const router = useRouter();
  return (
    <>
      {header}
      <main
        className={
          router.asPath === "/teacher/courses"
            ? "courses-layout-total container"
            : "courses-layout container"
        }
      >
        {content}
      </main>
      {footer}
    </>
  );
};
