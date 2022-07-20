import { FC, ReactElement, ReactNode } from "react";

type Props = {
  children: ReactElement | ReactElement[];
};

const Layout: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
