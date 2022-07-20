import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const LogoElement: FC = () => (
  <Link href="/">
    <a className="nav__logo">
      <Image src="/images/logo.svg" alt="" width={135} height={35} />
    </a>
  </Link>
);
