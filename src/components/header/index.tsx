import { FC } from "react";
import { LogoElement } from "../../elements/logo";
import { Menu } from "../../elements/menu";

export const HeaderComponent: FC = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__side-left">
          <LogoElement />
        </div>
        <div className="nav__side-right">
          <Menu />
        </div>
      </div>
    </nav>
  );
};
