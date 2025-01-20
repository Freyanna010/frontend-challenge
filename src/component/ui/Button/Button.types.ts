export type ButtonProps = {
  variant: "text" | "icon";
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};
