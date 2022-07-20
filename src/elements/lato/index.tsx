import { FC, ReactElement } from "react";

type Props = {
  children?: never;
};

export const LatoElement: FC<Props> = (): ReactElement => {
  return (
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    />
  );
};
