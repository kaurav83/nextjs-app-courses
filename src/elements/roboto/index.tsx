import { FC, ReactElement } from "react";

type Props = {
  children?: never;
};

export const RobotoElement: FC<Props> = (): ReactElement => {
  return (
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
    />
  );
};
