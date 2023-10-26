export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
  link = "link",
}

export enum ButtonComponent {
  a = "a",
  button = "button",
}

export interface ButtonProps {
  variant?: ButtonVariant;
  component?: ButtonComponent;
  title?: string;
  titleId?: string;
  href?: string;
  onClick?: () => void;
}
