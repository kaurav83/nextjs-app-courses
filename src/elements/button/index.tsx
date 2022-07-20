import { FC, ReactElement } from "react";

type Props = {
  children: string | ReactElement;
  type: "button" | "submit" | "reset" | undefined;
  className: string;
};

export const Button: FC<Props> = ({ children, type, className }) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
