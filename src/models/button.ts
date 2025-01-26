import { ReactNode } from "react";
interface LinkElementProps {
  children: ReactNode;
  linkTo?: string;
  className?: string;
}
interface ButtonElementProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

type LinkOrButtonProps = LinkElementProps & ButtonElementProps;

export { LinkElementProps, ButtonElementProps, LinkOrButtonProps };
