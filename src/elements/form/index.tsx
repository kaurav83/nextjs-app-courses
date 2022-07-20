import { FC, ReactElement, HTMLAttributes } from "react";

type Props = {
  children: ReactElement;
  className: string;
  submit: () => void;
};

export const Form: FC<Props> = ({ children, className, submit }) => {
  return (
    <form className={className} onSubmit={submit}>
      {children}
    </form>
  );
};
