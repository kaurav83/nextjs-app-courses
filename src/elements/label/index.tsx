import { FC, ReactElement } from "react";

type Props = {
  children: ReactElement;
};

export const Label: FC<Props> = ({ children }) => <label>{children}</label>;
