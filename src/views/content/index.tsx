import { FC, ReactElement } from "react";

type Props = {
  content: ReactElement;
  sidebar: ReactElement;
};

export const ContentView: FC<Props> = ({ content, sidebar }) => (
  <>
    <section className="courses-layout__side-left">
      <div className="courses-layout__container">{content}</div>
    </section>
    <aside className="courses-layout__side-right">{sidebar}</aside>
  </>
);
