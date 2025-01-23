import { LinkProps } from "react-router-dom";

interface LinkElementProps {
  children: string;
  linkTo?: string;
  className?: string;
}

interface ButtonElementProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

type LinkOrButtonProps = LinkElementProps & ButtonElementProps;

export { LinkElementProps, ButtonElementProps, LinkOrButtonProps };
